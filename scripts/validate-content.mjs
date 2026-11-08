import {stat,readdir,readFile} from 'node:fs/promises';import {join} from 'node:path';
const root=new URL('../',import.meta.url);
const required=['README.md','package.json','docusaurus.config.js','sidebars.js','src/pages/index.jsx','src/pages/examples.jsx','src/pages/performance.jsx','static/img/website-preview.svg','docs/intro.md','docs/performance.md'];
for(const file of required)await stat(new URL(file,root));
const docs=(await readdir(new URL('docs/',root))).filter(n=>n.endsWith('.md'));
if(docs.length!==16)throw new Error('Expected 16 docs, found '+docs.length);
const readme=await readFile(new URL('README.md',root),'utf8');
if(!readme.includes('static/img/website-preview.svg'))throw new Error('README missing website preview');
console.log('VedoyScript documentation check passed:',docs.length,'pages');
