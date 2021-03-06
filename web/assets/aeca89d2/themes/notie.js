var notie=function(){function e(e){for(var t in e)h[t]=e[t]}function t(e,t,i){h.colorText.length>0&&(C.style.color=h.colorText),f(),H++,setTimeout(function(){H--},h.animationDelay+10),1===H&&(D?(clearTimeout(x),clearTimeout(E),n(function(){o(e,t,i)})):o(e,t,i))}function o(e,t,o){D=!0;var i=0;if("undefined"==typeof o||0===o)var i=864e5;else i=o>0&&1>o?1e3:1e3*o;switch(y(k,"notie-background-success"),y(k,"notie-background-warning"),y(k,"notie-background-error"),y(k,"notie-background-info"),e){case 1:h.colorSuccess.length>0?k.style.backgroundColor=h.colorSuccess:p(k,"notie-background-success");break;case 2:h.colorWarning.length>0?k.style.backgroundColor=h.colorWarning:p(k,"notie-background-warning");break;case 3:h.colorError.length>0?k.style.backgroundColor=h.colorError:p(k,"notie-background-error");break;case 4:h.colorInfo.length>0?k.style.backgroundColor=h.colorInfo:p(k,"notie-background-info")}C.innerHTML=t,k.style.top="-10000px",k.style.display="table",k.style.top="-"+k.offsetHeight-5+"px",x=setTimeout(function(){p(k,"notie-transition"),k.style.top=0,E=setTimeout(function(){n(function(){})},i)},20)}function n(e){k.style.top="-"+k.offsetHeight-5+"px",setTimeout(function(){y(k,"notie-transition"),k.style.top="-10000px",D=!1,e&&e()},h.animationDelay+10)}function i(e,t,o,i,l){h.colorInfo.length>0&&(L.style.backgroundColor=h.colorInfo),h.colorSuccess.length>0&&(M.style.backgroundColor=h.colorSuccess),h.colorError.length>0&&(S.style.backgroundColor=h.colorError),h.colorText.length>0&&(I.style.color=h.colorText,A.style.color=h.colorText,N.style.color=h.colorText),f(),D?(clearTimeout(x),clearTimeout(E),n(function(){c(e,t,o,i,l)})):c(e,t,o,i,l)}function c(e,t,o,n,i){function c(){I.innerHTML=e,A.innerHTML=t,N.innerHTML=o,w.style.top="-10000px",w.style.display="table",w.style.top="-"+w.offsetHeight-5+"px",W.style.display="block",setTimeout(function(){p(w,"notie-transition"),w.style.top=0,W.style.opacity="0.75",setTimeout(function(){V=!0},h.animationDelay+10)},20)}g(),M.onclick=function(){l(),n&&setTimeout(function(){n()},h.animationDelay+10)},S.onclick=function(){l(),i&&setTimeout(function(){i()},h.animationDelay+10)},V?(l(),setTimeout(function(){c()},h.animationDelay+10)):c()}function l(){w.style.top="-"+w.offsetHeight-5+"px",W.style.opacity="0",setTimeout(function(){y(w,"notie-transition"),w.style.top="-10000px",W.style.display="none",b(),V=!1},h.animationDelay+10)}function r(e,t,o,i,c,l){h.colorInfo.length>0&&(z.style.backgroundColor=h.colorInfo),h.colorSuccess.length>0&&(R.style.backgroundColor=h.colorSuccess),h.colorError.length>0&&($.style.backgroundColor=h.colorError),h.colorText.length>0&&(q.style.color=h.colorText,F.style.color=h.colorText,G.style.color=h.colorText),f(),"undefined"!=typeof e.type&&e.type?O.setAttribute("type",e.type):O.setAttribute("type","text"),"undefined"!=typeof e.placeholder&&e.placeholder&&O.setAttribute("placeholder",e.placeholder),"undefined"!=typeof e.prefilledValue&&e.prefilledValue?O.value=e.prefilledValue:O.value="",D?(clearTimeout(x),clearTimeout(E),n(function(){a(t,o,i,c,l)})):a(t,o,i,c,l)}function a(e,t,o,n,i){function c(){q.innerHTML=e,F.innerHTML=t,G.innerHTML=o,j.style.top="-10000px",j.style.display="table",j.style.top="-"+j.offsetHeight-5+"px",B.style.display="block",setTimeout(function(){p(j,"notie-transition"),j.style.top=0,B.style.opacity="0.75",setTimeout(function(){J=!0,O.focus()},h.animationDelay+10)},20)}g(),R.onclick=function(){d(),n&&setTimeout(function(){n(O.value)},h.animationDelay+10)},$.onclick=function(){d(),i&&setTimeout(function(){i(O.value)},h.animationDelay+10)},J?(d(),setTimeout(function(){c()},h.animationDelay+10)):c()}function d(){j.style.top="-"+j.offsetHeight-5+"px",B.style.opacity="0",setTimeout(function(){y(j,"notie-transition"),B.style.display="none",j.style.top="-10000px",b(),J=!1},h.animationDelay+10)}function u(e,t){h.colorInfo.length>0&&(P.style.backgroundColor=h.colorInfo),h.colorNeutral.length>0&&(Y.style.backgroundColor=h.colorNeutral),h.colorText.length>0&&(Q.style.color=h.colorText,Y.style.color=h.colorText);for(var o=[],i=0;i<arguments.length-2;i++)o[i]=arguments[i+2];if(o.length!==t.length)throw"notie.select number of choices must match number of functions";f(),D?(clearTimeout(x),clearTimeout(E),n(function(){s(e,t,o)})):s(e,t,o)}function s(e,t,o){function n(e){Q.innerHTML=e,K.style.bottom="-10000px",K.style.display="table",K.style.bottom="-"+K.offsetHeight-5+"px",U.style.display="block",setTimeout(function(){p(K,"notie-transition"),K.style.bottom=0,U.style.opacity="0.75",setTimeout(function(){ee=!0},h.animationDelay+10)},20)}g(),document.getElementById("notie-select-choices").innerHTML="";for(var i,c=0;c<t.length;c++){var l=document.createElement("div");if(l.innerHTML=t[c].title,p(l,"notie-select-choice"),X.appendChild(l),l.style.backgroundColor=window.getComputedStyle(l).backgroundColor,h.colorText.length>0&&(l.style.color=h.colorText),t[c].type)switch(t[c].type){case 1:h.colorSuccess.length>0?l.style.backgroundColor=h.colorSuccess:p(l,"notie-background-success");break;case 2:h.colorWarning.length>0?l.style.backgroundColor=h.colorWarning:p(l,"notie-background-warning");break;case 3:h.colorError.length>0?l.style.backgroundColor=h.colorError:p(l,"notie-background-error");break;case 4:h.colorInfo.length>0?l.style.backgroundColor=h.colorInfo:p(l,"notie-background-info")}else t[c].color&&(l.style.backgroundColor=t[c].color);c>0&&l.style.backgroundColor===i.style.backgroundColor&&(i.style.borderBottom="1px solid rgba(255, 255, 255, 0.2)"),l.onclick=function(e){return function(){m(),setTimeout(function(){o[e]()},h.animationDelay+10)}}(c),i=l}ee?(m(),setTimeout(function(){n(e)},h.animationDelay+10)):n(e)}function m(){K.style.bottom="-"+K.offsetHeight-5+"px",U.style.opacity="0",setTimeout(function(){y(K,"notie-transition"),K.style.bottom="-10000px",U.style.display="none",b(),ee=!1},h.animationDelay+10)}function p(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function y(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function f(){document.activeElement.blur()}function g(){Z=document.body.style.height,_=document.body.style.overflow,document.body.style.height="100%",document.body.style.overflow="hidden"}function b(){document.body.style.height=Z,document.body.style.overflow=_}var h={colorSuccess:"",colorWarning:"",colorError:"",colorInfo:"",colorNeutral:"",colorText:"",animationDelay:300,backgroundClickDismiss:!0},k=document.createElement("div");k.id="notie-alert-outer",k.onclick=function(){clearTimeout(x),clearTimeout(E),n()},document.body.appendChild(k);var v=document.createElement("div");v.id="notie-alert-inner",k.appendChild(v);var T=document.createElement("div");T.id="notie-alert-content",v.appendChild(T);var C=document.createElement("span");C.id="notie-alert-text",T.appendChild(C);var x,E,D=!1,H=0,w=document.createElement("div");w.id="notie-confirm-outer";var L=document.createElement("div");L.id="notie-confirm-inner",w.appendChild(L);var I=document.createElement("span");I.id="notie-confirm-text",L.appendChild(I);var M=document.createElement("div");M.id="notie-confirm-yes",w.appendChild(M);var S=document.createElement("div");S.id="notie-confirm-no",w.appendChild(S);var A=document.createElement("span");A.id="notie-confirm-text-yes",M.appendChild(A);var N=document.createElement("span");N.id="notie-confirm-text-no",S.appendChild(N);var W=document.createElement("div");W.id="notie-confirm-background",p(W,"notie-transition"),W.onclick=function(){h.backgroundClickDismiss&&l()},document.body.appendChild(w),document.body.appendChild(W);var V=!1,j=document.createElement("div");j.id="notie-input-outer";var B=document.createElement("div");B.id="notie-input-background",p(B,"notie-transition");var z=document.createElement("div");z.id="notie-input-inner",j.appendChild(z);var O=document.createElement("input");O.id="notie-input-field",O.setAttribute("autocomplete","off"),O.setAttribute("autocorrect","off"),O.setAttribute("autocapitalize","off"),O.setAttribute("spellcheck","false"),j.appendChild(O);var R=document.createElement("div");R.id="notie-input-yes",j.appendChild(R);var $=document.createElement("div");$.id="notie-input-no",j.appendChild($);var q=document.createElement("span");q.id="notie-input-text",z.appendChild(q);var F=document.createElement("span");F.id="notie-input-text-yes",R.appendChild(F);var G=document.createElement("span");G.id="notie-input-text-no",$.appendChild(G),document.body.appendChild(j),document.body.appendChild(B),B.onclick=function(){h.backgroundClickDismiss&&d()};var J=!1,K=document.createElement("div");K.id="notie-select-outer";var P=document.createElement("div");P.id="notie-select-inner",K.appendChild(P);var Q=document.createElement("span");Q.id="notie-select-text",P.appendChild(Q);var U=document.createElement("div");U.id="notie-select-background",p(U,"notie-transition");var X=document.createElement("div");X.id="notie-select-choices",K.appendChild(X);var Y=document.createElement("div");Y.id="notie-select-cancel",Y.innerHTML="Cancel",K.appendChild(Y),document.body.appendChild(K),document.body.appendChild(U),U.onclick=function(){h.backgroundClickDismiss&&m()},Y.onclick=function(){m()};var Z,_,ee=!1;return window.addEventListener("keydown",function(e){var t=13==e.which||13==e.keyCode,o=27==e.which||27==e.keyCode;D?(t||o)&&(clearTimeout(x),clearTimeout(E),n()):V?t?M.click():o&&l():J?t?R.click():o&&d():ee&&o&&m()}),{setOptions:e,alert:t,confirm:i,input:r,select:u}}();"object"==typeof module&&module.exports&&(module.exports=notie);
