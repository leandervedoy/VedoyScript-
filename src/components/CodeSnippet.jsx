import React,{useState} from 'react';
import styles from './CodeSnippet.module.css';

/**
 * A small, dependency-free code panel for docs-site examples.
 * Never interprets source code. Text is escaped by React automatically.
 */
export default function CodeSnippet({code,filename='example.vds',caption='',language='VedoyScript'}){
  const [copied,setCopied]=useState(false);
  const copy=async()=>{
    try{
      if(!navigator.clipboard)throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(code);
      setCopied(true);
    }catch{
      setCopied(false);
    }
  };
  return <div className={styles.panel}>
    <div className={styles.header}><div><strong>{filename}</strong><span>{language}</span></div>
      <button type="button" onClick={copy} aria-label={'Copy '+filename+' code'}>{copied?'✓ Copied':'Copy code'}</button></div>
    <pre tabIndex={0}><code>{code}</code></pre>
    {caption&&<p className={styles.caption}>{caption}</p>}
    <span className={styles.sr} role="status" aria-live="polite">{copied?'Copied to clipboard':''}</span>
  </div>;
}
