parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";var e,t,n,c,r=document.querySelector(".player--0"),o=document.querySelector(".player--1"),d=document.querySelector("#score--0"),a=document.getElementById("score--1"),s=document.querySelector(".dice"),l=document.querySelector(".btn--new"),i=document.querySelector(".btn--roll"),u=document.querySelector(".btn--hold"),m=document.getElementById("current--0"),y=document.getElementById("current--1"),v=document.querySelector(".winner--0"),L=document.querySelector(".winner--1"),p=function(){e=[0,0],t=0,n=0,c=!0,d.textContent=0,a.textContent=0,m.textContent=0,y.textContent=0,s.classList.add("hidden"),r.classList.remove("player--winner"),o.classList.remove("player--winner"),r.classList.add("player--active"),o.classList.remove("player--active"),v.classList.add("hidden"),L.classList.add("hidden")};p();var q=function(){document.getElementById("current--".concat(n)).textContent=0,t=0,n=0===n?1:0,r.classList.toggle("player--active"),o.classList.toggle("player--active")};i.addEventListener("click",function(){if(c){var e=Math.trunc(6*Math.random())+1;s.classList.remove("hidden"),s.src=require(".static/assets/dice-".concat(e,".png")),1!==e?(t+=e,document.getElementById("current--".concat(n)).textContent=t):q()}}),u.addEventListener("click",function(){c&&(e[n]+=t,document.getElementById("score--".concat(n)).textContent=e[n],e[n]>=100?(c=!1,s.classList.add("hidden"),document.querySelector(".winner--".concat(n)).classList.remove("hidden"),document.querySelector(".player--".concat(n)).classList.add("player--winner"),document.querySelector(".player--".concat(n)).classList.remove("player--active")):q())}),l.addEventListener("click",p);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/src.60e4faab.js.map