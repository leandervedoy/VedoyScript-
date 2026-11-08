import React,{useMemo,useEffect,useRef,useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {docsIndex} from '../data/docsIndex.js';
import styles from './search.module.css';

const normalize=value=>String(value).toLocaleLowerCase('en').normalize('NFKD');
function rank(doc,query){
 const search=normalize(query).trim();
 if(!search)return 1;
 const words=search.split(/\s+/).filter(Boolean);
 const title=normalize(doc.title),description=normalize(doc.description);
 const category=normalize(doc.category),keywords=normalize(doc.keywords);
 let score=0;
 for(const word of words){
   if(title===word)score+=25;
   else if(title.startsWith(word))score+=15;
   else if(title.includes(word))score+=9;
   else if(keywords.includes(word))score+=6;
   else if(category.includes(word))score+=4;
   else if(description.includes(word))score+=2;
   else return 0;
 }
 return score;
}
export default function SearchPage(){
 const [query,setQuery]=useState('');
 const [filter,setFilter]=useState('All');
 const field=useRef(null);
 useEffect(()=>{
   function onKey(event){
     if((event.key==='/' && !['INPUT','TEXTAREA'].includes(event.target?.tagName)) ||
        ((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k')){
       event.preventDefault();field.current?.focus();
     }
   }
   window.addEventListener('keydown',onKey);
   return()=>window.removeEventListener('keydown',onKey);
 },[]);
 const categories=useMemo(()=>['All',...new Set(docsIndex.map(x=>x.category))],[]);
 const matches=useMemo(()=>docsIndex
   .filter(doc=>filter==='All'||doc.category===filter)
   .map(doc=>({...doc,score:rank(doc,query)}))
   .filter(doc=>doc.score>0)
   .sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title)),[query,filter]);
 return <Layout title="Search documentation" description="Search VedoyScript guides, language reference and API documentation">
  <main className={styles.page}><div className="container"><p className={styles.eyebrow}>DOCUMENTATION SEARCH</p>
   <h1>Find what you need.</h1><p>Browse {docsIndex.length} guides and reference entries. Search is local and does not send your query to a server.</p>
   <div className={styles.searchbar}><label htmlFor="docs-search">Search documentation</label>
     <input id="docs-search" ref={field} type="search" autoComplete="off"
       placeholder="Try API, JSON, modules, performance..." value={query} onChange={event=>setQuery(event.target.value)}/>
     <small>Keyboard shortcut: / or Ctrl/⌘ K</small>
   </div>
   <div className={styles.filters} aria-label="Search categories">{categories.map(category=>
     <button key={category} type="button" aria-pressed={category===filter}
       className={category===filter?styles.selected:''} onClick={()=>setFilter(category)}>{category}</button>)}</div>
   <div aria-live="polite" className={styles.count}>{matches.length} result{matches.length===1?'':'s'}</div>
   <div className={styles.list}>{matches.length?matches.map(doc=><Link className={styles.item} to={doc.href} key={doc.href}>
      <span className={styles.kind}>{doc.category}</span><h2>{doc.title}</h2><p>{doc.description}</p></Link>):
      <div className={styles.empty}><h2>No matching pages</h2><p>Try fewer words or choose a different category.</p>
      <button type="button" onClick={()=>{setQuery('');setFilter('All');}}>Clear filters</button></div>}</div>
  </div></main>
 </Layout>;
}
