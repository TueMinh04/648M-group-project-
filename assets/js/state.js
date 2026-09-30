/* Shared session state (sessionStorage). Cleared when the tab closes. */
(function(){
var K='virtucare.v1',VC=window.VC=window.VC||{};
var D=function(){return{stage:0,consent:{recording:false,learner:false},processed:false,idx:0,answers:{},educator:{requested:false,decision:null,comment:'',finalStatus:null},runs:0}};
VC.get=function(){try{return Object.assign(D(),JSON.parse(sessionStorage.getItem(K)||'{}'))}catch(e){return D()}};
VC.set=function(p){var s=Object.assign(VC.get(),p);try{sessionStorage.setItem(K,JSON.stringify(s))}catch(e){}return s};
VC.reset=function(){try{sessionStorage.removeItem(K)}catch(e){}};
VC.resetSim=function(){var s=VC.get();VC.set({idx:0,answers:{},runs:s.runs+1,educator:D().educator})};
})();
