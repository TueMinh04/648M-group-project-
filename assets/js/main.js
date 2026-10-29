/* Shared header, footer and prototype banner. Root path is derived from this script's URL. */
(function(){
var R=document.currentScript.src.replace(/assets\/js\/main\.js.*$/,''),VC=window.VC=window.VC||{};
VC.root=R;VC.go=function(p){location.href=R+p};
VC.esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};

var b=document.body;
var page = b.dataset.page || '';
var h=document.getElementById('site-header');
if(h) {
  h.outerHTML = `
  <nav class="navbar">
    <div class="container">
      <div class="logo"><a href="${R}index.html" style="color: inherit; text-decoration: none;">VIRTU<span>CARE</span></a></div>
      <div class="nav-links">
        <a href="${R}index.html" class="${page==='home'?'active':''}">Home</a>
        <a href="${R}pages/prototype.html" class="${page==='prototype'?'active':''}">Prototype</a>
        <a href="${R}pages/problem.html" class="${page==='problem'?'active':''}">Problem</a>
        <a href="${R}pages/benefits-limitations.html" class="${page==='benefits'||page==='benefits-limitations'?'active':''}">Benefits &amp; Limitations</a>
        <a href="${R}pages/guidelines.html" class="${page==='guidelines'?'active':''}">Guidelines</a>
        <a href="${R}pages/ethics.html" class="${page==='ethics'?'active':''}">Ethics</a>
        <a href="${R}pages/research.html" class="${page==='research'?'active':''}">Research</a>
        <a href="${R}pages/ai-use.html" class="${page==='ai-use'?'active':''}">AI Use</a>
        <a href="${R}pages/members.html" class="${page==='members'?'active':''}">Members</a>
        <a href="${R}pages/student-portal.html" class="${page==='student-portal'?'active':''}"><i class="fas fa-user-circle" style="margin-right: 0.35rem;"></i>Sign In / Sign Up</a>
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
  <footer style="background: var(--surface-color); padding: 3.5rem 0 2.5rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 4rem;">
    <div class="container">
      <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-main); letter-spacing: 1px;">VIRTU<span style="color: var(--primary);">CARE</span></div>
      <p style="color: var(--primary); font-weight: 500; font-size: 0.95rem; margin-top: 0.25rem; margin-bottom: 0.75rem;">The future of clinical training</p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin: 1.25rem 0; font-size: 0.9rem;">
        <a href="${R}index.html" style="color: var(--text-muted); text-decoration: none;">Home</a>
        <a href="${R}pages/prototype.html" style="color: var(--text-muted); text-decoration: none;">Prototype</a>
        <a href="${R}pages/problem.html" style="color: var(--text-muted); text-decoration: none;">Problem</a>
        <a href="${R}pages/benefits-limitations.html" style="color: var(--text-muted); text-decoration: none;">Benefits &amp; Limitations</a>
        <a href="${R}pages/guidelines.html" style="color: var(--text-muted); text-decoration: none;">Guidelines</a>
        <a href="${R}pages/ethics.html" style="color: var(--text-muted); text-decoration: none;">Ethics</a>
        <a href="${R}pages/research.html" style="color: var(--text-muted); text-decoration: none;">Research</a>
        <a href="${R}pages/ai-use.html" style="color: var(--text-muted); text-decoration: none;">AI Use</a>
        <a href="${R}pages/members.html" style="color: var(--text-muted); text-decoration: none;">Members</a>
        <a href="${R}pages/student-portal.html" style="color: var(--text-muted); text-decoration: none;">Sign In / Sign Up</a>
      </div>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0.5rem 0;">A conceptual academic prototype for the MHIA 648M Small-Group Project.</p>
      <p style="font-size: 0.82rem; color: #94a3b8; margin: 0;">Not a medical system. Not clinically validated.</p>
    </div>
  </footer>
  `;
}
})();
