const views = ['home','about','skills','works','experience','contact'];
const labels = ['首页','简介','技能','项目','经历','联系'];
const menuButtons = [...document.querySelectorAll('.screen-nav button')];
const panels = [...document.querySelectorAll('.screen-view')];
const screenContent = document.getElementById('screen-content');
function showView(view){
  if(!views.includes(view)) view='home';
  panels.forEach(panel=>{panel.hidden=panel.dataset.panel!==view});
  menuButtons.forEach(button=>button.dataset.view===view?button.setAttribute('aria-current','page'):button.removeAttribute('aria-current'));
  document.getElementById('toolbar-label').textContent='余浣 Hannah · '+labels[views.indexOf(view)];
  document.getElementById('view-counter').textContent=labels[views.indexOf(view)];
  screenContent.scrollTop=0;
}
function navigate(view){
  const hash=view==='home'?'':'#'+view;
  if(location.hash!==hash) history.pushState(null,'',location.pathname+location.search+hash);
  showView(view);
}
document.querySelectorAll('[data-view],[data-go]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.view||button.dataset.go)));
window.addEventListener('popstate',()=>showView(location.hash.slice(1)));
showView(location.hash.slice(1));
function updateClock(){
  const now=new Date();
  const clock=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
  document.getElementById('desktop-clock').textContent=clock+' 惠州';
  document.getElementById('screen-time').textContent=clock.slice(0,5);
}
updateClock();
setInterval(updateClock,1000);

const categories={
  1:{title:'VI / 品牌视觉',files:[
    {src:'csadi-water-bottle-1.png',title:'中南院矿泉水包装',page:1,pages:3},
    {src:'csadi-water-bottle-2.jpg',title:'中南院矿泉水包装',page:2,pages:3},
    {src:'csadi-water-bottle-3.jpg',title:'中南院矿泉水包装',page:3,pages:3},
    {src:'octopus-package-1.jpg',title:'章鱼食品包装',page:1,pages:4},
    {src:'octopus-package-2.jpg',title:'章鱼食品包装',page:2,pages:4},
    {src:'octopus-package-3.jpg',title:'章鱼食品包装',page:3,pages:4},
    {src:'octopus-package-4.jpg',title:'章鱼食品包装',page:4,pages:4}
  ],projectCount:2},
  2:{title:'出版物设计',files:[
    {src:'csadi-65th-stamp-book.png',title:'2017年中南院65周年纪念邮册'},
    {src:'armenia-chinese-school-brochure.png',title:'亚美尼亚中文学校启动仪式宣传折页'},
    {src:'csadi-brochure-1.jpg',title:'中南院宣传册',page:1,pages:3},
    {src:'csadi-brochure-2.jpg',title:'中南院宣传册',page:2,pages:3},
    {src:'csadi-brochure-3.jpg',title:'中南院宣传册',page:3,pages:3},
    {src:'magazine-spread.jpg',title:'杂志内页'},
    {src:'conference-handbook-2019.jpg',title:'2019 会议手册'}
  ],projectCount:5},
  3:{title:'KV / 活动视觉',files:[
    {src:'architecture-exhibition-poster.png',title:'第三届全国优秀建筑设计项目作品展'},
    {src:'csadi-choir-poster.jpg',title:'2019 中南院合唱比赛'},
    {src:'design-exchange-poster.jpg',title:'设计交流分享系列活动'},
    {src:'csadi-architecture-exhibition-board.jpg',title:'CSADI 建筑艺术之旅展板'},
    {src:'csadi-new-year-2021-kv.png',title:'CSADI 2021 新年活动 KV'},
    {src:'csadi-exhibition-2022-1.png',title:'中南院 2022 新年展陈',page:1,pages:2},
    {src:'csadi-exhibition-2022-2.png',title:'中南院 2022 新年展陈',page:2,pages:2},
    {src:'csadi-national-day-2026.jpg',title:'中南院 2026 国庆海报'}
  ],projectCount:7},
  4:{title:'传媒推广',files:[
    {src:'toefl-campaign.png',title:'小托福推广海报'},
    {src:'pbl-campaign.png',title:'线下 PBL 活动推广'},
    {src:'csadi-wechat-longform.jpg',title:'公众号长图 · 来自1955年的马克杯',scroll:true},
    {src:'typography-titles-1.png',title:'标题字设计',page:1,pages:2},
    {src:'typography-titles-2.png',title:'标题字设计',page:2,pages:2},
    {src:'civilization-mindmap-01.jpg',title:'得到《一起看文明》思维导图',page:1,pages:19},
    {src:'civilization-mindmap-02.jpg',title:'得到《一起看文明》思维导图',page:2,pages:19},
    {src:'civilization-mindmap-03.jpg',title:'得到《一起看文明》思维导图',page:3,pages:19},
    {src:'civilization-mindmap-04.jpg',title:'得到《一起看文明》思维导图',page:4,pages:19},
    {src:'civilization-mindmap-05.jpg',title:'得到《一起看文明》思维导图',page:5,pages:19},
    {src:'civilization-mindmap-06.jpg',title:'得到《一起看文明》思维导图',page:6,pages:19},
    {src:'civilization-mindmap-07.jpg',title:'得到《一起看文明》思维导图',page:7,pages:19},
    {src:'civilization-mindmap-08.jpg',title:'得到《一起看文明》思维导图',page:8,pages:19},
    {src:'civilization-mindmap-09.jpg',title:'得到《一起看文明》思维导图',page:9,pages:19},
    {src:'civilization-mindmap-10.jpg',title:'得到《一起看文明》思维导图',page:10,pages:19},
    {src:'civilization-mindmap-11.jpg',title:'得到《一起看文明》思维导图',page:11,pages:19},
    {src:'civilization-mindmap-12.jpg',title:'得到《一起看文明》思维导图',page:12,pages:19},
    {src:'civilization-mindmap-13.jpg',title:'得到《一起看文明》思维导图',page:13,pages:19},
    {src:'civilization-mindmap-14.jpg',title:'得到《一起看文明》思维导图',page:14,pages:19},
    {src:'civilization-mindmap-15.jpg',title:'得到《一起看文明》思维导图',page:15,pages:19},
    {src:'civilization-mindmap-16.jpg',title:'得到《一起看文明》思维导图',page:16,pages:19},
    {src:'civilization-mindmap-17.jpg',title:'得到《一起看文明》思维导图',page:17,pages:19},
    {src:'civilization-mindmap-18.jpg',title:'得到《一起看文明》思维导图',page:18,pages:19},
    {src:'civilization-mindmap-19.jpg',title:'得到《一起看文明》思维导图',page:19,pages:19}
  ],projectCount:5},
  5:{title:'AIGC',files:[
    {src:'aigc-passing-through-life.mp4',poster:'aigc-passing-through-life-poster.jpg',title:'路过人间',video:true},
    {src:'aigc-star-river-ferryman.mp4',poster:'aigc-star-river-ferryman-poster.jpg',title:'星河摆渡人',video:true}
  ],projectCount:2}
};
const dialog=document.querySelector('.work-dialog');
const modalImage=document.getElementById('modal-image');
const modalVideo=document.getElementById('modal-video');
const thumbs=document.getElementById('modal-thumbs');
let activeCategory=1,activeWork=0,openingFolder=null;
function fitDialog(){
  if(!dialog.open) return;
  const maxW=Math.min(window.innerWidth-24,1120);
  const maxH=Math.min(window.innerHeight-24,880);
  if(dialog.dataset.video==='true'){
    const aspect=(modalVideo.videoWidth&&modalVideo.videoHeight)?modalVideo.videoWidth/modalVideo.videoHeight:(activeWork===0?9/16:1452/1088);
    const imageMaxH=Math.max(100,maxH-184);
    const width=Math.min(maxW,Math.ceil(imageMaxH*aspect+20));
    const height=Math.min(maxH,Math.ceil(Math.min(imageMaxH,(width-20)/aspect)+184));
    dialog.style.setProperty('--dialog-width',width+'px');
    dialog.style.setProperty('--dialog-height',height+'px');
    return;
  }
  if(!modalImage.naturalWidth) return;
  if(dialog.dataset.scrollImage==='true'){
    dialog.style.setProperty('--dialog-width',Math.min(maxW,categories[activeCategory].files[activeWork].scrollWidth||480)+'px');
    dialog.style.setProperty('--dialog-height',maxH+'px');
    return;
  }
  const imageMaxW=Math.max(120,maxW-20);
  const imageMaxH=Math.max(100,maxH-184);
  const ratio=Math.min(1,imageMaxW/modalImage.naturalWidth,imageMaxH/modalImage.naturalHeight);
  const width=Math.ceil(modalImage.naturalWidth*ratio+20);
  const height=Math.ceil(modalImage.naturalHeight*ratio+184);
  dialog.style.setProperty('--dialog-width',Math.min(maxW,width)+'px');
  dialog.style.setProperty('--dialog-height',Math.min(maxH,height)+'px');
}
modalImage.addEventListener('load',fitDialog);
modalVideo.addEventListener('loadedmetadata',fitDialog);
window.addEventListener('resize',fitDialog);
function renderWork(){
  const group=categories[activeCategory];
  const file=group.files[activeWork];
  const item=typeof file==='string'?'作品 '+String(activeWork+1).padStart(2,'0'):file.title;
  dialog.dataset.scrollImage=String(!!file.scroll);
  dialog.dataset.video=String(!!file.video);
  modalVideo.pause();
  modalVideo.hidden=!file.video;
  modalImage.hidden=!!file.video;
  if(file.video){
    modalVideo.poster='assets/'+file.poster;
    modalVideo.src='assets/'+file.src;
    modalVideo.setAttribute('aria-label',item);
  }else{
    modalVideo.removeAttribute('src');
    modalVideo.load();
    modalImage.alt=group.title+' · '+item;
    modalImage.src='assets/'+(typeof file==='string'?file:file.src);
  }
  modalImage.parentElement.scrollTop=0;
  document.getElementById('modal-work-title').textContent=item+(file.page?' · '+file.page+' / '+file.pages:'');
  document.getElementById('modal-count').textContent=(activeWork+1)+' / '+group.files.length;
  document.getElementById('modal-index').textContent=(group.projectCount??group.files.length)+(group.files[0] && typeof group.files[0]==='object'?' 个项目':' 个文件');
  [...thumbs.children].forEach((button,index)=>button.setAttribute('aria-current',String(index===activeWork)));
  if(modalImage.complete) fitDialog();
}
function moveWork(direction){
  const total=categories[activeCategory].files.length;
  activeWork=(activeWork+direction+total)%total;
  renderWork();
}
document.querySelectorAll('.folder').forEach(folder=>folder.addEventListener('click',()=>{
  openingFolder=folder;
  activeCategory=Number(folder.dataset.category);
  activeWork=0;
  const group=categories[activeCategory];
  document.getElementById('modal-title').textContent=group.title;
  thumbs.replaceChildren();
  group.files.forEach((file,index)=>{
    const button=document.createElement('button');
    button.type='button';
    button.setAttribute('aria-label',typeof file==='string'?'查看作品 '+(index+1):'查看'+file.title+(file.page?' 第'+file.page+'页':''));
    const image=document.createElement('img');
    image.src='assets/'+(file.poster|| (typeof file==='string'?file:file.src));image.alt='';
    button.append(image);
    button.addEventListener('click',()=>{activeWork=index;renderWork()});
    thumbs.append(button);
  });
  dialog.showModal();
  renderWork();
  dialog.querySelector('.window-close').focus();
}));
document.getElementById('modal-prev').addEventListener('click',()=>moveWork(-1));
document.getElementById('modal-next').addEventListener('click',()=>moveWork(1));
dialog.querySelector('.window-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>{modalVideo.pause();openingFolder?.focus()});
dialog.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'){event.preventDefault();moveWork(-1)}
  if(event.key==='ArrowRight'){event.preventDefault();moveWork(1)}
});

