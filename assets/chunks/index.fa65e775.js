import{d as st,l as pt,B as gt,o as M,c as C,r as mt,y as B,z as rt,U as $t,a as yt,D as _,e as vt,T as Mt,a4 as it,a5 as Q,ap as wt,aq as St,x as D,F as bt,J as kt,n as P,b as Y,A as et,a9 as Dt,a6 as _t}from"./framework.d383e008.js";var Me=st({__name:"index",props:{dir:{type:String,default:"auto"},lang:{type:String,default:""},body:{type:String,default:"你好，我是跳了两年半的坤坤，请多指教"},tag:{type:[String,Number],default:new Date().getTime()},icon:{type:String,default:"https://suantaichaorou.top/logo.png"}},setup(s){const u=s;pt(()=>{window.Notification?(console.log(Notification.permission),Notification.permission=="granted"?console.log("允许通知"):Notification.permission!="denied"&&(console.log("需要通知权限"),Notification.requestPermission(c=>{console.log(c)}))):console.error("浏览器不支持Notification")});function l(c){if(Notification.permission=="granted"){let f=new Notification("收到一条新消息",{dir:c.dir,lang:c.lang,body:c.body,tag:"Data.tag",icon:c.icon,renotify:!0});f.onclick=function(){$t(()=>{setTimeout(()=>{},500)}),window.focus(),f.close()},console.log("浏览器通知！")}else Notification.permission=="denied"?alert("您禁止了通知功能"):console.log("声音通知！")}return(c,f)=>{const y=gt("k-button");return M(),C("div",{onClick:f[0]||(f[0]=p=>l(u))},[c.$slots.default?mt(c.$slots,"default",{key:0}):(M(),B(y,{key:1,type:"insert"},{default:rt(()=>[yt("默认按钮")]),_:1}))])}}}),I=(s,u)=>{const l=s.__vccOpts||s;for(const[c,f]of u)l[c]=f;return l},xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var at={exports:{}};(function(s,u){(function(l,c){s.exports=c()})(xt,function(){var l=1e3,c=6e4,f=36e5,y="millisecond",p="second",S="minute",x="hour",b="day",U="week",k="month",K="quarter",T="year",j="date",X="Invalid Date",lt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,dt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ft={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},R=function(r,n,t){var i=String(r);return!i||i.length>=n?r:""+Array(n+1-i.length).join(t)+r},ht={s:R,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+R(i,2,"0")+":"+R(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,k),o=t-e<0,a=n.clone().add(i+(o?-1:1),k);return+(-(i+(t-e)/(o?e-a:a-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:k,y:T,w:U,d:b,D:j,h:x,m:S,s:p,ms:y,Q:K}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},A="en",N={};N[A]=ft;var Z=function(r){return r instanceof E},F=function r(n,t,i){var e;if(!n)return A;if(typeof n=="string"){var o=n.toLowerCase();N[o]&&(e=o),t&&(N[o]=t,e=o);var a=n.split("-");if(!e&&a.length>1)return r(a[0])}else{var d=n.name;N[d]=n,e=d}return!i&&e&&(A=e),e||!i&&A},$=function(r,n){if(Z(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new E(t)},h=ht;h.l=F,h.i=Z,h.w=function(r,n){return $(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var E=function(){function r(t){this.$L=F(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,o=i.utc;if(e===null)return new Date(NaN);if(h.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(lt);if(a){var d=a[2]-1||0,m=(a[7]||"0").substring(0,3);return o?new Date(Date.UTC(a[1],d,a[3]||1,a[4]||0,a[5]||0,a[6]||0,m)):new Date(a[1],d,a[3]||1,a[4]||0,a[5]||0,a[6]||0,m)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return h},n.isValid=function(){return this.$d.toString()!==X},n.isSame=function(t,i){var e=$(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return $(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<$(t)},n.$g=function(t,i,e){return h.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,o=!!h.u(i)||i,a=h.p(t),d=function(V,w){var L=h.w(e.$u?Date.UTC(e.$y,w,V):new Date(e.$y,w,V),e);return o?L:L.endOf(b)},m=function(V,w){return h.w(e.toDate()[V].apply(e.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(w)),e)},g=this.$W,v=this.$M,z=this.$D,O="set"+(this.$u?"UTC":"");switch(a){case T:return o?d(1,0):d(31,11);case k:return o?d(1,v):d(0,v+1);case U:var H=this.$locale().weekStart||0,W=(g<H?g+7:g)-H;return d(o?z-W:z+(6-W),v);case b:case j:return m(O+"Hours",0);case x:return m(O+"Minutes",1);case S:return m(O+"Seconds",2);case p:return m(O+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,o=h.p(t),a="set"+(this.$u?"UTC":""),d=(e={},e[b]=a+"Date",e[j]=a+"Date",e[k]=a+"Month",e[T]=a+"FullYear",e[x]=a+"Hours",e[S]=a+"Minutes",e[p]=a+"Seconds",e[y]=a+"Milliseconds",e)[o],m=o===b?this.$D+(i-this.$W):i;if(o===k||o===T){var g=this.clone().set(j,1);g.$d[d](m),g.init(),this.$d=g.set(j,Math.min(this.$D,g.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[h.p(t)]()},n.add=function(t,i){var e,o=this;t=Number(t);var a=h.p(i),d=function(v){var z=$(o);return h.w(z.date(z.date()+Math.round(v*t)),o)};if(a===k)return this.set(k,this.$M+t);if(a===T)return this.set(T,this.$y+t);if(a===b)return d(1);if(a===U)return d(7);var m=(e={},e[S]=c,e[x]=f,e[p]=l,e)[a]||1,g=this.$d.getTime()+t*m;return h.w(g,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||X;var o=t||"YYYY-MM-DDTHH:mm:ssZ",a=h.z(this),d=this.$H,m=this.$m,g=this.$M,v=e.weekdays,z=e.months,O=function(w,L,q,J){return w&&(w[L]||w(i,o))||q[L].slice(0,J)},H=function(w){return h.s(d%12||12,w,"0")},W=e.meridiem||function(w,L,q){var J=w<12?"AM":"PM";return q?J.toLowerCase():J},V={YY:String(this.$y).slice(-2),YYYY:this.$y,M:g+1,MM:h.s(g+1,2,"0"),MMM:O(e.monthsShort,g,z,3),MMMM:O(z,g),D:this.$D,DD:h.s(this.$D,2,"0"),d:String(this.$W),dd:O(e.weekdaysMin,this.$W,v,2),ddd:O(e.weekdaysShort,this.$W,v,3),dddd:v[this.$W],H:String(d),HH:h.s(d,2,"0"),h:H(1),hh:H(2),a:W(d,m,!0),A:W(d,m,!1),m:String(m),mm:h.s(m,2,"0"),s:String(this.$s),ss:h.s(this.$s,2,"0"),SSS:h.s(this.$ms,3,"0"),Z:a};return o.replace(dt,function(w,L){return L||V[w]||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var o,a=h.p(i),d=$(t),m=(d.utcOffset()-this.utcOffset())*c,g=this-d,v=h.m(this,d);return v=(o={},o[T]=v/12,o[k]=v,o[K]=v/3,o[U]=(g-m)/6048e5,o[b]=(g-m)/864e5,o[x]=g/f,o[S]=g/c,o[p]=g/l,o)[a]||g,e?v:h.a(v)},n.daysInMonth=function(){return this.endOf(k).$D},n.$locale=function(){return N[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),o=F(t,i,!0);return o&&(e.$L=o),e},n.clone=function(){return h.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),tt=E.prototype;return $.prototype=tt,[["$ms",y],["$s",p],["$m",S],["$H",x],["$W",b],["$M",k],["$y",T],["$D",j]].forEach(function(r){tt[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),$.extend=function(r,n){return r.$i||(r(n,E,$),r.$i=!0),$},$.locale=F,$.isDayjs=Z,$.unix=function(r){return $(1e3*r)},$.en=N[A],$.Ls=N,$.p={},$})})(at);var Ct=at.exports;const we=Ot(Ct),Tt=_("svg",{class:"loading-rotate",xmlns:"http://www.w3.org/2000/svg",style:"margin: auto;display: block;shape-rendering: auto;",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},[_("circle",{cx:"50",cy:"50",r:"32","stroke-width":"8",stroke:"currentColor","stroke-dasharray":"50.26548245743669 50.26548245743669",fill:"none","stroke-linecap":"round"},null)]);function zt(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!St(s)}G.props={modelValue:{type:[Boolean,Object],required:!0},closeOnClick:{type:Boolean,default:!1},text:{type:String,default:"loading..."},customClass:{type:String,default:""},background:{type:String,default:"rgba(0, 0, 0, 0.38)"},color:{type:String},mode:{type:String,default:"insert"},zIndex:{type:Number,default:100}};G.inheritAttrs=!0;G.emits=["update:modelValue","leave"];const ot="k-loading",ut=`${ot}_ref`;function G(s,u){const{slots:l,emit:c}=u,f=l.default,y=vt(s.modelValue),p=()=>{s.closeOnClick&&(y.value=!1,c("update:modelValue",y.value))},S=_(Mt,{name:"loading",appear:!0,mode:"out-in",onLeave:()=>c("leave")},{default:()=>{var x,b;return[y.value&&_("div",{class:`${ot} ${s.customClass}`,onClick:p,style:{background:s.background,zIndex:s.zIndex,color:s.color}},[_("div",{class:"loading-box"},[_("div",{class:"loading-icon"},[((x=l.icon)==null?void 0:x.call(l))??Tt]),_("div",{class:"loading-text"},[((b=l.text)==null?void 0:b.call(l))??s.text])])])]}});return f?s.mode==="insert"?Nt(S,f):_("div",{class:ut},[f(),S]):_(it,{to:"body"},zt(S)?S:{default:()=>[S]})}function Lt(s,u){const l=Q(s.type,s.props,u),{children:c,shapeFlag:f,...y}=s;return Object.assign(l,y),l}function Nt(s,u){const l=u(),c=l[0],f=c.children;if(c.props||(c.props={}),c.props.class=((c.props.class||"")+" "+ut).trim(),typeof f=="string"){const y=[Q(wt,f),s];return[Lt(c,y),...l.slice(1)]}return Array.isArray(f)&&f.push(s),l}var nt;(nt=globalThis.document)==null||nt.createElement("div");const jt={},Vt={id:"icon-close",viewBox:"0 0 1024 1024"},Bt=D("path",{d:"M512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448-200.96 448-448 448z m0-831.713c-211.584 0-383.713 172.129-383.713 383.713 0 211.552 172.129 383.713 383.713 383.713 211.552 0 383.713-172.16 383.713-383.713 0-211.584-172.161-383.713-383.713-383.713z m45.055 385.09l138.368-136.865c12.576-12.416 12.673-32.672 0.256-45.248s-32.704-12.673-45.248-0.256l-138.56 137.024-136.448-136.864c-12.513-12.513-32.735-12.577-45.248-0.064-12.513 12.48-12.544 32.735-0.064 45.248l136.256 136.672L328.99 648.928c-12.577 12.447-12.673 32.672-0.257 45.248a31.886 31.886 0 0 0 22.752 9.504c8.128 0 16.256-3.103 22.497-9.248l137.567-136.064 138.688 139.137c6.24 6.271 14.432 9.407 22.657 9.407a31.937 31.937 0 0 0 22.591-9.344c12.513-12.48 12.544-32.704 0.064-45.248L557.055 513.376z"},null,-1),At=[Bt];function Ht(s,u){return M(),C("svg",Vt,At)}var Wt=I(jt,[["render",Ht]]);const Yt={},Qt={id:"icon-success",viewBox:"0 0 1024 1024"},It=D("path",{d:"M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m0 73.142857C323.486476 170.666667 170.666667 323.486476 170.666667 512s152.81981 341.333333 341.333333 341.333333 341.333333-152.81981 341.333333-341.333333S700.513524 170.666667 512 170.666667z m193.194667 145.188571l52.467809 50.956191-310.662095 319.683047-156.379429-162.230857 52.662858-50.761143 103.936 107.812572 257.974857-265.45981z","p-id":"2960"},null,-1),Ut=[It];function Ft(s,u){return M(),C("svg",Qt,Ut)}var Et=I(Yt,[["render",Ft]]);const Jt={},Rt={id:"icon-warning",viewBox:"0 0 1024 1024"},Zt=D("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z","p-id":"2514"},null,-1),qt=D("path",{d:"M512 688m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z","p-id":"2515"},null,-1),Pt=D("path",{d:"M488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z","p-id":"2516"},null,-1),Gt=[Zt,qt,Pt];function Kt(s,u){return M(),C("svg",Rt,Gt)}var Xt=I(Jt,[["render",Kt]]);const te={},ee={id:"icon-error",viewBox:"0 0 1024 1024"},ne=D("path",{d:"M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m0 73.142857C323.486476 170.666667 170.666667 323.486476 170.666667 512s152.81981 341.333333 341.333333 341.333333 341.333333-152.81981 341.333333-341.333333S700.513524 170.666667 512 170.666667z m129.29219 160.304762l51.736381 51.736381L563.687619 512l129.316571 129.29219-51.73638 51.736381L512 563.687619l-129.29219 129.316571-51.736381-51.73638L460.312381 512l-129.316571-129.26781 51.73638-51.73638L512 460.263619l129.26781-129.29219z","p-id":"2664"},null,-1),se=[ne];function re(s,u){return M(),C("svg",ee,se)}var ie=I(te,[["render",re]]);const ae={},oe={id:"icon-info",viewBox:"0 0 1024 1024"},ue=D("path",{d:"M512 97.52381c228.912762 0 414.47619 185.563429 414.47619 414.47619s-185.563429 414.47619-414.47619 414.47619S97.52381 740.912762 97.52381 512 283.087238 97.52381 512 97.52381z m0 73.142857C323.486476 170.666667 170.666667 323.486476 170.666667 512s152.81981 341.333333 341.333333 341.333333 341.333333-152.81981 341.333333-341.333333S700.513524 170.666667 512 170.666667z m36.571429 268.190476v292.571428h-73.142858V438.857143h73.142858z m0-121.904762v73.142857h-73.142858v-73.142857h73.142858z","p-id":"2812"},null,-1),ce=[ue];function le(s,u){return M(),C("svg",oe,ce)}var de=I(ae,[["render",le]]);const fe=["onClick"],he={class:"k-message-contents"},pe=["innerHTML"];var ge=st({__name:"message",props:{messageQueue:{type:Array,default:()=>[]}},setup(s){const u=f=>{const y="k-message";return{[y]:!0,[`${y}-${f}`]:!0}},l=f=>`icon-${f}`,c=f=>ct.remove(f);return(f,y)=>(M(),B(Dt,{name:"slide-fade"},{default:rt(()=>[(M(!0),C(bt,null,kt(s.messageQueue,p=>(M(),C("div",{key:p.id,class:P(u(p.type))},[p.duration===0||p.closeVisible?(M(),C("div",{key:0,class:"k-message-close-icon",onClick:S=>c(p)},[D("span",{class:P(l(p.type))},[_(Y(Wt))],2)],8,fe)):et("",!0),D("div",he,[D("span",{class:P(["k-message-icon",l(p.type)])},[p.type==="info"?(M(),B(Y(de),{key:0})):p.type==="success"?(M(),B(Y(Et),{key:1})):p.type==="warning"?(M(),B(Y(Xt),{key:2})):p.type==="error"?(M(),B(Y(ie),{key:3})):et("",!0)],2),D("span",{class:"k-message-content",innerHTML:p.content},null,8,pe)])],2))),128))]),_:1}))}});const me={type:"info",duration:3e3,closeVisible:!1};function $e(){const s=URL.createObjectURL(new Blob).toString();return URL.revokeObjectURL(s),s.substr(s.lastIndexOf("/")+1)}class ye{get messageQueue(){return this.wrapper.messageQueue}createWrapper(){return this.wrapper?this.wrapper:(this.wrapper=_t({data(){return{messageQueue:[]}},methods:{remove(u){this.messageQueue=this.messageQueue.filter(l=>l.id!==u.id)},append(u){this.messageQueue.push(u)}},render(){return Q(it,{to:"body"},[Q("div",{class:"k-message-wrapper"},[Q(ge,{messageQueue:this.messageQueue})])])}}).mount(document.createElement("div")),this.wrapper)}appendMessage(u){this.wrapper.append(u),u.duration!==0&&setTimeout(()=>{this.remove(u)},u.duration)}remove(u){this.wrapper.remove(u)}createMessage(u,l){return Object.assign({},me,{content:u,id:$e()},l)}success(u,l){const c=this.createMessage(u,{type:"success",...l});this.createWrapper(),this.appendMessage(c)}info(u,l){const c=this.createMessage(u,{type:"info",...l});this.createWrapper(),this.appendMessage(c)}error(u,l){const c=this.createMessage(u,{type:"error",...l});this.createWrapper(),this.appendMessage(c)}warning(u,l){const c=this.createMessage(u,{type:"warning",...l});this.createWrapper(),this.appendMessage(c)}}var ct=new ye;const Se=ct;export{we as a,G as b,I as c,Me as k,Se as o};