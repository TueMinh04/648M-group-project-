/* Shared header, footer and prototype banner. Root path is derived from this script's URL. */
(function(){
var R=document.currentScript.src.replace(/assets\/js\/main\.js.*$/,''),VC=window.VC=window.VC||{};
VC.root=R;VC.go=function(p){location.href=R+p};
VC.esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var nav=[['index','index.html','Home'],['how-it-works','pages/how-it-works.html','How It Works'],['ethics','pages/ethics.html','Ethics'],['research','pages/research.html','Research'],['prototype','pages/prototype.html','Prototype']];
var b=document.body,cur=b.dataset.page;
var h=document.getElementById('site-header');h.className='site-header';
h.innerHTML='<div class="container bar"><a class="brand" href="'+R+'index.html" aria-label="VIRTUCARE home">VIRTU<span>CARE</span></a><button class="btn btn-ghost btn-sm nav-toggle" aria-expanded="false" aria-controls="nav">Menu</button><nav id="nav" aria-label="Main">'+
nav.map(function(n){return'<a href="'+R+n[1]+'"'+(n[0]===cur?' aria-current="page"':'')+'>'+n[2]+'</a>'}).join('')+'</nav></div>';
if(b.dataset.mode==='app')h.insertAdjacentHTML('afterend','<div class="sim-banner" role="note">CONCEPT PROTOTYPE — AI FEEDBACK IS SIMULATED AND NOT CLINICALLY VALIDATED</div>');
var f=document.getElementById('site-footer');f.className='site-footer';
f.innerHTML='<div class="container"><div class="grid"><section id="team"><h2>Team</h2><p>MHIA, University of Waterloo.</p><ul><li>Team member 1 <span class="placeholder">Name to be added</span></li><li>Team member 2 <span class="placeholder">Name to be added</span></li><li>Team member 3 <span class="placeholder">Name to be added</span></li></ul></section>'+
'<section id="ai-note"><h2>How we used generative AI</h2><p>Claude generated the initial website code and placeholder text. The group reviews all content and makes all decisions. <a href="'+R+'pages/research.html#ai-use">Details</a></p></section></div>'+
'<p>VIRTUCARE is a conceptual student prototype. It is not a medical device, is not clinically validated, and must not be used for real training or patient care.</p></div>';
var t=h.querySelector('.nav-toggle');t.onclick=function(){var o=document.getElementById('nav').classList.toggle('open');t.setAttribute('aria-expanded',o)};
})();