const scene=document.querySelector('.desk-scene');
function positionNote(note,left,top){
  note.style.setProperty('left',Math.max(0,Math.min(scene.clientWidth-note.offsetWidth,left))+'px','important');
  note.style.setProperty('top',Math.max(0,Math.min(scene.clientHeight-note.offsetHeight,top))+'px','important');
  note.style.setProperty('right','auto','important');
}
document.querySelectorAll('[data-note]').forEach(note=>{
  let drag=null;
  note.addEventListener('pointerdown',event=>{
    if(event.button!==0) return;
    const parent=scene.getBoundingClientRect();
    const bounds=note.getBoundingClientRect();
    drag={x:event.clientX,y:event.clientY,left:bounds.left-parent.left,top:bounds.top-parent.top};
    note.setPointerCapture(event.pointerId);
    note.classList.add('is-dragging');
  });
  note.addEventListener('pointermove',event=>{
    if(!drag) return;
    positionNote(note,drag.left+event.clientX-drag.x,drag.top+event.clientY-drag.y);
  });
  function endDrag(){drag=null;note.classList.remove('is-dragging')}
  note.addEventListener('pointerup',endDrag);
  note.addEventListener('pointercancel',endDrag);
  note.addEventListener('keydown',event=>{
    const moves={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};
    if(!moves[event.key]) return;
    event.preventDefault();
    const parent=scene.getBoundingClientRect();
    const bounds=note.getBoundingClientRect();
    const step=event.shiftKey?30:10;
    positionNote(note,bounds.left-parent.left+moves[event.key][0]*step,bounds.top-parent.top+moves[event.key][1]*step);
  });
});
window.addEventListener('resize',()=>{
  document.querySelectorAll('[data-note]').forEach(note=>{
    if(!note.style.getPropertyValue('left').endsWith('px')) return;
    const bounds=note.getBoundingClientRect();
    const parent=scene.getBoundingClientRect();
    positionNote(note,bounds.left-parent.left,bounds.top-parent.top);
  });
});
