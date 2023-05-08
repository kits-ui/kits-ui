import{V as n,_ as B,r as F,o as m,c as _,a as C,w as D,b as o,d as s,e as k}from"./app.ce35dcd0.js";const{defineComponent:g}=n,b=g({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:a,withCtx:l,createVNode:e,openBlock:i,createElementBlock:u}=n,c={style:{width:"60%",display:"flex","justify-content":"space-around"}};function r(f,d){const p=a("k-button"),y=a("k-popover");return i(),u("div",c,[e(y,{position:"top",theme:"light"},{reference:l(()=>[e(p,null,{default:l(()=>[t("click button")]),_:1})]),default:l(()=>[t(" 这是click触发的气泡框,内容为测试内容..... ")]),_:1}),e(y,{position:"right",theme:"light",trigger:"hover"},{reference:l(()=>[e(p,null,{default:l(()=>[t("hover button")]),_:1})]),default:l(()=>[t(" 这是hover触发的气泡框,内容为测试内容..... ")]),_:1})])}const{defineComponent:h}=n,{ref:E}=n;return{render:r,...h({setup(f,{expose:d}){d();const A={value:E(new Date),onChange:v=>{console.log(v)},ref:E};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}})}}()}}),O=JSON.parse('{"title":"Popover 气泡框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"Popover 属性","slug":"popover-属性","link":"#popover-属性","children":[]},{"level":2,"title":"Popover 属性","slug":"popover-属性-1","link":"#popover-属性-1","children":[]}],"relativePath":"components/popover/index.md"}'),x=o("h1",{id:"popover-气泡框",tabindex:"-1"},[s("Popover 气泡框 "),o("a",{class:"header-anchor",href:"#popover-气泡框","aria-hidden":"true"},"#")],-1),w=o("p",null,"气泡框",-1),P=o("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),V=o("p",null,"基础的函数用法",-1),N=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"div"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"width: 60%;display: flex;justify-content:space-around;"'),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-popover"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"position"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"top"'),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"theme"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"light"'),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      这是click触发的气泡框,内容为测试内容.....")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"#"),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"reference"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"        "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#6E6A86"}},">"),o("span",{style:{color:"#E0DEF4"}},"click button"),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-popover"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-popover"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"position"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"right"'),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"theme"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"light"'),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"trigger"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"hover"'),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      这是hover触发的气泡框,内容为测试内容.....")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"#"),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"reference"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"        "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#6E6A86"}},">"),o("span",{style:{color:"#E0DEF4"}},"hover button"),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-popover"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"div"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"script"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"ts"'),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#3E8FB0"}},"import "),o("span",{style:{color:"#908CAA"}},"{"),o("span",{style:{color:"#3E8FB0"}}," "),o("span",{style:{color:"#E0DEF4","font-style":"italic"}},"ref"),o("span",{style:{color:"#3E8FB0"}}," "),o("span",{style:{color:"#908CAA"}},"}"),o("span",{style:{color:"#3E8FB0"}}," from "),o("span",{style:{color:"#F6C177"}},"'vue'"),o("span",{style:{color:"#908CAA"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#3E8FB0"}},"const"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#3E8FB0"}},"="),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#EA9A97"}},"ref"),o("span",{style:{color:"#E0DEF4"}},"("),o("span",{style:{color:"#3E8FB0"}},"new"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#EA9A97"}},"Date"),o("span",{style:{color:"#E0DEF4"}},"())"),o("span",{style:{color:"#908CAA"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#3E8FB0"}},"const"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#EA9A97","font-style":"italic"}},"onChange"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#3E8FB0"}},"="),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"("),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"val"),o("span",{style:{color:"#3E8FB0"}},":"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"{"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#EA9A97","font-style":"italic"}},"date"),o("span",{style:{color:"#3E8FB0"}},":"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#9CCFD8"}},"Date"),o("span",{style:{color:"#908CAA"}},";"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#EA9A97","font-style":"italic"}},"type"),o("span",{style:{color:"#3E8FB0"}},":"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#9CCFD8"}},"string"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"})"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#3E8FB0"}},"=>"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#E0DEF4","font-style":"italic"}},"console"),o("span",{style:{color:"#3E8FB0"}},"."),o("span",{style:{color:"#EA9A97"}},"log"),o("span",{style:{color:"#E0DEF4"}},"("),o("span",{style:{color:"#E0DEF4","font-style":"italic"}},"val"),o("span",{style:{color:"#E0DEF4"}},")"),o("span",{style:{color:"#908CAA"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#908CAA"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"script"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"})])]),o("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"div"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"width: 60%;display: flex;justify-content:space-around;"'),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-popover"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"position"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"top"'),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"theme"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"light"'),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      这是click触发的气泡框,内容为测试内容.....")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"#"),o("span",{style:{color:"#907AA9","font-style":"italic"}},"reference"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"        "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#9893A5"}},">"),o("span",{style:{color:"#575279"}},"click button"),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-popover"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-popover"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"position"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"right"'),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"theme"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"light"'),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"trigger"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"hover"'),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      这是hover触发的气泡框,内容为测试内容.....")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"#"),o("span",{style:{color:"#907AA9","font-style":"italic"}},"reference"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"        "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#9893A5"}},">"),o("span",{style:{color:"#575279"}},"hover button"),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-popover"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"div"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"script"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"ts"'),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#286983"}},"import "),o("span",{style:{color:"#797593"}},"{"),o("span",{style:{color:"#286983"}}," "),o("span",{style:{color:"#575279","font-style":"italic"}},"ref"),o("span",{style:{color:"#286983"}}," "),o("span",{style:{color:"#797593"}},"}"),o("span",{style:{color:"#286983"}}," from "),o("span",{style:{color:"#EA9D34"}},"'vue'"),o("span",{style:{color:"#797593"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#286983"}},"const"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#575279","font-style":"italic"}},"value"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#286983"}},"="),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#D7827E"}},"ref"),o("span",{style:{color:"#575279"}},"("),o("span",{style:{color:"#286983"}},"new"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#D7827E"}},"Date"),o("span",{style:{color:"#575279"}},"())"),o("span",{style:{color:"#797593"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#286983"}},"const"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#D7827E","font-style":"italic"}},"onChange"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#286983"}},"="),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"("),o("span",{style:{color:"#907AA9","font-style":"italic"}},"val"),o("span",{style:{color:"#286983"}},":"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"{"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#D7827E","font-style":"italic"}},"date"),o("span",{style:{color:"#286983"}},":"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#56949F"}},"Date"),o("span",{style:{color:"#797593"}},";"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#D7827E","font-style":"italic"}},"type"),o("span",{style:{color:"#286983"}},":"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#56949F"}},"string"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"})"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#286983"}},"=>"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#575279","font-style":"italic"}},"console"),o("span",{style:{color:"#286983"}},"."),o("span",{style:{color:"#D7827E"}},"log"),o("span",{style:{color:"#575279"}},"("),o("span",{style:{color:"#575279","font-style":"italic"}},"val"),o("span",{style:{color:"#575279"}},")"),o("span",{style:{color:"#797593"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#797593"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"script"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),j=k('<hr><h1 id="popover-api" tabindex="-1">Popover API <a class="header-anchor" href="#popover-api" aria-hidden="true">#</a></h1><h2 id="popover-属性" tabindex="-1">Popover 属性 <a class="header-anchor" href="#popover-属性" aria-hidden="true">#</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式</td><td><code>string</code></td><td>hover click-----</td><td>click</td></tr><tr><td>arrow</td><td>触发方式</td><td><code>boolean</code></td><td>----------------</td><td>true</td></tr><tr><td>width</td><td>触发方式</td><td><code>number</code></td><td>----------------</td><td>150</td></tr><tr><td>title</td><td>触发方式</td><td><code>string</code></td><td>----------------</td><td>-----</td></tr></tbody></table><h2 id="popover-属性-1" tabindex="-1">Popover 属性 <a class="header-anchor" href="#popover-属性-1" aria-hidden="true">#</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>自定义菜单内容</td><td>-</td></tr><tr><td>reference</td><td>触发 Popover 显示的元素内容</td><td>-</td></tr></tbody></table>',6);function S(t,a,l,e,i,u){const c=F("render-demo-0"),r=F("demo");return m(),_("div",null,[x,w,P,V,C(r,{customClass:"undefined",sourceCode:`<template>
  <div style="width: 60%;display: flex;justify-content:space-around;">
    <k-popover position="top" theme="light">
      这是click触发的气泡框,内容为测试内容.....
      <template #reference>
        <k-button>click button</k-button>
      </template>
    </k-popover>
    <k-popover position="right" theme="light" trigger="hover">
      这是hover触发的气泡框,内容为测试内容.....
      <template #reference>
        <k-button>hover button</k-button>
      </template>
    </k-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(new Date());
const onChange = (val: { date: Date; type: string }) => {
  console.log(val);
};
<\/script>
`},{highlight:D(()=>[N]),default:D(()=>[C(c)]),_:1}),j])}const I=B(b,[["render",S]]);export{O as __pageData,I as default};
