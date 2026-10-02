(function () {
'use strict';
const $=s=>document.querySelector(s),data=JSON.parse($('#catalog').textContent),tax=JSON.parse($('#taxonomy').textContent),core=window.JevCatalog;
const nodes=Object.fromEntries(tax.categories.map(n=>[n.id,n])),tags=Object.fromEntries(tax.contributions.map(n=>[n.id,n])),models=Object.fromEntries(tax.models.map(n=>[n.id,n]));
const params=new URLSearchParams(location.search),validKinds=['Paper','Project','Official','Article','all','daily'];
let lang=params.get('lang')==='zh'?'zh':'en',kind=validKinds.includes(params.get('kind'))?params.get('kind'):'Paper',selected=(params.get('categories')||'').split(',').filter(x=>nodes[x]),activePath=[],filtered=[];
const words={en:{design:'Evaluation design',dataorigin:'Evaluation data origin',release:'Model release',license:'Model license',weights:'Weights',subtitle:'Papers, projects and documentation on Jev foundations, trustworthiness, and cybersecurity applications.',Paper:'Papers',Project:'Projects',Official:'Documentation',Article:'Articles',all:'All resources',daily:'Daily papers',search:'Search resources…',category:'Category',categoryHelp:'Select a category; choose subcategories on the right',allCategories:'All categories',selected:'selected',clearCategory:'Clear',target:'Models studied',tag:'Contribution',allOptions:'All',reset:'Reset filters',export:'Export CSV',author:'Author',name:'Name',summary:'Summary',datasets:'Datasets / benchmarks',links:'Links',source:'Source',origin:'Source platform',columns:'Columns',restore:'Reset columns',up:'Move left',down:'Move right',code:'Code',empty:'No matching resources.',hint:'Scroll horizontally. Drag a column edge to resize.',resources:'resources',dailyNote:'Grouped by first public publication date.',unindexed:'Not indexed yet',remove:'Remove'},zh:{design:'实验设计',dataorigin:'评测数据来源',release:'模型发布形式',license:'模型许可',weights:'模型权重',subtitle:'Jev 模型基础、自身可信性，以及网络与系统安全应用的论文、项目与技术资料。',Paper:'论文',Project:'项目',Official:'官方文档',Article:'文章',all:'全部资料',daily:'每日论文',search:'搜索资料…',category:'分类',categoryHelp:'勾选父类包含全部子类，可在右侧取消部分子类',allCategories:'全部分类',selected:'项已选',clearCategory:'清空',target:'研究对象',tag:'贡献标签',allOptions:'全部',reset:'重置筛选',export:'导出 CSV',author:'作者',name:'名称',summary:'内容',datasets:'数据集／基准',links:'链接',source:'原文',origin:'来源平台',columns:'显示列',restore:'恢复默认列',up:'向左移动',down:'向右移动',code:'代码',empty:'没有匹配的资料。',hint:'左右滚动查看完整表格，拖动表头边缘调整列宽。',resources:'条资料',dailyNote:'按论文首次公开发表日期排列。',unindexed:'暂未整理',remove:'移除'}};
const t=()=>words[lang],esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),name=(map,id)=>map[id]?.label[lang]||id;
function pathLabel(id){const n=nodes[id];return (n.parent?pathLabel(n.parent)+' / ':'')+n.label[lang]}
const brief=x=>lang==='zh'&&x.brief_zh?x.brief_zh:x.brief_en;
function sync(){const p=new URLSearchParams({lang,kind});if(selected.length)p.set('categories',selected.join(','));for(const [id,key] of [['search','q'],['target','model'],['tag','tag'],['source-filter','source'],['dataset-filter','dataset']])if($('#'+id).value)p.set(key,$('#'+id).value);history.replaceState(null,'','?'+p)}
function tabs(){$('#tabs').innerHTML=validKinds.map(k=>`<button class="tab ${kind===k?'active':''}" data-kind="${k}">${t()[k]}${k==='daily'?'':`<span>${k==='all'?data.length:data.filter(x=>x.kind===k).length}</span>`}</button>`).join('');$('#tabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{kind=b.dataset.kind;closeTree();render();sync()})}
function optionList(id,items){const prior=$('#'+id).value;$('#'+id).innerHTML=`<option value="">${id==='target'?t().target:t().tag}</option>`+items.map(n=>`<option value="${esc(n.id)}">${esc(n.label[lang])}</option>`).join('');$('#'+id).value=prior}
function drawTree(){
 const count=id=>data.filter(x=>(kind==='all'||x.kind===kind)&&core.categoryMatch(x.categories,[id])).length;
 const hasChildren=id=>tax.categories.some(n=>n.parent===id);
 const parents=[null,...activePath.filter(hasChildren)];
 $('#category-panel').style.setProperty('--menu-columns',parents.length);
 $('#tree').innerHTML=parents.map((parent,level)=>`<div class="cascade-column" role="group" aria-label="${esc(parent?name(nodes,parent):t().category)}">${parent?`<div class="cascade-heading">${esc(name(nodes,parent))}</div>`:''}${tax.categories.filter(n=>n.parent===parent).map(n=>`<div class="cascade-row ${activePath[level]===n.id?'active':''}"><input type="checkbox" data-category="${n.id}" aria-label="${esc(n.label[lang])}" ${core.isSelected(selected,n.id)?'checked':''}><button class="cascade-choice" data-browse="${n.id}" data-level="${level}" ${hasChildren(n.id)?`aria-expanded="${activePath[level]===n.id}"`:''}><span>${esc(n.label[lang])}</span><small>${count(n.id)}</small>${hasChildren(n.id)?'<span aria-hidden="true">›</span>':''}</button></div>`).join('')}</div>`).join('');
 function reveal(id){const path=[];let n=nodes[id];while(n){if(hasChildren(n.id))path.unshift(n.id);n=nodes[n.parent]}activePath=path}
 $('#tree').querySelectorAll('[data-category]').forEach(box=>{box.indeterminate=!core.isSelected(selected,box.dataset.category)&&selected.some(s=>s.startsWith(box.dataset.category+'/'));box.onchange=()=>{const id=box.dataset.category;selected=core.setCategory(selected,id,box.checked,tax.categories);reveal(id);render();sync();$('#tree').querySelector(`[data-category="${id}"]`)?.focus()}});
 $('#tree').querySelectorAll('[data-browse]').forEach(b=>b.onclick=()=>{const id=b.dataset.browse;if(hasChildren(id)){reveal(id);drawTree();positionMenus();$('#tree').querySelector(`[data-browse="${id}"]`)?.focus()}else{selected=core.setCategory(selected,id,!core.isSelected(selected,id),tax.categories);render();sync();$('#tree').querySelector(`[data-browse="${id}"]`)?.focus()}});
 $('#category-caption').textContent=selected.length?`${selected.length} ${t().selected}`:t().allCategories;
 $('#selected').innerHTML=selected.map(id=>`<span class="selection-chip">${esc(pathLabel(id))}<button data-remove="${id}" aria-label="${esc(t().remove+' '+pathLabel(id))}">×</button></span>`).join('');
 $('#selected').querySelectorAll('button').forEach(b=>b.onclick=()=>{selected=selected.filter(x=>x!==b.dataset.remove);render();sync()});
}
const singleIds=['target','tag','source-filter'];
function closeSingles(){singleIds.forEach(id=>{$('#'+id+'-panel').hidden=true;$('#'+id+'-trigger').setAttribute('aria-expanded','false')})}
function refreshSingles(){
 singleIds.forEach(id=>{
  const select=$('#'+id),button=$('#'+id+'-trigger'),panel=$('#'+id+'-panel');
  button.textContent=select.options[select.selectedIndex]?.textContent||'';button.classList.toggle('is-active',!!select.value);
  panel.innerHTML=[...select.options].map(o=>`<button role="option" aria-selected="${select.value===o.value}" data-value="${esc(o.value)}"><span>${esc(o.textContent)}</span><span aria-hidden="true">${select.value===o.value?'✓':''}</span></button>`).join('');
  panel.querySelectorAll('[data-value]').forEach(option=>option.onclick=()=>{select.value=option.dataset.value;closeSingles();render();sync();button.focus()});
 });
}
function positionMenus(){
 for(const [triggerId,panelId] of [['category-trigger','category-panel'],['columns-trigger','columns-panel'],...singleIds.map(id=>[id+'-trigger',id+'-panel'])]){
  const panel=$('#'+panelId);if(panel.hidden)continue;
  const rect=$('#'+triggerId).getBoundingClientRect();const width=panel.getBoundingClientRect().width;
  panel.style.left=Math.max(10,Math.min(rect.left,window.innerWidth-width-10))+'px';
  panel.style.top=(rect.bottom+7)+'px';panel.style.maxHeight=Math.max(140,window.innerHeight-rect.bottom-20)+'px';panel.style.overflowY='auto';
 }
}
function activeFilters(){
 refreshSingles();
 for(const id of ['search','target','tag','source-filter','dataset-filter'])$('#'+id).classList.toggle('is-active',!!$('#'+id).value);
 $('#category-trigger').classList.toggle('is-active',selected.length>0);positionMenus();
}
function closeTree(){$('#category-panel').hidden=true;$('#category-trigger').setAttribute('aria-expanded','false')}
const defaultColumns=['name','author','origin','category','tag','target','summary','datasets','links'];
const allColumns=[...defaultColumns,'design','dataorigin','release','license','weights'];
let columnOrder=[...allColumns],visibleColumns=new Set(defaultColumns);
const defaultWidths={name:310,author:185,origin:130,category:240,tag:170,target:180,summary:380,datasets:230,links:150,design:340,dataorigin:280,release:170,license:180,weights:130};
let columnWidths={...defaultWidths};
function applyColumns(){
 const visible=columnOrder.filter(k=>visibleColumns.has(k));
 $('#head').innerHTML=visible.map(k=>`<th data-col="${k}">${t()[k]}<span class="resizer" aria-hidden="true"></span></th>`).join('');
 $('colgroup').innerHTML=visible.map(k=>`<col data-col="${k}" style="width:${columnWidths[k]}px">`).join('');
 $('#rows').querySelectorAll('tr').forEach(row=>{const cells=Object.fromEntries([...row.children].map(c=>[c.dataset.col,c]));columnOrder.forEach(k=>{if(cells[k]){cells[k].hidden=!visibleColumns.has(k);row.appendChild(cells[k])}})});
 $('table').style.width='100%';$('table').style.minWidth=visible.reduce((n,k)=>n+columnWidths[k],0)+'px';
 $('#head').querySelectorAll('.resizer').forEach(handle=>handle.onpointerdown=e=>{e.preventDefault();const key=handle.parentElement.dataset.col,start=e.clientX,width=handle.parentElement.getBoundingClientRect().width;handle.setPointerCapture(e.pointerId);handle.onpointermove=ev=>{columnWidths[key]=Math.max(100,Math.round(width+ev.clientX-start));$('col[data-col="'+key+'"]').style.width=columnWidths[key]+'px';$('table').style.minWidth=visible.reduce((n,k)=>n+columnWidths[k],0)+'px'};handle.onpointerup=()=>{handle.onpointermove=null}});
}
function drawColumns(){
 $('#columns-trigger').textContent=t().columns;$('#columns-reset').textContent=t().restore;
 $('#column-options').innerHTML=columnOrder.map((k,i)=>`<div class="column-option"><label><input data-visible="${k}" type="checkbox" ${visibleColumns.has(k)?'checked':''} ${k==='name'?'disabled':''}>${t()[k]}</label><button data-move="${k}" data-step="-1" aria-label="${t().up}: ${t()[k]}" ${i<=1?'disabled':''}>↑</button><button data-move="${k}" data-step="1" aria-label="${t().down}: ${t()[k]}" ${i===0||i===columnOrder.length-1?'disabled':''}>↓</button></div>`).join('');
 $('#column-options').querySelectorAll('[data-visible]').forEach(box=>box.onchange=()=>{box.checked?visibleColumns.add(box.dataset.visible):visibleColumns.delete(box.dataset.visible);applyColumns()});
 $('#column-options').querySelectorAll('[data-move]').forEach(button=>button.onclick=()=>{const i=columnOrder.indexOf(button.dataset.move),j=i+Number(button.dataset.step);if(i>0&&j>0&&j<columnOrder.length){[columnOrder[i],columnOrder[j]]=[columnOrder[j],columnOrder[i]];applyColumns();drawColumns()}});
}
function header(){document.documentElement.lang=lang==='zh'?'zh-CN':'en';$('#subtitle').textContent=t().subtitle;$('#language').setAttribute('aria-label',lang==='zh'?'切换语言':'Switch language');$('#tree').setAttribute('aria-label',t().category);$('#search').placeholder=t().search;$('#search').setAttribute('aria-label',t().search);$('#export').textContent=t().export;$('#clear').textContent=t().reset;$('#empty').textContent=t().empty;$('#hint').textContent=t().hint;$('#updated-label').textContent=lang==='zh'?'上次更新':'Last updated';$('#footer-author-label').textContent=lang==='zh'?'维护者 ':'Maintained by ';$('#readme').href='https://github.com/dongtsi/awesome-trustworthy-jev/blob/main/'+(lang==='zh'?'README.zh-CN.md':'README.md');$('#daily-link').textContent=t().daily;$('#daily-link').href=lang==='zh'?'daily/index.zh.html':'daily/index.html';$('#language').textContent=lang==='en'?'EN / 中':'中 / EN';for(const k of ['category','target','tag'])$('#'+k+'-label').textContent=t()[k];$('#category-help').textContent=t().categoryHelp;$('#category-clear').textContent=t().clearCategory;optionList('target',tax.models);optionList('tag',tax.contributions);
 $('#source-filter-label').textContent=t().origin;$('#dataset-filter-label').textContent=t().datasets;$('#dataset-filter').placeholder=lang==='zh'?'数据集／基准':'Dataset / benchmark';
 const sourceValue=$('#source-filter').value;$('#source-filter').innerHTML=`<option value="">${t().origin}</option>`+[...new Set(data.map(x=>core.sourceLabel(x,'en')))].sort().map(v=>`<option value="${esc(v)}">${esc(v==='Official'&&lang==='zh'?'官方':v)}</option>`).join('');$('#source-filter').value=sourceValue;
 $('#dataset-options').innerHTML=[...new Set(data.flatMap(x=>x.datasets||[]))].sort().map(d=>`<option value="${esc(d)}"></option>`).join('');drawColumns();render();window.renderActivity?.(lang)}
function datasetTag(d,x){
 const ref=tax.datasets?.[d];const url=ref?.url||x.url;
 const label=ref?(ref.type==='paper'?(lang==='zh'?'论文说明':'Paper description'):ref.type==='artifact'?(lang==='zh'?'实验资料':'Research artifacts'):(lang==='zh'?'数据集主页':'Dataset page')):(lang==='zh'?'该文中的数据集说明':'Dataset description in this paper');
 return `<span class="dataset-tag"><a href="${esc(url)}" target="_blank" rel="noopener" title="${esc(label)}">${esc(d)}${ref&&ref.type!=='paper'?' ↗':`<small>${lang==='zh'?'论文说明':'paper'}</small>`}</a><button data-dataset="${esc(d)}" title="${lang==='zh'?'筛选使用此数据集的工作':'Filter works using this dataset'}" aria-label="${esc((lang==='zh'?'筛选：':'Filter: ')+d)}">⌕</button></span>`;
}
function property(x,key){
 const c=tax.comparisons?.[x.id],m=x.model_info;
 if(key==='design')return c?.design?.[lang]||'';
 if(key==='dataorigin')return c?.data_role?.[lang]||'';
 if(key==='license')return m?.license||'';
 if(key==='weights')return m?.weights||'';
 if(key==='release')return ({weights:lang==='zh'?'模型权重':'Weights',adapter:lang==='zh'?'适配器／决策头':'Adapter / head',head:lang==='zh'?'投影头':'Projection heads'})[m?.release]||'';
 return '';
}
function render(){tabs();$('#library').hidden=kind==='daily';$('#daily').hidden=kind!=='daily';if(kind==='daily'){const days={};data.filter(x=>x.kind==='Paper'&&x.date).forEach(x=>(days[x.date]??=[]).push(x));$('#daily').innerHTML=`<p class="help">${t().dailyNote}</p>`+Object.keys(days).sort().reverse().map(day=>`<section class="day"><h2>${day}</h2>${days[day].map(x=>`<article><a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a><p>${esc(brief(x))}</p></article>`).join('')}</section>`).join('');return}
 const labels=Object.fromEntries(tax.categories.map(n=>[n.id,Object.values(n.label).join(' ')]));
 filtered=core.filter(data,{kind,selected,model:$('#target').value,tag:$('#tag').value,source:$('#source-filter').value,dataset:$('#dataset-filter').value,query:$('#search').value},labels);filtered.sort((a,b)=>String(b.date).localeCompare(String(a.date))||a.short.localeCompare(b.short));
 $('#rows').innerHTML=filtered.map(x=>`<tr><td><a class="resource" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.short)}</a><div class="resource-meta"><span class="kind-label">${esc(lang==='zh'?({Paper:'论文',Project:'项目',Article:'文章',Official:'文档'})[x.kind]:({Paper:'Paper',Project:'Project',Article:'Article',Official:'Docs'})[x.kind])}</span><span class="source-label">${esc(core.sourceLabel(x,lang))}</span>${x.venue?`<span class="venue-label">${esc(x.venue)}</span>`:''}</div><div class="title">${esc(x.title)}</div></td><td>${x.categories.map(id=>`<div class="category-path">${nodes[id].parent?`<span class="path-root">${esc(pathLabel(nodes[id].parent))}</span>`:''}<span class="path-leaf">${esc(name(nodes,id))}</span></div>`).join('')}</td><td>${x.contributions.map(id=>`<span class="pill contribution">${esc(name(tags,id))}</span>`).join('')}</td><td>${esc(name(models,x.target))}</td><td class="summary">${esc(brief(x))}</td><td>${x.datasets?.length?x.datasets.map(d=>datasetTag(d,x)).join(''):`<span class="column-note">${t().unindexed}</span>`}</td><td><div class="links"><a href="${esc(x.url)}" target="_blank" rel="noopener">${t().source}</a>${x.pdf?`<a href="${esc(x.pdf)}" target="_blank" rel="noopener">PDF</a>`:''}${x.code&&x.code!==x.url?`<a href="${esc(x.code)}" target="_blank" rel="noopener">${t().code}</a>`:''}</div></td></tr>`).join('');
 $('#rows').querySelectorAll('tr').forEach((row,index)=>{[...row.children].forEach((cell,i)=>cell.dataset.col=['name','category','tag','target','summary','datasets','links'][i]);const source=document.createElement('td');source.dataset.col='origin';source.textContent=core.sourceLabel(filtered[index],lang);row.appendChild(source);const author=document.createElement('td');author.dataset.col='author';author.textContent=(filtered[index].authors||[]).join(', ')||(lang==='zh'?'暂未核实':'Not verified');row.appendChild(author);for(const key of ['design','dataorigin','release','license','weights']){const cell=document.createElement('td');cell.dataset.col=key;const x=filtered[index],c=tax.comparisons?.[x.id];const value=property(x,key);if(value){const url=key==='weights'?x.model_info.weights:(key==='design'||key==='dataorigin')?c?.source:key==='license'?x.url:null;if(url){const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.textContent=key==='weights'?(lang==='zh'?'权重文件 ↗':'Files ↗'):value;cell.appendChild(a)}else cell.textContent=value}else{cell.textContent='—';cell.className='column-note'}row.appendChild(cell)}});applyColumns();$('#rows').querySelectorAll('[data-dataset]').forEach(b=>b.onclick=()=>{$('#dataset-filter').value=b.dataset.dataset;render();sync()});
 $('#count').textContent=`${filtered.length} ${t().resources}`;$('#empty').hidden=!!filtered.length;drawTree();activeFilters();
}
singleIds.forEach(id=>{
 const button=$('#'+id+'-trigger');button.onclick=()=>{const open=$('#'+id+'-panel').hidden;closeSingles();closeTree();$('#columns-panel').hidden=true;if(open){$('#'+id+'-panel').hidden=false;button.setAttribute('aria-expanded','true');positionMenus();$('#'+id+'-panel [aria-selected="true"]')?.focus()}};
 $('#'+id+'-panel').addEventListener('keydown',e=>{const options=[...$('#'+id+'-panel').querySelectorAll('button')];const index=options.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();options[(index+(e.key==='ArrowDown'?1:-1)+options.length)%options.length]?.focus()}if(e.key==='Escape'){closeSingles();button.focus()}});
});
document.addEventListener('click',e=>{if(!e.composedPath().some(n=>n.classList?.contains('single-control')))closeSingles()},true);
$('#columns-trigger').onclick=()=>{const open=$('#columns-panel').hidden;$('#columns-panel').hidden=!open;$('#columns-trigger').setAttribute('aria-expanded',String(open));closeTree();positionMenus()};
$('#columns-reset').onclick=()=>{columnOrder=[...allColumns];visibleColumns=new Set(defaultColumns);columnWidths={...defaultWidths};applyColumns();drawColumns()};
document.addEventListener('click',e=>{if(!e.composedPath().includes($('.column-control'))){$('#columns-panel').hidden=true;$('#columns-trigger').setAttribute('aria-expanded','false')}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#columns-panel').hidden){$('#columns-panel').hidden=true;$('#columns-trigger').setAttribute('aria-expanded','false');$('#columns-trigger').focus()}});
$('#category-trigger').onclick=()=>{const open=$('#category-panel').hidden;$('#category-panel').hidden=!open;$('#category-trigger').setAttribute('aria-expanded',String(open));if(open){positionMenus();$('#tree').querySelector('input')?.focus()}};
// Check outside clicks before menu handlers replace their DOM nodes.
document.addEventListener('click',e=>{if(!core.isInsideCategory(e,$('.catcontrol')))closeTree()},true);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#category-panel').hidden){closeTree();$('#category-trigger').focus()}});
$('#category-clear').onclick=()=>{selected=[];render();sync()};
for(const id of ['search','target','tag','source-filter','dataset-filter'])$('#'+id).addEventListener(['search','dataset-filter'].includes(id)?'input':'change',()=>{render();sync()});
$('#language').onclick=()=>{lang=lang==='en'?'zh':'en';header();sync()};$('#clear').onclick=()=>{for(const id of ['search','target','tag','source-filter','dataset-filter'])$('#'+id).value='';selected=[];render();sync()};
$('#export').onclick=()=>{const fields=[t().name,t().author,t().origin,t().category,t().tag,t().target,t().summary,t().datasets,t().design,t().dataorigin,t().release,t().license,t().weights,t().links],cell=x=>'"'+String(x||'').replace(/^[=+@-]/,"'$&").replace(/"/g,'""')+'"';const csv='\uFEFF'+[fields,...filtered.map(x=>[x.title,(x.authors||[]).join('; '),core.sourceLabel(x,lang),x.categories.map(pathLabel).join('; '),x.contributions.map(id=>name(tags,id)).join('; '),name(models,x.target),brief(x),(x.datasets||[]).join('; '),...['design','dataorigin','release','license','weights'].map(k=>property(x,k)),x.url])].map(r=>r.map(cell).join(',')).join('\r\n');const a=document.createElement('a'),url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.href=url;a.download='jev-library-'+lang+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
$('.toolbar').addEventListener('scroll',positionMenus);window.addEventListener('resize',positionMenus);window.addEventListener('scroll',positionMenus);
header();$('#search').value=params.get('q')||'';$('#target').value=params.get('model')||'';$('#tag').value=params.get('tag')||'';$('#source-filter').value=params.get('source')||'';$('#dataset-filter').value=params.get('dataset')||'';render();
})();
