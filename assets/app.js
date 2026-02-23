(function(){
  const root=document.documentElement;
  const KEY='sukun_lang';
  const defaultLang='tr';

  function setLang(lang){
    const safe=(lang==='en'||lang==='tr')?lang:defaultLang;
    root.setAttribute('data-lang',safe);
    try{localStorage.setItem(KEY,safe);}catch(_){ }
    const trBtn=document.querySelector('[data-lang-btn="tr"]');
    const enBtn=document.querySelector('[data-lang-btn="en"]');
    if(trBtn){trBtn.setAttribute('aria-pressed',String(safe==='tr'));}
    if(enBtn){enBtn.setAttribute('aria-pressed',String(safe==='en'));}
  }

  function initLang(){
    let lang=defaultLang;
    try{
      lang=localStorage.getItem(KEY)||defaultLang;
    }catch(_){ }
    setLang(lang);
  }

  function initNav(){
    const path=(location.pathname||'').split('/').pop()||'index.html';
    document.querySelectorAll('.navlinks a').forEach(a=>{
      const href=(a.getAttribute('href')||'').split('/').pop();
      if(!href) return;
      if(href===path){a.setAttribute('aria-current','page');}
      else{a.removeAttribute('aria-current');}
    });
  }

  function initFooter(){
    const y=document.getElementById('year');
    if(y) y.textContent=String(new Date().getFullYear());
  }

  document.addEventListener('click',function(e){
    const t=e.target;
    if(!(t instanceof Element)) return;
    const btn=t.closest('[data-lang-btn]');
    if(!btn) return;
    e.preventDefault();
    const lang=btn.getAttribute('data-lang-btn');
    if(lang) setLang(lang);
  });

  initLang();
  initNav();
  initFooter();
})();
