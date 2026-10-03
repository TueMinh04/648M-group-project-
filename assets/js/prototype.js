/* One guided prototype: Consent → Processing → Practice → AI Feedback → Review. All simulated. */
(function(){
var root=document.getElementById('proto'),e=VC.esc,cfg,ST=['Consent','Processing','Practice','AI Feedback','Review'];
var HELP=['Tick the simulated recording consent box, then continue.','Select a VR or procedure recording, then generate the simulated 3D practice module.','Review the source recording and the requirements for a real first-person 3D practice model.','Review the AI feedback based on the simulated 3D practice-task review.','Act as the instructor: accept, modify or override the AI suggestions.'];
var STAGES=['Consent and access check','Video de-identification','AI 3D scene reconstruction','First-person VR module','Clinical educator validation'];
var NOTES=['Checks that recording consent and approved access are recorded.','Illustrates removing identifiers before training use.','Illustrates AI extracting movement and environment data to reconstruct a 3D scene.','Illustrates creating a first-person practice experience.','Illustrates queueing the module for clinical educator validation.'];
function youtubeId(url){var match=String(url||'').match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?[^#]*v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/i);return match?match[1]:''}
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
 var s=VC.get(),recordingName=s.recordingName||'',recordingUrl=s.recordingUrl||'',sourceStatus=recordingName?'Selected recording: <strong>'+e(recordingName)+'</strong>. The file remains on this device.':recordingUrl?'Video link added. The prototype will not open or upload it.':'No recording selected.';
 function list(i){return'<ol class="pipeline">'+STAGES.map(function(t,k){return'<li class="'+(k<i?'done':k===i?'active':'')+'"><span class="dot"></span><div><strong>'+t+'</strong><br><span class="muted">'+NOTES[k]+'</span></div></li>'}).join('')+'</ol>'}
 el.innerHTML='<p class="alert"><strong>Conceptual prototype.</strong> Selecting a file does not upload, retain, process, or create a 3D model from it. This screen demonstrates the proposed VR-training workflow only.</p>'+
 '<div class="card recording-upload"><h3>VR or procedure recording</h3><p>Choose a video captured from a VR headset, procedure camera, or simulation session. In a real system, only recordings with appropriate consent and de-identification could proceed.</p><label for="recording"><strong>Select a video recording</strong></label><input id="recording" class="recording-input" type="file" accept="video/*"><label for="recording-url"><strong>Or add a video link</strong></label><input id="recording-url" class="recording-input" type="url" value="'+e(recordingUrl)+'" placeholder="https://example.com/recording"><p id="file-status" class="muted" role="status">'+sourceStatus+'</p><button class="btn" id="run"'+(recordingName||recordingUrl||s.processed?'':' disabled')+'>Generate simulated 3D practice module</button></div><p id="pm" role="status" style="margin-bottom: 1rem;"></p><div id="pl"></div><div class="card generated-module" id="module"'+(s.processed?'':' hidden')+'><h3>First-person VR practice module ready (simulated)</h3><p>The proposed system would use the de-identified recording to reconstruct a 3D scene, then present skill-specific decisions and feedback for practice. No video or 3D model is generated by this prototype.</p></div>';
 var pl=el.querySelector('#pl'),pm=el.querySelector('#pm'),run=el.querySelector('#run'),file=el.querySelector('#recording'),url=el.querySelector('#recording-url'),fileStatus=el.querySelector('#file-status'),module=el.querySelector('#module');cfg.label='Continue to practice';
 pl.innerHTML=list(s.processed?5:-1);cfg.ok=s.processed;
 if(s.processed){pm.textContent='Simulated 3D practice module ready for the selected skill.';run.textContent='Regenerate simulated module'}
 file.onchange=function(){var selected=file.files&&file.files[0];if(!selected)return;recordingName=selected.name;recordingUrl='';url.value='';VC.set({recordingName:recordingName,recordingUrl:'',processed:false});fileStatus.innerHTML='Selected recording: <strong>'+e(recordingName)+'</strong>. The file remains on this device.';run.disabled=false;pm.textContent='';module.hidden=true;pl.innerHTML=list(-1);cfg.ok=false;bar()};
 url.onchange=function(){var link=url.value.trim();if(!link){run.disabled=!recordingName;return}recordingUrl=link;recordingName='';VC.set({recordingName:'',recordingUrl:recordingUrl,processed:false});fileStatus.textContent='Video link added. The prototype will not open or upload it.';run.disabled=false;pm.textContent='';module.hidden=true;pl.innerHTML=list(-1);cfg.ok=false;bar()};
 run.onclick=function(){run.disabled=true;var i=0,ms=matchMedia('(prefers-reduced-motion:reduce)').matches?200:1000;
  (function step(){pl.innerHTML=list(i);if(i>=5){VC.set({processed:true});pm.textContent='Simulated 3D practice module ready. It would still require clinical educator validation.';cfg.ok=true;run.disabled=false;run.textContent='Regenerate simulated module';module.hidden=false;bar();return}
   pm.textContent='Simulated: '+STAGES[i]+'…';i++;setTimeout(step,ms)})()};
},
function practice(el){
 var s=VC.get(),st=VC.engine.steps(),i=s.idx,skill=VC.SKILLS[s.skillId||'ngt'];cfg.label='AI feedback';cfg.ok=i>=st.length;cfg.showNext=i<st.length;bar();
 if(i>=st.length){el.innerHTML='<div class="card"><h3>All 3D practice tasks reviewed (demo)</h3><p>Review the simulated feedback, or practice again. A real patient model is still required for hands-on 3D practice.</p><div class="row"><button class="btn btn-ghost" id="again">Practice again</button><button class="btn" id="feedback">AI feedback</button></div></div>';el.querySelector('#again').onclick=function(){VC.resetSim();practice(el)};el.querySelector('#feedback').onclick=function(){VC.set({stage:3});draw();focusTop()};return}
 var step=st[i],pct=Math.round(100*i/st.length),source=s.recordingName?'local video recording':s.recordingUrl?'video link':'no source recording',videoId=youtubeId(s.recordingUrl),sourcePreview=videoId?'<div class="source-video"><h4>Selected YouTube source video</h4><iframe src="https://www.youtube-nocookie.com/embed/'+videoId+'" title="Selected YouTube source video" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p class="muted">This source video has not been analysed or reconstructed by the prototype.</p></div>':'';
 el.innerHTML='<div class="sim vr-practice"><section class="card"><p class="muted">3D practice task '+(i+1)+' of '+st.length+(step.severity==='critical'?' <span class="badge warn">Safety-critical</span>':'')+'</p><h3>'+e(step.title)+'</h3><p>This task would appear in a first-person '+e(skill.title)+' practice environment after a real patient model is generated.</p><div class="model-required" role="status"><h4>3D patient model processing required</h4><p>The selected recording must be processed by an approved video-to-3D service and produce a reviewed <code>.glb</code> or <code>.gltf</code> model before an interactive patient viewer can be shown here.</p></div>'+sourcePreview+'<div class="row"><button class="btn" id="complete">Mark task reviewed (demo)</button></div><p id="scene-status" class="muted" role="status">A real 3D practice task cannot start until a reviewed patient model is available.</p></section><aside class="card"><h3>Practice progress</h3><div class="progress" role="progressbar" aria-valuenow="'+pct+'" aria-valuemin="0" aria-valuemax="100"><span style="width:'+pct+'%"></span></div><p><strong>Model source:</strong> '+source+'</p><p class="muted">This static prototype embeds the selected source video only. It does not process the video or generate a 3D patient model.</p></aside></div>';
 el.querySelector('#complete').onclick=function(){var latest=VC.get(),answers=latest.answers;answers[step.id]={attempts:1,firstCorrect:true,correct:true};VC.set({answers:answers,idx:i+1});practice(el)};
},
function feedback(el){
 var c=VC.scoring.compute(),has=Object.keys(c.answers).length>0;cfg.ok=has;cfg.label='Request instructor review';
 cfg.onNext=function(){var d=VC.get().educator;d.requested=true;VC.set({educator:d})};
 if(!has){el.innerHTML='<div class="alert">No practice data yet. Go back and complete Practice.</div>';return}
 var completed=c.steps.filter(function(step){return c.answers[step.id]&&c.answers[step.id].correct}).length,critical=c.steps.filter(function(step){return step.severity==='critical'}).length;
 el.innerHTML='<p class="alert">This simulated AI feedback is based on the 3D practice-task review. It is generated by predefined JavaScript rules, not a trained AI model; scores are illustrative prototype values, not benchmarks.</p>'+
 '<div class="card"><h3>Your 3D practice-task review</h3><div class="grid"><div><strong>Reviewed tasks</strong><p>'+completed+' of '+c.steps.length+'</p></div><div><strong>Demo actions completed</strong><p>'+completed+'</p></div><div><strong>Safety-critical tasks</strong><p>'+critical+'</p></div><div><strong>Tasks needing review</strong><p>'+c.flags.length+'</p></div></div></div>'+
 '<div class="grid"><div class="card"><h3>Overall session score (illustrative)</h3><div class="score">'+c.overall+'%</div></div><div class="card"><h3>Task-group scores</h3>'+c.cats.map(function(x){return'<p>'+e(x.name)+': '+x.pct+'%<span class="progress" style="display:block"><span style="width:'+x.pct+'%"></span></span></p>'}).join('')+'</div><div class="card"><h3>Safety flags</h3>'+(c.flags.length?c.flags.map(function(s){return'<p class="alert bad">'+e(s.title)+' needed a review.</p>'}).join(''):'<p class="alert ok">No safety flags.</p>')+'</div></div><h3 style="margin-top:var(--s5)">Simulated AI feedback</h3><div class="stack" id="fb"></div>';
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
