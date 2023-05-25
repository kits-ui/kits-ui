import{V as i,_,r as f,o as k,c as g,a as h,w as F,b as l,d as s,e as b}from"./app.ee2f73f2.js";const{defineComponent:R}=i,w=R({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:n,createTextVNode:u,withCtx:A,toDisplayString:d,createElementVNode:a,Fragment:c,openBlock:r,createElementBlock:D}=i,B={class:"py-4"};function m(o,t){const E=e("k-auth-code"),p=e("k-button");return r(),D(c,null,[n(E,{ref:"authCodeRef",code:o.authCode,"onUpdate:code":t[0]||(t[0]=y=>o.authCode=y)},null,8,["code"]),a("div",B,[n(p,{type:"insert",onClick:o.reset},{default:A(()=>[u("重新生成")]),_:1},8,["onClick"]),a("div",null,d(o.authCode),1)])],64)}const{reactive:T,ref:C,watch:v}=i;return{render:m,...{data(){return{}},setup(){const o=C(""),t=C(null);return v(o,async(p,y)=>{console.log({n:p,o:y})}),{authCode:o,authCodeRef:t,reset:()=>{t.value.createCodeHandle()}}}}}}()}}),O=JSON.parse('{"title":"AuthCode 验证码","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"AuthCode 属性","slug":"authcode-属性","link":"#authcode-属性","children":[]}],"relativePath":"components/authCode/index.md"}'),x=l("h1",{id:"authcode-验证码",tabindex:"-1"},[s("AuthCode 验证码 "),l("a",{class:"header-anchor",href:"#authcode-验证码","aria-hidden":"true"},"#")],-1),V=l("p",null,"常用验证码生成",-1),N=l("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),H=l("p",null,"基础的函数用法",-1),I=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-auth-code"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"ref"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"authCodeRef"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model:code"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"authCode"'),l("span",{style:{color:"#6E6A86"}},"></"),l("span",{style:{color:"#9CCFD8"}},"k-auth-code"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"class"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"py-4"'),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-button"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"type"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"insert"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@click"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"reset"'),l("span",{style:{color:"#6E6A86"}},">"),l("span",{style:{color:"#E0DEF4"}},"重新生成"),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"k-button"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">"),l("span",{style:{color:"#E0DEF4"}},"{{ authCode }}"),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"ts"'),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," 在md中好像 setup语法糖不生效")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," import { reactive, ref, watch } from 'vue';")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," const authCode = ref('');")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," const authCodeRef = ref(null)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," // watch(")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," //   () => authCode.value,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," //   (n, o) => {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," //     console.log({ n, o });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," //   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," // );")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," const onInput = (e) => {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   console.log(e);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   // authCode.value = e;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," const reset = ()=>{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   console.log(authCodeRef);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   authCodeRef.value.createCodeHandle()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"import "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"reactive"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"ref"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"watch"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#3E8FB0"}}," from "),l("span",{style:{color:"#F6C177"}},"'vue'"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"export default "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"  "),l("span",{style:{color:"#EA9A97"}},"data"),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    return "),l("span",{style:{color:"#908CAA"}},"{};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"  "),l("span",{style:{color:"#EA9A97"}},"setup"),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    const "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"authCode"),l("span",{style:{color:"#3E8FB0"}}," = "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#F6C177"}},"''"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    const "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"authCodeRef"),l("span",{style:{color:"#3E8FB0"}}," = "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#EA9A97"}},"null"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    "),l("span",{style:{color:"#EA9A97"}},"watch"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"authCode"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#3E8FB0"}}," async "),l("span",{style:{color:"#908CAA"}},"("),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"n"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"o"),l("span",{style:{color:"#908CAA"}},")"),l("span",{style:{color:"#3E8FB0"}}," => "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"      "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"console"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"log"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"n"),l("span",{style:{color:"#908CAA"}},","),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"o"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    const "),l("span",{style:{color:"#EA9A97","font-style":"italic"}},"reset"),l("span",{style:{color:"#3E8FB0"}}," = "),l("span",{style:{color:"#908CAA"}},"()"),l("span",{style:{color:"#3E8FB0"}}," => "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"      "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"authCodeRef"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"createCodeHandle"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    "),l("span",{style:{color:"#908CAA"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    return "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"      "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"authCode"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"      "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"authCodeRef"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"      "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"reset"),l("span",{style:{color:"#908CAA"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"    "),l("span",{style:{color:"#908CAA"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"  "),l("span",{style:{color:"#908CAA"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-auth-code"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"ref"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"authCodeRef"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model:code"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"authCode"'),l("span",{style:{color:"#9893A5"}},"></"),l("span",{style:{color:"#56949F"}},"k-auth-code"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"class"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"py-4"'),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-button"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"type"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"insert"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"@click"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"reset"'),l("span",{style:{color:"#9893A5"}},">"),l("span",{style:{color:"#575279"}},"重新生成"),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"k-button"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">"),l("span",{style:{color:"#575279"}},"{{ authCode }}"),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"ts"'),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," 在md中好像 setup语法糖不生效")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," import { reactive, ref, watch } from 'vue';")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," const authCode = ref('');")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," const authCodeRef = ref(null)")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," // watch(")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," //   () => authCode.value,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," //   (n, o) => {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," //     console.log({ n, o });")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," //   },")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," // );")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," const onInput = (e) => {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   console.log(e);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   // authCode.value = e;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," };")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," const reset = ()=>{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   console.log(authCodeRef);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   authCodeRef.value.createCodeHandle()")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"import "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"reactive"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"ref"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"watch"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#286983"}}," from "),l("span",{style:{color:"#EA9D34"}},"'vue'"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"export default "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"  "),l("span",{style:{color:"#D7827E"}},"data"),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    return "),l("span",{style:{color:"#797593"}},"{};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"  "),l("span",{style:{color:"#D7827E"}},"setup"),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    const "),l("span",{style:{color:"#575279","font-style":"italic"}},"authCode"),l("span",{style:{color:"#286983"}}," = "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#EA9D34"}},"''"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    const "),l("span",{style:{color:"#575279","font-style":"italic"}},"authCodeRef"),l("span",{style:{color:"#286983"}}," = "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#D7827E"}},"null"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    "),l("span",{style:{color:"#D7827E"}},"watch"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#575279","font-style":"italic"}},"authCode"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#286983"}}," async "),l("span",{style:{color:"#797593"}},"("),l("span",{style:{color:"#907AA9","font-style":"italic"}},"n"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"o"),l("span",{style:{color:"#797593"}},")"),l("span",{style:{color:"#286983"}}," => "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"      "),l("span",{style:{color:"#575279","font-style":"italic"}},"console"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"log"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"n"),l("span",{style:{color:"#797593"}},","),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"o"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    const "),l("span",{style:{color:"#D7827E","font-style":"italic"}},"reset"),l("span",{style:{color:"#286983"}}," = "),l("span",{style:{color:"#797593"}},"()"),l("span",{style:{color:"#286983"}}," => "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"      "),l("span",{style:{color:"#575279","font-style":"italic"}},"authCodeRef"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"createCodeHandle"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    "),l("span",{style:{color:"#797593"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    return "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"      "),l("span",{style:{color:"#575279","font-style":"italic"}},"authCode"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"      "),l("span",{style:{color:"#575279","font-style":"italic"}},"authCodeRef"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"      "),l("span",{style:{color:"#575279","font-style":"italic"}},"reset"),l("span",{style:{color:"#797593"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"    "),l("span",{style:{color:"#797593"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"  "),l("span",{style:{color:"#797593"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),S=b('<hr><h1 id="authcode-api" tabindex="-1">AuthCode API <a class="header-anchor" href="#authcode-api" aria-hidden="true">#</a></h1><div class="vp-table_k"><table><thead><tr><th>方法名</th><th>说明</th><th>入参</th><th>出参</th><th></th></tr></thead><tbody><tr><td>createCodeHandle</td><td>实例方法 生产验证码</td><td>-</td><td>-</td><td></td></tr></tbody></table></div><h2 id="authcode-属性" tabindex="-1">AuthCode 属性 <a class="header-anchor" href="#authcode-属性" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td><code>number</code></td><td>-</td><td>36</td></tr><tr><td>width</td><td>宽度</td><td><code>number</code></td><td>-</td><td>90</td></tr><tr><td>count</td><td>随机生成验证码数量</td><td><code>number</code></td><td>-</td><td>4</td></tr><tr><td>codes</td><td>自定义生成的验证码</td><td><code>array</code></td><td>-</td><td>[]</td></tr></tbody></table></div>',5);function $(e,n,u,A,d,a){const c=f("render-demo-0"),r=f("demo");return k(),g("div",null,[x,V,N,H,h(r,{customClass:"undefined",sourceCode:`<template>
  <k-auth-code ref="authCodeRef" v-model:code="authCode"></k-auth-code>
  <div class="py-4">
    <k-button type="insert" @click="reset">重新生成</k-button>
    <div>{{ authCode }}</div>
  </div>
</template>
<script lang="ts">
// 在md中好像 setup语法糖不生效
// import { reactive, ref, watch } from 'vue';
// const authCode = ref('');
// const authCodeRef = ref(null)
// // watch(
// //   () => authCode.value,
// //   (n, o) => {
// //     console.log({ n, o });
// //   },
// // );
// const onInput = (e) => {
//   console.log(e);
//   // authCode.value = e;
// };
// const reset = ()=>{
//   console.log(authCodeRef);
//   authCodeRef.value.createCodeHandle()
// }
import { reactive, ref, watch } from 'vue';
export default {
  data() {
    return {};
  },
  setup() {
    const authCode = ref('');
    const authCodeRef = ref(null);
    watch(authCode, async (n, o) => {
      console.log({ n, o });
    });
    const reset = () => {
      authCodeRef.value.createCodeHandle();
    };
    return {
      authCode,
      authCodeRef,
      reset,
    };
  },
};
<\/script>
`},{highlight:F(()=>[I]),default:F(()=>[h(c)]),_:1}),S])}const U=_(w,[["render",$]]);export{O as __pageData,U as default};
