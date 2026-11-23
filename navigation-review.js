/* 23 Nov 2026 review: dropdown menu accessible toggles.
   Main label remains a real page link, chevron expands the relevant pages. */
(function(){
  'use strict';
  const nav=document.getElementById('mobile-navigation');
  if(!nav)return;
  const items=Array.from(nav.querySelectorAll('.nav-has-dropdown'));
  function collapse(item){
    item.classList.remove('submenu-open');
    const btn=item.querySelector('.nav-dropdown-toggle');
    if(btn)btn.setAttribute('aria-expanded','false');
  }
  function collapseAll(except){
    items.forEach(item=>{if(item!==except)collapse(item)});
  }
  items.forEach(item=>{
    const btn=item.querySelector('.nav-dropdown-toggle');
    if(!btn)return;
    btn.addEventListener('click',ev=>{
      ev.preventDefault();
      ev.stopPropagation();
      const open=!item.classList.contains('submenu-open');
      collapseAll(item);
      item.classList.toggle('submenu-open',open);
      btn.setAttribute('aria-expanded',String(open));
    });
    item.querySelectorAll('.nav-dropdown-menu a').forEach(link=>{
      link.addEventListener('click',()=>collapseAll());
    });
  });
  document.addEventListener('click',ev=>{
    if(!nav.contains(ev.target))collapseAll();
  });
  document.addEventListener('keydown',ev=>{
    if(ev.key==='Escape'){
      collapseAll();
      const current=document.activeElement;
      if(current && nav.contains(current) && typeof current.blur==='function')current.blur();
    }
  });
  const menuToggle=document.querySelector('.menu-toggle');
  if(menuToggle)menuToggle.addEventListener('click',()=>{
    if(!nav.classList.contains('open'))collapseAll();
  });
})();
