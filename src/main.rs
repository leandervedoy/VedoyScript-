use std::{env, fs, process};

fn identifier(s: &str) -> bool {
    let mut chars = s.chars();
    matches!(chars.next(), Some('A'..='Z' | 'a'..='z' | '_'))
        && chars.all(|c| c.is_ascii_alphanumeric() || c == '_')
}

fn expression(s: &str) -> bool {
    !s.is_empty()
        && !s.contains(['\n', '\r', ';', '{', '}'])
}

fn compile(source: &str) -> Result<String, String> {
    let mut js = String::from("// Experimental VedoyScript output\n");
    let mut in_function = false;
    for (index, raw) in source.lines().enumerate() {
        let line = raw.trim();
        if line.is_empty() || line.starts_with('#') {
            continue;
        }
        let indentation = raw.len() - raw.trim_start().len();
        if raw[..indentation].contains('\t') {
            return Err(format!("Line {}: tabs are not supported", index + 1));
        }
        if indentation == 0 {
            if in_function {
                js.push_str("}\n");
                in_function = false;
            }
            let name = line
                .strip_prefix("Function ")
                .and_then(|s| s.strip_suffix("():"))
                .ok_or_else(|| format!("Line {}: expected Function Name():", index + 1))?;
            if !identifier(name) {
                return Err(format!("Line {}: invalid function name", index + 1));
            }
            js.push_str(&format!("function {name}() {{\n"));
            in_function = true;
        } else if indentation == 4 && in_function {
            if let Some(body) = line.strip_prefix("Let ").and_then(|s| s.strip_suffix('.')) {
                let (name, value) = body.split_once(" = ")
                    .ok_or_else(|| format!("Line {}: invalid Let", index + 1))?;
                if !identifier(name) || !expression(value) {
                    return Err(format!("Line {}: invalid assignment", index + 1));
                }
                js.push_str(&format!("  const {name} = {value};\n"));
            } else if let Some(value) = line.strip_prefix("Return ").and_then(|s| s.strip_suffix('.')) {
                if !expression(value) {
                    return Err(format!("Line {}: invalid return", index + 1));
                }
                js.push_str(&format!("  return {value};\n"));
            } else {
                return Err(format!("Line {}: unsupported statement", index + 1));
            }
        } else {
            return Err(format!("Line {}: unexpected indentation", index + 1));
        }
    }
    if in_function {
        js.push_str("}\n");
    }
    Ok(js)
}

fn main() {
    let args: Vec<_> = env::args().collect();
    if args.len() != 3 || args[1] != "compile" {
        eprintln!("Usage: vedoyscript compile <file.vdy>");
        process::exit(2);
    }
    let source = fs::read_to_string(&args[2]).unwrap_or_else(|error| {
        eprintln!("Read error: {error}");
        process::exit(1);
    });
    match compile(&source) {
        Ok(js) => print!("{js}"),
        Err(error) => {
            eprintln!("{error}");
            process::exit(1);
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn compiles_simple_function() {
        let js = compile("Function Hello():\n    Let Name = \"Vedoy\".\n    Return Name.\n").unwrap();
        assert!(js.contains("function Hello() {"));
        assert!(js.contains("const Name = \"Vedoy\";"));
    }
    #[test]
    fn rejects_bad_indentation() {
        assert!(compile("Function Hello():\n  Return 1.").is_err());
    }
    #[test]
    fn rejects_unknown_syntax() {
        assert!(compile("Execute Anything.").is_err());
    }
}
