import{s as V,g as N}from"./gxf.cead0347.js";import{_ as q}from"./index.482c706a.js";import{E as x,g as L,r as F,o as r,c as d,a as i,t as v,h as A,j as b,F as C,k as S,b as g,w as B,l as E}from"./vendor.166a2bad.js";import"./request.8e63e585.js";var D={exports:{}};/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/(function(l){(function(){var s=typeof window!="undefined"&&typeof window.document!="undefined"?window.document:{},o=l.exports,u=function(){for(var n,e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t=0,c=e.length,m={};t<c;t++)if(n=e[t],n&&n[1]in s){for(t=0;t<n.length;t++)m[e[0][t]]=n[t];return m}return!1}(),a={change:u.fullscreenchange,error:u.fullscreenerror},p={request:function(n,e){return new Promise(function(t,c){var m=function(){this.off("change",m),t()}.bind(this);this.on("change",m),n=n||s.documentElement;var k=n[u.requestFullscreen](e);k instanceof Promise&&k.then(m).catch(c)}.bind(this))},exit:function(){return new Promise(function(n,e){if(!this.isFullscreen){n();return}var t=function(){this.off("change",t),n()}.bind(this);this.on("change",t);var c=s[u.exitFullscreen]();c instanceof Promise&&c.then(t).catch(e)}.bind(this))},toggle:function(n,e){return this.isFullscreen?this.exit():this.request(n,e)},onchange:function(n){this.on("change",n)},onerror:function(n){this.on("error",n)},on:function(n,e){var t=a[n];t&&s.addEventListener(t,e,!1)},off:function(n,e){var t=a[n];t&&s.removeEventListener(t,e,!1)},raw:u};if(!u){o?l.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};return}Object.defineProperties(p,{isFullscreen:{get:function(){return Boolean(s[u.fullscreenElement])}},element:{enumerable:!0,get:function(){return s[u.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(s[u.fullscreenEnabled])}}}),o?l.exports=p:window.screenfull=p})()})(D);var w=D.exports;const M={data(){return{endTime:0,clockTime:"00:45:00",startTime:Date.now(),checkList:[],radio:[],textarea:[],errorUp:!1,topics:[],leaves:0}},methods:{leave(){this.leaves++,this.leaves>=3?(this.lookRadio(),x.alert("\u60A8\u5DF2\u79BB\u5F00\u9875\u97623\u6B21","\u5F3A\u5236\u63D0\u4EA4\u8BD5\u5377",{confirmButtonText:"\u786E\u8BA4",type:"warning"}),localStorage.setItem("leaves","")):this.leaves==1?(w.toggle(),x.alert(`\u60A8\u5DF2\u79BB\u5F00${this.leaves}\u6B21`,"\u79BB\u5F00\u9875\u97623\u6B21\u4F1A\u5F3A\u5236\u63D0\u4EA4\u8BD5\u5377",{confirmButtonText:"\u786E\u8BA4",type:"warning"})):x.alert(`\u60A8\u5DF2\u79BB\u5F00${this.leaves}\u6B21`,"\u79BB\u5F00\u9875\u97623\u6B21\u4F1A\u5F3A\u5236\u63D0\u4EA4\u8BD5\u5377",{confirmButtonText:"\u786E\u8BA4",type:"warning"})},async lookRadio(){const l=[];for(let e in this.radio){let t=this.radio[e];l.push({number:Number(e),choice:t.slice(0,1)})}for(let e in this.checkList){let t="";for(let c in this.checkList[e])t+=this.checkList[e][c].slice(0,1);l.push({number:Number(e),choice:t})}for(let e in this.textarea)l.push({number:Number(e),choice:this.textarea[e]});const s=l.sort(function(e,t){return e.number-t.number}),{username:o,ClassA:u,phone:a,candidate:p}=this.$route.query;let n={key:a,testId:p,name:o,answer:JSON.stringify(s),isLook:"N",upTime:Date.now(),team:u};await V(n).then(e=>{e.code=="200"?(this.$router.replace({path:"/end",query:{upTime:n.upTime,phone:n.key}}),localStorage.setItem("leaves",""),localStorage.setItem("wxToken","")):this.errorUp=!0})},async getChecklist(){const{candidate:l}=this.$route.query;await N({candidate:l}).then(s=>{this.topics=s.topics,this.endTime=s.endTime*1})},countTime(){let l,s,o,u;this.endTime>=0?(o=Math.floor((this.endTime-this.startTime)/(1e3*60)/60),l=Math.floor((this.endTime-this.startTime)/(1e3*60)%60),s=Math.floor((this.endTime-this.startTime)/1e3%60),this.endTime-=1e3):clearTimeout(u),this.clockTime=(o?o<10?"0"+o:o:"00")+":"+(l?l<10?"0"+l:l:"00")+":"+(s?s<10?"0"+s:s:"00"),u=setTimeout(this.countTime,1e3)},beforeunloadHandler(l){localStorage.setItem("leaves",String(this.leaves))}},mounted(){console.log(w),w.isEnabled||L({message:"\u60A8\u7684\u6D4F\u89C8\u5668\u6682\u65F6\u4E0D\u652F\u6301\u5168\u5C4F\u5207\u6362",type:"warning"}),w.request(),this.getChecklist(),this.countTime(),localStorage.getItem("leaves")&&(this.leaves=Number(localStorage.getItem("leaves"))),window.addEventListener("beforeunload",this.beforeunloadHandler,!1)},beforeDestroy(){window.removeEventListener("beforeunload",l=>this.beforeunloadHandler(l))}},U={class:"header"},I=i("i",{class:"el-icon-alarm-clock"},null,-1),P=E("\u603B\u8BA1\u65F6 "),R={class:"closeTime"},z={class:"main"},j=i("h3",{class:"title"},"web\u524D\u7AEF\u7B14\u8BD5\u9898",-1),$=i("p",{class:"thanks"}," \u611F\u8C22\u60A8\u80FD\u62BD\u51FA\u51E0\u5206\u949F\u65F6\u95F4\u6765\u53C2\u52A0\u672C\u6B21\u7B54\u9898,\u73B0\u5728\u6211\u4EEC\u9A6C\u4E0A\u5F00\u59CB\u5427! ",-1),H=i("p",{class:"line"},null,-1),O={class:"topics"},J={class:"subject"},G=["src"],K={key:2,class:"radio"},Q={key:3,class:"checkbox"},W={key:4,class:"textarea"},X=E("\u63D0\u4EA4");function Y(l,s,o,u,a,p){const n=F("el-alert"),e=F("el-input"),t=F("el-radio"),c=F("el-checkbox"),m=F("el-checkbox-group"),k=F("el-button");return r(),d("div",{class:"test",onMouseleave:s[0]||(s[0]=h=>p.leave())},[i("div",U,[I,i("span",null,[P,i("span",R,v(this.clockTime),1)]),a.errorUp?(r(),A(n,{key:0,title:"\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458",type:"error"})):b("",!0)]),i("div",z,[j,$,H,i("div",O,[(r(!0),d(C,null,S(this.topics,(h,f)=>(r(),d("div",{key:f},[i("p",J,v(f+1)+"."+v(h.topic),1),h.image?(r(),d("img",{key:0,src:h.image,alt:""},null,8,G)):b("",!0),h.type==="input"?(r(),A(e,{key:1,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"})):b("",!0),h.type==="radio"?(r(),d("div",K,[(r(!0),d(C,null,S(h.option,(_,y)=>(r(),d("p",{key:y},[g(t,{modelValue:this.radio[f+1],"onUpdate:modelValue":T=>this.radio[f+1]=T,label:_},{default:B(()=>[E(v(_),1)]),_:2},1032,["modelValue","onUpdate:modelValue","label"])]))),128))])):b("",!0),h.type==="checkbox"?(r(),d("div",Q,[(r(!0),d(C,null,S(h.option,(_,y)=>(r(),A(m,{modelValue:a.checkList[f+1],"onUpdate:modelValue":T=>a.checkList[f+1]=T,key:y},{default:B(()=>[i("p",null,[g(c,{label:_},{default:B(()=>[E(v(_),1)]),_:2},1032,["label"])])]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))])):b("",!0),h.type==="textarea"?(r(),d("div",W,[g(e,{type:"textarea",rows:2,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:a.textarea[f+1],"onUpdate:modelValue":_=>a.textarea[f+1]=_},null,8,["modelValue","onUpdate:modelValue"])])):b("",!0)]))),128))]),g(k,{type:"primary",onClick:this.lookRadio},{default:B(()=>[X]),_:1},8,["onClick"])])],32)}var se=q(M,[["render",Y]]);export{se as default};
