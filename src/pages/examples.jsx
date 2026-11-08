import React,{useMemo,useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeSnippet from '../components/CodeSnippet.jsx';
import styles from './examples.module.css';

const cases=[
 {name:'Hello world',type:'Beta',category:'UI',description:'A page with a heading and a working button handler.',
  code:'Page "Hello".\n    Heading "Hello".\n    Button "Try" as "go".\n    When Click "go".\n        Show "Hello!".'},
 {name:'Product page',type:'Beta',category:'Data',description:'Store structured content and reference values without raw JSON.',
  code:'Data.\n    Set Product to "Smart Plug".\n    Set Price to 299.\nPage "$Product".\n    Heading "$Product".\n    Text "From $Price NOK".'},
 {name:'Grouped layout',type:'Beta',category:'UI',description:'Render related sections with declarative grouping.',
  code:'Page "Portfolio".\n    Row.\n        Section.\n            Subheading "Design".\n            Text "Our work".\n        Section.\n            Subheading "Engineering".\n            Text "Our code".'},
 {name:'Update button text',type:'Beta',category:'Events',description:'Use a click action to change visible text.',
  code:'Page "Counter Demo".\n    Button "Start" as "start".\n    When Click "start".\n        Set Text of "start" to "Done".'},
 {name:'Fetch product JSON',type:'Experimental',category:'API',description:'Same-origin GET with JSON response display. Requires a backend route.',
  code:'Page "Shop".\n    Button "Load".\n    When Click "Load".\n        Get "/api/products" as "items".\n        Show JSON "items".'},
 {name:'Send order JSON',type:'Experimental',category:'API',description:'POST an existing VedoyScript Data object; requires a server route.',
  code:'Data.\n    Object Order.\n        Set product to "smart-plug".\n        Set quantity to 2.\nPage "Shop".\n    Button "Save".\n    When Click "Save".\n        Post "/api/orders" with "Order" as "saved".\n        Show JSON "saved".'},
 {name:'Python recommendations',type:'Experimental',category:'Polyglot',description:'Forge Polyglot local module bridge is not production ready.',
  code:'Page "Smart Home".\n    Button "Find products".\n    When Click "Find products".\n        Call Module "recommendations" with "lighting".'}
];
export default function Examples(){
 const [selected,setSelected]=useState(0),[filter,setFilter]=useState('All');
 const groups=['All',...new Set(cases.map(x=>x.category))];
 const shown=useMemo(()=>cases.map((x,i)=>({...x,i})).filter(x=>filter==='All'||x.category===filter),[filter]);
 const chosen=cases[selected];
 return <Layout title="Examples" description="VedoyScript code examples from web pages to experimental API integration">
  <main className={styles.page}><div className="container"><p className={styles.eyebrow}>EXAMPLE GALLERY</p>
    <h1>Build something useful.</h1>
    <p>Explore working beta syntax alongside carefully labeled experimental features.</p>
    <div className={styles.filters} aria-label="Filter examples">{groups.map(x=><button key={x}
      onClick={()=>{setFilter(x);setSelected(x==='All'?0:cases.findIndex(c=>c.category===x));}}
      aria-pressed={x===filter} className={x===filter?styles.active:''}>{x}</button>)}</div>
    <div className={styles.grid}>
      <nav aria-label="Examples" className={styles.list}>{shown.map(x=><button key={x.name}
        aria-current={selected===x.i?'true':undefined} className={selected===x.i?styles.selected:''} onClick={()=>setSelected(x.i)}>
         <strong>{x.name}</strong><small>{x.type} · {x.category}</small></button>)}</nav>
      <section className={styles.detail}><small>{chosen.type.toUpperCase()} · {chosen.category.toUpperCase()}</small>
        <h2>{chosen.name}</h2><p>{chosen.description}</p>
        <CodeSnippet code={chosen.code} filename={chosen.category.toLowerCase()+'.vds'}
          caption={chosen.type==='Experimental'?'Experimental syntax: requires the corresponding development branch.':''}/>
        <p><Link to={chosen.category==='API'?'/docs/api-json':'/docs/syntax'}>Read the related guide →</Link></p>
      </section>
    </div>
  </div></main>
 </Layout>;
}
