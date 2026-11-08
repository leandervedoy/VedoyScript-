import React,{useMemo,useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeSnippet from '../components/CodeSnippet.jsx';
import styles from './reference.module.css';

const reference=[
 {command:'Page',group:'UI',state:'Beta',syntax:'Page "Title".',description:'Create the root page and document title.',
  example:'Page "Home".\n    Heading "Welcome".'},
 {command:'Heading',group:'UI',state:'Beta',syntax:'Heading "Text".',description:'Render a semantic first-level heading.',
  example:'Page "Home".\n    Heading "Welcome".'},
 {command:'Subheading',group:'UI',state:'Beta',syntax:'Subheading "Text".',description:'Render a second-level heading.',
  example:'Page "Home".\n    Subheading "What we offer".'},
 {command:'Text',group:'UI',state:'Beta',syntax:'Text "Text".',description:'Render a paragraph.',
  example:'Page "Home".\n    Text "Build with VedoyScript".'},
 {command:'Section / Row / Column',group:'Layout',state:'Beta',syntax:'Section. / Row. / Column.',description:'Group nested elements in a section or row/column.',
  example:'Page "Home".\n    Section.\n        Text "About us".'},
 {command:'Button',group:'UI',state:'Beta',syntax:'Button "Label" as "alias".',description:'Render an interactive button, optionally with an alias.',
  example:'Page "Home".\n    Button "Open" as "open".'},
 {command:'When Click',group:'Events',state:'Beta',syntax:'When Click "alias".',description:'Handle clicks from a named button.',
  example:'Page "Home".\n    Button "Open" as "open".\n    When Click "open".\n        Show "Hello!".'},
 {command:'Show',group:'Events',state:'Beta',syntax:'Show "Text".',description:'Display a simple browser message in a click handler.',
  example:'Page "Home".\n    Button "Go".\n    When Click "Go".\n        Show "Ready".'},
 {command:'Data',group:'Data',state:'Beta',syntax:'Data. / Object ... / List ... / Set ...',description:'Create structured compile-time values.',
  example:'Data.\n    Set Name to "Vedoy".\nPage "$Name".\n    Heading "$Name".'},
 {command:'Get',group:'API',state:'Experimental',syntax:'Get "/api/items" as "items".',description:'Fetch JSON from a same-origin API in HTML output.',
  example:'Page "Items".\n    Button "Load".\n    When Click "Load".\n        Get "/api/items" as "items".\n        Show JSON "items".'},
 {command:'Post',group:'API',state:'Experimental',syntax:'Post "/api/orders" with "Order" as "result".',description:'Send a named Data value as JSON to a same-origin route.',
  example:'Data.\n    Object Order.\n        Set count to 2.\nPage "Orders".\n    Button "Save".\n    When Click "Save".\n        Post "/api/orders" with "Order" as "saved".\n        Show JSON "saved".'},
 {command:'Show JSON',group:'API',state:'Experimental',syntax:'Show JSON "response".',description:'Render JSON safely as text.',
  example:'Page "Items".\n    Button "Load".\n    When Click "Load".\n        Get "/api/items" as "response".\n        Show JSON "response".'}
];
export default function Reference(){
 const [query,setQuery]=useState(''),[category,setCategory]=useState('All');
 const groups=['All',...new Set(reference.map(x=>x.group))];
 const results=useMemo(()=>reference.filter(item=>
  (category==='All'||item.group===category)&&
  [item.command,item.syntax,item.description,item.state].join(' ').toLowerCase().includes(query.toLowerCase().trim())
 ),[query,category]);
 return <Layout title="Language API reference" description="The current VedoyScript command reference and experimental API syntax">
  <main className="container" style={{padding:'75px 16px 120px'}}><div className={styles.heading}>
   <p className={styles.eyebrow}>VEDOYSCRIPT REFERENCE</p><h1>Every command, explained.</h1>
   <p>Search a reference to the implemented beta and the experimental API extensions. Planned language features are documented separately.</p></div>
   <div className={styles.filters}><label htmlFor="reference-search">Filter commands</label>
    <input id="reference-search" type="search" value={query} onChange={e=>setQuery(e.target.value)}
      placeholder="Search: Page, JSON, Get, Post..."/>
    <div role="group" aria-label="Command categories">{groups.map(x=><button key={x}
      type="button" aria-pressed={category===x} className={category===x?styles.active:''}
      onClick={()=>setCategory(x)}>{x}</button>)}</div>
   </div>
   <p aria-live="polite">{results.length} matching commands</p>
   <div className={styles.list}>{results.map(item=><article className={styles.card} key={item.command}>
      <div className={styles.top}><h2>{item.command}</h2><span>{item.state}</span></div>
      <p>{item.description}</p><p className={styles.syntax}><code>{item.syntax}</code></p>
      <CodeSnippet code={item.example} filename={item.command.toLowerCase().replaceAll(' ','-')+'.vds'}/>
   </article>)}</div>
   <p>See <Link to="/docs/capabilities">full capability status</Link> or <Link to="/docs/api-json">API and JSON guide</Link>.</p>
  </main>
 </Layout>;
}
