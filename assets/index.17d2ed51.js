import{_ as p,a as u}from"./index.482c706a.js";import{a as m,c as f}from"./gxf.cead0347.js";import{g as h,a as k}from"./hjr.7a575714.js";import{r as v,o as x,c as T,a as e,t as a,b as l,w as d,p as w,q as b,l as _}from"./vendor.166a2bad.js";import"./request.8e63e585.js";u(()=>import("./tracking-min.a74d1bbb.js"),[]);u(()=>import("./face-min.4fb9862a.js"),[]);const S={components:{},name:"testTracking",data(){return{count:0,isdetected:"\u8BF7\u60A8\u4FDD\u6301\u8138\u90E8\u5728\u753B\u9762\u4E2D\u592E",loding:"",access_token:"",dialogVisible:!1,fullscreenLoading:!1,Routerdata:[],datalist:[],TestResultData:[],AppData:[]}},methods:{initTracker(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(this.getMediaStreamSuccess).catch(this.getMediaStreamError),this.context=this.canvas.getContext("2d"),this.tracker=new tracking.ObjectTracker("face"),this.tracker.setInitialScale(4),this.tracker.setStepSize(2),this.tracker.setEdgesDensity(.1),this.tracker.on("track",t=>{this.onTracked(t)}),this.trackerTask=tracking.track(this.video,this.tracker)},onTracked(t){if(this.count>=21){this.onStopTracking();return}this.context.clearRect(0,0,this.canvas.width,this.canvas.height),t.data.forEach(s=>{this.context.lineWidth=1,this.context.strokeStyle="#a64ceb",this.context.strokeRect(s.x,s.y,s.width,s.height),this.context.font="11px Helvetica",this.context.fillStyle="#fff",t.data.length>0&&this.count<=20?(this.count<0&&(this.count=0),this.count+=1,this.count>20&&(this.isdetected="\u5DF2\u68C0\u6D4B\u5230\u4EBA\u8138\uFF0C\u6B63\u5728\u8BC6\u522B",this.getPhoto())):(this.count-=1,this.count<0&&(this.isdetected="\u8BF7\u60A8\u4FDD\u6301\u8138\u90E8\u5728\u753B\u9762\u4E2D\u592E"))}),this.context.fillText(this.isdetected,100,30)},onStopTracking(){this.trackerTask.stop(),this.video.pause(),this.video.srcObject=null,window.stream.getTracks().forEach(t=>t.stop())},getPhoto(){console.log(this.isdetected),this.isdetected="",this.context.clearRect(0,0,this.canvas.width,this.canvas.height);let t=document.getElementById("video");this.context.drawImage(t,0,0,this.canvas.width,this.canvas.height);let s=this.canvas.toDataURL("image/jpeg",1);this.imgbase64=s.replace(/^data:image\/\w+;base64,/,""),this.postFace()},getToken(){m().then(t=>{this.access_token=t.access_token,console.log(t),console.log(this.access_token)})},postFace(){const t=this.$loading({lock:!0,text:"\u6B63\u5728\u8BC6\u522B\u4E2D,\u8BF7\u7A0D\u540E................",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{t.close()},2e3),f({access_token:this.access_token,img:this.imgbase64,urls:this.datalist}).then(s=>{if(console.log(s),this.loding="",s.error_code!==0)s.error_code==223120&&(this.video.srcObject=null,window.stream.getTracks().forEach(n=>n.stop()),this.$message({message:"\u68C0\u6D4B\u5931\u8D25\uFF0C\u8BF7\u4ECE\u65B0\u68C0\u6D4B",type:"warning"}),this.count=0,this.onStopTracking());else if(s.result.score>80){if(this.$message({message:"\u4EBA\u8138\u8BC6\u522B\u6210\u529F,3\u79D2\u540E\u8DF3\u8F6C",type:"success"}),this.datalist.num===2){this.$message({message:"\u60A8\u5DF2\u53C2\u52A0\u8FC7\u672C\u6B21\u8003\u8BD5\uFF01",type:"warning"});return}setTimeout(()=>{localStorage.setItem("wxToken","1"),this.$router.push({path:"/",query:this.Routerdata})},3e3)}else this.$message({message:"\u4EBA\u8138\u8BC6\u522B\u5931\u8D25\uFF0C\u672A\u627E\u5230",type:"warning"}),this.count=0,this.onStopTracking()})},getMediaStreamSuccess(t){window.stream=t,this.video.srcObject=t},getMediaStreamError(t){alert("\u89C6\u9891\u5A92\u4F53\u6D41\u83B7\u53D6\u9519\u8BEF"+t)},fan(){this.$router.push("/login")}},mounted(){this.dialogVisible=!0,this.video=this.$refs.videoDom,this.canvas=this.$refs.canvasDOM,window.addEventListener("beforeunload",localStorage.setItem("leaves",0),!1),this.getToken(),this.$route.fullPath,this.Routerdata=this.$route.query,h({a:1,b:2}).then(t=>{let s=t.filter((n,g)=>this.Routerdata.phone===n.phone);this.datalist=s}),k().then(t=>{this.TestResultData=t}),h().then(t=>{this.AppData=t})},destroyed(){}},o=t=>(w("data-v-d2ef18e0"),t=t(),b(),t),y={class:"box"},R={class:"aut"},D=o(()=>e("h2",null,"\u8BF7\u5C06\u8138\u90E8\u5BF9\u51C6\u8BC6\u522B\u6846",-1)),E={class:"user-icon"},I={width:"320",height:"240",ref:"videoDom",id:"video",preload:"",autoplay:"",loop:"",muted:""},C={width:"630",height:"490",ref:"canvasDOM"},O=_("\u53BB\u8003\u8BD5"),$=_("\u8FD4\u56DE\u767B\u5F55"),A={class:"shenfen"},M=o(()=>e("br",null,null,-1)),V=o(()=>e("br",null,null,-1)),L=o(()=>e("br",null,null,-1)),P=o(()=>e("div",{class:"soild_text_one"},[e("fieldset",null,[e("legend",null,"\u6CE8\u610F\u4E8B\u9879"),e("p",null,"1.\u4E0D\u5141\u8BB8\u5207\u5C4F\u3001\u5237\u65B0\u9875\u9762,\u6570\u91CF\u8FBE\u52303\u6B21\u5C06\u4F1A\u5F3A\u5236\u63D0\u4EA4\u8BD5\u5377"),e("p",null,"2.\u4E0D\u5141\u8BB8\u4EA4\u5934\u63A5\u8033"),e("p",null,"3.\u9075\u5B88\u8003\u573A\u7EAA\u5F8B")])],-1));function j(t,s,n,g,i,c){const r=v("el-button");return x(),T("div",y,[e("div",R,[D,e("div",E,[e("video",I,null,512),e("canvas",C,null,512)]),e("div",null,a(i.loding),1),l(r,{class:"button",type:"warning",onClick:c.initTracker},{default:d(()=>[O]),_:1},8,["onClick"]),l(r,{type:"primary",class:"button1",onClick:c.fan},{default:d(()=>[$]),_:1},8,["onClick"]),e("div",A,[e("p",null,"\u59D3\u540D\uFF1A"+a(i.Routerdata.username),1),M,e("p",null,"\u7535\u8BDD\uFF1A"+a(i.Routerdata.phone),1),V,e("p",null,"\u73ED\u7EA7\uFF1A"+a(i.Routerdata.ClassA),1),L,e("p",null,"\u8003\u751F\u53F7\uFF1A"+a(i.Routerdata.candidate),1)])]),P])}var z=p(S,[["render",j],["__scopeId","data-v-d2ef18e0"]]);export{z as default};
