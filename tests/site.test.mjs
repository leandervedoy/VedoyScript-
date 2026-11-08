import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const get = path => readFile(new URL(path,root),'utf8');

test('26 unique documented topics with titles and sidebar order', async()=>{
 const files = (await readdir(new URL('docs/',root))).filter(x=>x.endsWith('.md'));
 assert.equal(files.length,26);
 const titles = new Set(), positions = new Set();
 for(const file of files){
   const source=await get('docs/'+file);
   assert.match(source,/^---\n[\s\S]*?\n---\n/);
   const title=/^title: (.+)$/m.exec(source);
   const pos=/^sidebar_position: (\d+)$/m.exec(source);
   assert.ok(title&&pos,'Missing frontmatter: '+file);
   assert.ok(!titles.has(title[1]),'Duplicate title: '+title[1]);
   assert.ok(!positions.has(Number(pos[1])),'Duplicate sidebar position: '+pos[1]);
   titles.add(title[1]);positions.add(Number(pos[1]));
 }
 assert.deepEqual([...positions].sort((a,b)=>a-b),Array.from({length:26},(_,i)=>i+1));
});
test('search index has one entry per document and every link resolves', async()=>{
 const index=await get('src/data/docsIndex.js');
 const slugs=[...index.matchAll(/href:"\/docs\/([^"]+)"/g)].map(match=>match[1]);
 assert.equal(slugs.length,26);
 assert.equal(new Set(slugs).size,26);
 for(const slug of slugs)await stat(new URL('docs/'+slug+'.md',root));
});
test('interactive learning and examples do not claim to execute untrusted code', async()=>{
 const learn=await get('src/pages/learn.jsx');
 const examples=await get('src/pages/examples.jsx');
 assert.match(learn,/does not execute or fully compile VedoyScript/);
 assert.match(learn,/Get "\/api\/products"/);
 assert.match(examples,/Experimental/);
 assert.match(examples,/Post/);
 assert.doesNotMatch(learn,/\beval\s*\(/);
});
test('reference and API docs clearly label experimental features', async()=>{
 const reference=await get('src/pages/reference.jsx');
 const guide=await get('docs/api-json.md');
 assert.match(reference,/Experimental/);
 assert.match(guide,/not merged/);
 assert.match(guide,/Show JSON/);
 assert.match(guide,/POST/);
 assert.match(guide,/server/);
});
test('README contains valid preview and website routes', async()=>{
 const readme=await get('README.md');
 assert.match(readme,/static\/img\/website-preview.svg/);
 assert.match(readme,/26 documentation pages/);
 const image=await get('static/img/website-preview.svg');
 assert.match(image,/<svg/);
 for(const page of ['search','learn','examples','reference','performance','index']){
   await stat(new URL('src/pages/'+page+'.jsx',root));
 }
});
test('no product speed or source-reduction promises without a disclaimer',async()=>{
 const home=await get('src/pages/index.jsx');
 const performance=await get('docs/performance.md');
 assert.match(home,/Shorter source does not automatically mean faster runtime/);
 assert.match(performance,/80%|80% less|80% fewer|80% shorter/i);
 assert.match(performance,/not established|not guaranteed|ambition|not verified/i);
});
