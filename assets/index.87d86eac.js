import{_ as h}from"./index.482c706a.js";import{s as u,r as p,o as a,c as o,a as s,b as _,w as m,F as l,k as d,v as n,E as f,t as r,l as v}from"./vendor.166a2bad.js";var g="https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn_class2104a/img/\u5FAE\u4FE1\u56FE\u7247_20220322154837.png";const b=u({name:"",data(){return{msg:"\u6D4B\u8BD5",setId:0,ableflag:!1,list:[{tit:"\u4E00\u7B49\u5956",id:0},{tit:"\u7279\u7B49\u5956",id:1},{tit:"\u4E00\u7B49\u5956",id:2},{tit:"\u4E8C\u7B49\u5956",id:3},{tit:"\u4E8C\u7B49\u5956",id:4},{tit:"\u4E09\u7B49\u5956",id:5},{tit:"\u4E09\u7B49\u5956",id:6},{tit:"\u4E09\u7B49\u5956",id:7}]}},methods:{ck(){let{phone:t,upTime:i}=this.$route.query;this.$router.push({path:"/score",query:{upTime:i,phone:t}})},cj(){this.ableflag=!0;let t=setInterval(()=>{this.setId=this.setId+1,this.setId>7&&(this.setId=0)},100);setTimeout(()=>{clearInterval(t),this.ableflag=!1,this.open()},Math.floor(Math.random()*2500)+500)},open(){f.alert("\u606D\u559C\u60A8\u62BD\u4E2D"+this.list[this.setId].tit,"\u62BD\u5956\u7ED3\u679C",{confirmButtonText:"OK",callback:function(t,i){}})}}}),k={class:"End"},I={class:"main"},y=s("h2",null,"\u63D0\u4EA4\u6210\u529F,\u8BF7\u7B49\u5F85\u4EBA\u5DE5\u8BC4\u5206",-1),C=v("\u67E5\u770B\u6210\u7EE9"),j=s("div",{class:"logo-box"},[s("img",{src:g,alt:""})],-1),$={class:"chojiang"},B=["disabled"],T=s("p",{class:"p-choujiang"},"\u606D\u559C\u60A8\u83B7\u5F97 N \u6B21\u62BD\u5956\u673A\u4F1A\uFF01",-1);function E(t,i,N,M,V,q){const c=p("el-button");return a(),o("div",k,[s("div",I,[y,_(c,{type:"primary",onClick:t.ck},{default:m(()=>[C]),_:1},8,["onClick"]),j,s("div",$,[(a(!0),o(l,null,d(t.list.slice(0,4),e=>(a(),o("div",{class:n(t.setId===e.id?"one active":"one"),key:e},r(e.tit),3))),128)),s("button",{class:n(t.ableflag?"one active":"one"),onClick:i[0]||(i[0]=(...e)=>t.cj&&t.cj(...e)),disabled:t.ableflag}," \u7ACB\u5373\u62BD\u5956 ",10,B),(a(!0),o(l,null,d(t.list.slice(4,8),e=>(a(),o("div",{class:n(t.setId===e.id?"one active":"one"),key:e},r(e.tit),3))),128))]),T])])}var F=h(b,[["render",E]]);export{F as default};
