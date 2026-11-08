import React,{useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './learn.module.css';

const lessons=[
 {id:'page',title:'Create a page',summary:'Every web example starts with a Page declaration.',
  task:'Write a Page command with the title "Hello".',
  starter:'Page "Hello".',checks:[{label:'Declare a Page title',pattern:/^Page "Hello"\.$/m}],
  hint:'Use capital P, quotes around the title, and a period.'},
 {id:'heading',title:'Add a heading',summary:'Indent content by four spaces inside a Page.',
  task:'Add Heading "Welcome" under Page "Hello".',
  starter:'Page "Hello".\n    Heading "Welcome".',
  checks:[{label:'Declare a Page',pattern:/^Page "Hello"\.$/m},{label:'Indent a heading',pattern:/^ {4}Heading "Welcome"\.$/m}],
  hint:'The Heading must be indented by exactly four spaces.'},
 {id:'data',title:'Define static data',summary:'Keep basic structured values in the Data block.',
  task:'Declare a Data block with Set Product to "Lamp".',
  starter:'Data.\n    Set Product to "Lamp".\nPage "Store".\n    Heading "$Product".',
  checks:[{label:'Create Data block',pattern:/^Data\.$/m},{label:'Store a string value',pattern:/^ {4}Set Product to "Lamp"\.$/m},
    {label:'Create a Page',pattern:/^Page "Store"\.$/m}],
  hint:'Start with Data. and indent Set under it.'},
 {id:'click',title:'Handle a click',summary:'Connect a button to a When Click block.',
  task:'Add a button named "Try" and a click handler that shows "Hello".',
  starter:'Page "Demo".\n    Button "Try".\n    When Click "Try".\n        Show "Hello".',
  checks:[{label:'Declare the button',pattern:/^ {4}Button "Try"\.$/m},
    {label:'Attach click handler',pattern:/^ {4}When Click "Try"\.$/m},
    {label:'Indent a Show action',pattern:/^ {8}Show "Hello"\.$/m}],
  hint:'Use eight spaces before Show, because it is nested under When Click.'},
 {id:'api',title:'Request JSON from an API',summary:'The experimental HTML API adapter can request same-origin JSON.',
  task:'Get /api/products as products, then show the JSON in a click handler.',
  starter:'Page "Store".\n    Button "Products".\n    When Click "Products".\n        Get "/api/products" as "products".\n        Show JSON "products".',
  checks:[{label:'Use the same-origin API',pattern:/^ {8}Get "\/api\/products" as "products"\.$/m},
    {label:'Render JSON response',pattern:/^ {8}Show JSON "products"\.$/m}],
  hint:'Use /api/ paths, not arbitrary URLs. This syntax is experimental in Polyglot PR #8.',
  experimental:true}
];
export default function Learn(){
 const [current,setCurrent]=useState(0);
 const [codes,setCodes]=useState(()=>lessons.map(x=>x.starter));
 const [validated,setValidated]=useState({});
 const [showHint,setShowHint]=useState(false);
 const lesson=lessons[current],code=codes[current];
 const result=validated[lesson.id];
 const completed=Object.values(validated).filter(Boolean).length;
 const check=()=>setValidated(prev=>({...prev,[lesson.id]:lesson.checks.every(c=>c.pattern.test(code))}));
 const update=value=>{
   setCodes(prev=>prev.map((x,i)=>i===current?value:x));
   setValidated(prev=>({...prev,[lesson.id]:undefined}));
 };
 const choose=i=>{setCurrent(i);setShowHint(false)};
 return <Layout title="Learn VedoyScript" description="Interactive syntax exercises for VedoyScript beginners">
  <main className={styles.page}><div className="container"><div className={styles.intro}>
   <span>INTERACTIVE LEARNING</span><h1>Learn it by writing it.</h1><p>Five small lessons. No account required, no installation, and no server-side code execution.</p>
   <div className={styles.progress}><div style={{width:(completed/lessons.length*100)+'%'}}/></div>
   <small>{completed} of {lessons.length} lessons completed this session</small>
  </div>
  <div className={styles.layout}>
   <nav className={styles.lessons} aria-label="Lessons">{lessons.map((x,i)=>
    <button className={i===current?styles.active:''} key={x.id} onClick={()=>choose(i)}>
      <b>{validated[x.id]?'✓':String(i+1).padStart(2,'0')}</b><span>{x.title}</span></button>)}</nav>
   <section className={styles.panel}><span className={styles.number}>LESSON {current+1}/{lessons.length}{lesson.experimental?' · EXPERIMENTAL':''}</span>
    <h2>{lesson.title}</h2><p>{lesson.summary}</p><div className={styles.task}><b>Your task</b><p>{lesson.task}</p></div>
    <label htmlFor="lesson-editor">VedoyScript source (.vds)</label>
    <textarea id="lesson-editor" spellCheck={false} rows={Math.max(6,code.split('\n').length+2)}
       value={code} onChange={event=>update(event.target.value)} aria-describedby="learn-note"/>
    <div className={styles.actions}><button className={styles.primary} onClick={check}>Check my syntax</button>
      <button className={styles.secondary} onClick={()=>setShowHint(!showHint)}>{showHint?'Hide hint':'Show hint'}</button>
      <button className={styles.secondary} onClick={()=>update(lesson.starter)}>Reset</button></div>
    {showHint&&<p className={styles.hint}>{lesson.hint}</p>}
    {result===true&&<p className={styles.success} role="status">✓ All lesson checks passed. Great work!</p>}
    {result===false&&<div role="status" className={styles.needs}><b>Not quite yet:</b>
      <ul>{lesson.checks.filter(x=>!x.pattern.test(code)).map(x=><li key={x.label}>{x.label}</li>)}</ul></div>}
    <p id="learn-note" className={styles.note}>This verifies the exercise patterns only; it does not execute or fully compile VedoyScript. For the actual compiler, see <Link to="/docs/getting-started">Getting started</Link>.</p>
    <div className={styles.pager}><button disabled={current===0} onClick={()=>choose(current-1)}>← Previous</button>
      <button disabled={current===lessons.length-1} onClick={()=>choose(current+1)}>Next lesson →</button></div>
   </section>
  </div></div></main>
 </Layout>;
}
