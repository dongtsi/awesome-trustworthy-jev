/* Browser rendering only. Source collection and aggregation live in maintenance. */
(()=>{
 const rows=JSON.parse(document.getElementById('catalog').textContent);
 const tax=JSON.parse(document.getElementById('taxonomy').textContent),timeline=tax.timeline;
 const instances=new Map();
 function draw(id,option){if(!window.echarts)return;let chart=instances.get(id);if(!chart){chart=echarts.init(document.getElementById(id),null,{renderer:'svg'});instances.set(id,chart)}chart.setOption(option,true)}
 window.renderActivity=(language)=>{
  const zh=language==='zh',names=zh?['论文','项目（有日期）']:['Papers','Projects (dated)'];
  document.getElementById('chart-daily-title').textContent=zh?'每日发表':'Daily publications';
  document.getElementById('chart-total-title').textContent=zh?'累计数量':'Cumulative resources';
  document.getElementById('chart-category-title').textContent=zh?'研究分类':'Research categories';
  const common={animation:false,color:['#4f657e','#b1bfcd'],textStyle:{fontFamily:'system-ui,sans-serif',fontSize:10,color:'#7b8490'},tooltip:{trigger:'axis',confine:true},legend:{top:0,right:0,itemWidth:9,itemHeight:7,textStyle:{fontSize:10,color:'#77818d'}},grid:{left:32,right:10,top:33,bottom:24}};
  const dates=timeline.dates.slice(-21);
  const axes={xAxis:{type:'category',data:dates,axisTick:{show:false},axisLine:{lineStyle:{color:'#e4e8ed'}},axisLabel:{fontSize:10,formatter:v=>v.slice(5),hideOverlap:true}},yAxis:{type:'value',minInterval:1,axisLabel:{fontSize:10},splitNumber:3,splitLine:{lineStyle:{color:'#eef0f3'}}}};
  draw('chart-daily',{...common,...axes,series:['Paper','Project'].map((k,i)=>({name:names[i],type:'bar',stack:'total',barMaxWidth:14,data:timeline[k].slice(-21)}))});
  draw('chart-total',{...common,...axes,series:['Paper','Project'].map((k,i)=>{let total=0;return{name:names[i],type:'line',showSymbol:false,lineStyle:{width:2},areaStyle:{opacity:.07},data:timeline[k].map(v=>total+=v).slice(-21)}})});
  const roots=tax.categories.filter(x=>x.parent===null);
  const labels=roots.map(x=>x.id==='applications'?(zh?'安全应用':'Cybersecurity'):x.label[language]);
  draw('chart-category',{...common,grid:{left:5,right:22,top:33,bottom:4,containLabel:true},xAxis:{type:'value',minInterval:1,axisLabel:{fontSize:10},splitNumber:3,splitLine:{lineStyle:{color:'#eef0f3'}}},yAxis:{type:'category',inverse:true,data:labels,axisTick:{show:false},axisLine:{show:false},axisLabel:{fontSize:10}},series:['Paper','Project'].map((k,i)=>({name:zh?['论文','项目'][i]:['Papers','Projects'][i],type:'bar',stack:'total',barMaxWidth:15,data:roots.map(root=>rows.filter(x=>x.kind===k&&x.categories[0].split('/')[0]===root.id).length)}))});
 };
 window.addEventListener('resize',()=>instances.forEach(c=>c.resize()));
})();
