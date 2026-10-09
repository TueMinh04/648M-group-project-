/* Shared header, footer and prototype banner. Root path is derived from this script's URL. */
(function(){
var R=document.currentScript.src.replace(/assets\/js\/main\.js.*$/,''),VC=window.VC=window.VC||{};
VC.root=R;VC.go=function(p){location.href=R+p};
VC.esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};

var b=document.body;
var h=document.getElementById('site-header');
if(h) {
  h.outerHTML = `
  <nav class="navbar">
    <div class="container">
      <div class="logo"><a href="${R}index.html" style="color: inherit; text-decoration: none;">CLIN<span>OVA</span></a></div>
      <div class="nav-links">
        <a href="${R}index.html#problem">Problem</a>
        <a href="${R}index.html#proposal">Proposal</a>
        <a href="${R}index.html#demo">Demo</a>
        <a href="${R}index.html#ethics">Ethics</a>
        <a href="${R}index.html#research">Research</a>
        <a href="${R}index.html#claude">AI Use</a>
      </div>
    </div>
  </nav>
  `;
}

if(b.dataset.mode==='app') {
  var nav = document.querySelector('.navbar');
  if(nav) {
    nav.insertAdjacentHTML('afterend','<div class="sim-banner" role="note" style="background: var(--surface-hover); color: var(--text-main); text-align: center; padding: 0.5rem; border-bottom: 2px solid var(--primary); font-size: 0.9rem; font-weight: 500;">CONCEPT PROTOTYPE — AI FEEDBACK IS SIMULATED AND NOT CLINICALLY VALIDATED</div>');
  }
}

var f=document.getElementById('site-footer');
if(f) {
  f.outerHTML = `
  <footer style="background: var(--surface-color); padding: 4rem 0; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 4rem;">
    <div class="container">
      <h3 style="color: var(--text-main); font-weight: 600;">CLINOVA</h3>
      <p style="color: var(--text-muted);">A conceptual academic prototype for the 648M Small-Group Project.</p>
      <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">Not a medical system. Not clinically validated.</p>
    </div>
  </footer>
  `;
}
})();
