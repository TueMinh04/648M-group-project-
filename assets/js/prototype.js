/* One guided prototype: Consent → Processing → Practice → AI Feedback → Review. All simulated. */
(function(){
var root=document.getElementById('proto'),e=VC.esc,cfg,ST=['Consent','Processing','Practice','AI Feedback','Review'];
var HELP=['Tick the simulated recording consent box, then continue.','Run the simulated processing, then continue.','Choose an option at each placeholder step. Retry if needed.','Review the AI feedback based on how you completed the Practice test.','Act as the instructor: accept, modify or override the AI suggestions.'];
var STAGES=['Consent check','De-identification','Procedure analysis','Simulation generation','Clinical validation'];
var NOTES=['Checks that recording consent is recorded.','Illustrates identifier removal (no real data).','Illustrates feature extraction.','Illustrates building the scenario.','Illustrates queueing for clinician validation. Nothing is validated here.'];
function draw(){
 var n=VC.get().stage;cfg={ok:false,label:'Continue',onNext:null,showNext:true};
 root.innerHTML='<ol class="stepper" aria-label="Progress">'+ST.map(function(t,i){return'<li class="'+(i<n?'done':i===n?'current':'')+'"'+(i===n?' aria-current="step"':'')+'>'+(i+1)+'. '+t+(i<n?' (done)':'')+'</li>'}).join('')+'</ol><h2 id="ptop" tabindex="-1">'+ST[n]+'</h2><p class="alert"><strong>What to do:</strong> '+HELP[n]+'</p><div id="view"></div><div class="row stepbar" id="bar"></div>';
 V[n](document.getElementById('view'));bar();
}
function bar(){
 var n=VC.get().stage,b=document.getElementById('bar'),h='';
 if(n>0)h+='<button class="btn btn-ghost" id="back">Back</button>';
 h+='<button class="btn btn-ghost" id="restart">Restart</button>';
 if(n<4&&cfg.showNext)h+='<button class="btn" id="next"'+(cfg.ok?'':' disabled')+'>'+cfg.label+'</button>';
 b.innerHTML=h;
 if(n>0)b.querySelector('#back').onclick=function(){VC.set({stage:n-1});draw();focusTop()};
 b.querySelector('#restart').onclick=function(){if(confirm('Restart the prototype? Your progress will be cleared.')){VC.reset();draw();focusTop()}};
 if(n<4&&cfg.showNext)b.querySelector('#next').onclick=function(){if(cfg.onNext)cfg.onNext();VC.set({stage:n+1});draw();focusTop()};
}
function focusTop(){document.getElementById('ptop').focus()}
var V=[
function consent(el){
 var s=VC.get();
 var skillId=s.skillId||'ngt';
 var skill=VC.SKILLS[skillId];
 el.innerHTML='<div class="card"><h3>'+e(skill.title)+' (placeholder overview)</h3><p>Learning objectives: <span class="placeholder">'+e(skill.objectives)+'</span>. Estimated time: about '+e(skill.time)+'. Difficulty: '+e(skill.difficulty)+' (placeholder).</p><p class="alert"><strong>Safety notice.</strong> Placeholder steps only. This does not teach real clinical technique.</p></div>'+
 '<ol class="flow" aria-label="Privacy pipeline"><li>Clinical recording</li><li>Identifier detection</li><li>De-identification</li><li>Privacy review</li><li>AI processing</li></ol>'+
 '<p class="alert"><strong>Conceptual design only.</strong> This is not a legal consent form and does not meet PHIPA, PIPEDA or TCPS 2 requirements.</p>'+
 '<div class="card"><label class="check"><input type="checkbox" id="c1"><span><strong>Recording consent confirmed (simulated).</strong> Nothing is processed without it. Consent would be withdrawable.</span></label>'+
 '<label class="check"><input type="checkbox" id="c2"><span>Allow my performance summary to be shared with an educator (optional).</span></label>'+
 '<label class="check"><input type="checkbox" id="c3"><span>I understand that my data stays in this browser tab only.</span></label></div>';
 var c1=el.querySelector('#c1'),c2=el.querySelector('#c2'),c3=el.querySelector('#c3');
 c1.checked=s.consent.recording;c2.checked=s.consent.learner;c3.checked=s.consent.data||false;
 cfg.ok=c1.checked&&c3.checked;cfg.label='Continue to processing';
 c1.onchange=c2.onchange=c3.onchange=function(){
  VC.set({
   consent:{recording:c1.checked,learner:c2.checked,data:c3.checked},
   processed:c1.checked&&c3.checked?VC.get().processed:false
  });
  cfg.ok=c1.checked&&c3.checked;
  bar();
 };
},
function processing(el){
 var s=VC.get();
 function list(i){return'<ol class="pipeline">'+STAGES.map(function(t,k){return'<li class="'+(k<i?'done':k===i?'active':'')+'"><span class="dot"></span><div><strong>'+t+'</strong><br><span class="muted">'+NOTES[k]+'</span></div></li>'}).join('')+'</ol>'}
 el.innerHTML='<p class="alert"><strong>Simulated.</strong> No data is processed. This illustrates a proposed pipeline.</p><button class="btn" id="run" style="margin-bottom: 1.5rem;">Run simulated processing</button><p id="pm" role="status" style="margin-bottom: 1rem;"></p><div id="pl"></div>';
 var pl=el.querySelector('#pl'),pm=el.querySelector('#pm'),run=el.querySelector('#run');cfg.label='Continue to practice';
 pl.innerHTML=list(s.processed?5:-1);cfg.ok=s.processed;
 if(s.processed){pm.textContent='Simulated processing complete.';run.textContent='Run again'}
 run.onclick=function(){run.disabled=true;var i=0,ms=matchMedia('(prefers-reduced-motion:reduce)').matches?200:1000;
  (function step(){pl.innerHTML=list(i);if(i>=5){VC.set({processed:true});pm.textContent='Simulated processing complete. Content would still need clinical educator validation.';cfg.ok=true;run.disabled=false;run.textContent='Run again';bar();return}
   pm.textContent='Simulated: '+STAGES[i]+'…';i++;setTimeout(step,ms)})()};
},
function practice(el){
 var s=VC.get(),st=VC.engine.steps(),i=s.idx;cfg.label='AI feedback';cfg.ok=i>=st.length;cfg.showNext=i<st.length;bar();
 if(i>=st.length){el.innerHTML='<div class="card"><h3>All placeholder steps complete</h3><p>Continue for simulated feedback, or practice again.</p><div class="row"><button class="btn btn-ghost" id="again">Practice again</button><button class="btn" id="feedback">AI feedback</button></div></div>';el.querySelector('#again').onclick=function(){VC.resetSim();practice(el)};el.querySelector('#feedback').onclick=function(){VC.set({stage:3});draw();focusTop()};return}
 var step=st[i],pct=Math.round(100*i/st.length);
 el.innerHTML='<div class="sim"><section class="card"><p class="muted">Step '+(i+1)+' of '+st.length+(step.severity==='critical'?' <span class="badge warn">Safety-critical</span>':'')+'</p><h3>'+e(step.title)+'</h3><p>'+e(step.prompt)+'</p><div role="group" aria-label="Choices" id="opts">'+
 step.options.map(function(o){return'<button class="opt" data-o="'+o.id+'">'+e(o.text)+'</button>'}).join('')+'</div><div id="res" aria-live="polite"></div></section><aside class="card"><h3>Progress</h3><div class="progress" role="progressbar" aria-valuenow="'+pct+'" aria-valuemin="0" aria-valuemax="100"><span style="width:'+pct+'%"></span></div><p class="muted">Placeholder content, not clinically validated.</p></aside></div>';
 el.querySelector('#opts').onclick=function(ev){
  var b=ev.target.closest('.opt');if(!b||b.disabled)return;
  var r=VC.engine.answer(step.id,b.dataset.o),out=el.querySelector('#res');
  if(r.ok){[].forEach.call(el.querySelectorAll('.opt'),function(x){x.disabled=true});b.classList.add('correct');
   out.innerHTML='<div class="alert ok"><strong>Correct (placeholder).</strong> '+e(step.rationale)+'</div><button class="btn" id="nx">'+(i+1<st.length?'Next step':'Finish practice')+'</button>';
   out.querySelector('#nx').onclick=function(){VC.engine.advance();practice(el)};out.querySelector('#nx').focus();
  }else{b.classList.add('wrong');b.disabled=true;out.innerHTML='<div class="alert bad"><strong>Not quite (placeholder).</strong> Try another option.</div>'}
 };
},
function feedback(el){
 var c=VC.scoring.compute(),has=Object.keys(c.answers).length>0;cfg.ok=has;cfg.label='Request instructor review';
 cfg.onNext=function(){var d=VC.get().educator;d.requested=true;VC.set({educator:d})};
 if(!has){el.innerHTML='<div class="alert">No practice data yet. Go back and complete Practice.</div>';return}
 var completed=c.steps.filter(function(step){return c.answers[step.id]&&c.answers[step.id].correct}).length,firstTry=c.steps.filter(function(step){var answer=c.answers[step.id];return answer&&answer.firstCorrect}).length,retries=completed-firstTry;
 el.innerHTML='<p class="alert">This simulated AI feedback is based on how you completed the Practice test. It is generated by predefined JavaScript rules, not a trained AI model; scores are illustrative prototype values, not benchmarks.</p>'+
 '<div class="card"><h3>Your Practice test result</h3><div class="grid"><div><strong>Completed steps</strong><p>'+completed+' of '+c.steps.length+'</p></div><div><strong>Correct first try</strong><p>'+firstTry+' of '+c.steps.length+'</p></div><div><strong>Steps retried</strong><p>'+retries+'</p></div><div><strong>Safety-critical retries</strong><p>'+c.flags.length+'</p></div></div></div>'+
 '<div class="grid"><div class="card"><h3>Overall score (illustrative)</h3><div class="score">'+c.overall+'%</div></div><div class="card"><h3>Category scores</h3>'+c.cats.map(function(x){return'<p>'+e(x.name)+': '+x.pct+'%<span class="progress" style="display:block"><span style="width:'+x.pct+'%"></span></span></p>'}).join('')+'</div><div class="card"><h3>Safety flags</h3>'+(c.flags.length?c.flags.map(function(s){return'<p class="alert bad">'+e(s.title)+' needed a retry.</p>'}).join(''):'<p class="alert ok">No safety flags.</p>')+'</div></div><h3 style="margin-top:var(--s5)">Simulated AI feedback</h3><div class="stack" id="fb"></div>';
 VC.feedback.render(el.querySelector('#fb'));
},
function review(el){
 var sc=VC.scoring.compute(),auto=sc.flags.length?'Needs further practice (simulated)':'No flags (simulated)';
 el.innerHTML='<p class="alert"><strong>Human oversight.</strong> The educator can accept, modify or override any AI observation, and the educator\'s decision is final. Demo role only, no login.</p><div class="grid"><div class="card"><h3>Learner performance</h3><p><strong>Illustrative score:</strong> '+sc.overall+'%</p><p><strong>Safety flags:</strong> '+sc.flags.length+'</p><p><strong>AI-suggested status:</strong> '+auto+'</p></div>'+
 '<div class="card"><h3>Instructor decision</h3><div id="status" role="status"></div><label for="comment"><strong>Instructor comments</strong></label><textarea id="comment"></textarea><label for="final"><strong>Final status (for override)</strong></label><br><select id="final"><option>Satisfactory (instructor)</option><option>Needs further practice (instructor)</option><option>Not yet ready (instructor)</option></select><div class="row"><button class="btn" id="accept">Accept</button><button class="btn btn-ghost" id="modify">Modify</button><button class="btn" id="override" style="background:var(--oversight);border-color:var(--oversight);color:var(--ink)">Override</button></div></div></div><h3 style="margin-top:var(--s5)">AI observations (simulated)</h3><div class="stack" id="obs"></div>';
 VC.feedback.render(el.querySelector('#obs'));
 function show(){var d=VC.get().educator;el.querySelector('#status').innerHTML=d.decision?'<div class="review-state"><strong>Instructor decision: '+e(d.decision.toUpperCase())+'</strong><br>Final status: '+e(d.finalStatus)+(d.comment?'<br>Comment: '+e(d.comment):'')+'<br><span class="muted">The instructor, not the AI, holds the final assessment.</span></div>':'<div class="alert">Awaiting instructor decision. AI suggestions are not final.</div>'}
 function decide(k){var c=el.querySelector('#comment').value.trim(),f=auto;
  if((k==='override'||k==='modify')&&!c){alert('Please add a comment explaining your '+k+'.');return}
  if(k==='override')f=el.querySelector('#final').value;
  var d=VC.get().educator;VC.set({educator:Object.assign(d,{decision:k,comment:c,finalStatus:f,requested:true})});show()}
 ['accept','modify','override'].forEach(function(k){el.querySelector('#'+k).onclick=function(){decide(k)}});show();
}];
draw();
VC.draw=draw;
})();
