import{V as d,_ as D,r as f,o as h,c as _,a as E,w as A,b as o,d as s,e as B}from"./app.4dda22f3.js";const{defineComponent:k}=d,b=k({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:a,resolveComponent:l,withCtx:e,createVNode:n,openBlock:p,createElementBlock:r}=d,c={class:"k-popover-group"};function t(y,F){const i=l("k-button"),u=l("k-popconfirm");return p(),r("div",c,[n(u,{title:"是否确认要进行后续操作?",width:180},{reference:e(()=>[n(i,{type:"insert"},{default:e(()=>[a("操作")]),_:1})]),_:1})])}return{render:t,...{}}}(),"render-demo-1":function(){const{createTextVNode:a,resolveComponent:l,withCtx:e,createVNode:n,openBlock:p,createElementBlock:r}=d;function c(y,F){const i=l("k-button"),u=l("k-popconfirm");return p(),r("div",null,[n(u,{position:"bottom",cancelText:"close",confirmText:"ok",onCancel:y.cancel,onConfirm:y.confirm,title:"Are you sure you want to proceed with the subsequent operation?",width:300},{reference:e(()=>[n(i,{type:"insert"},{default:e(()=>[a("click ok")]),_:1})]),_:1},8,["onCancel","onConfirm"])])}const{defineComponent:t}=d;return{render:c,...t({setup(y,{expose:F}){F();const m={cancel:()=>{console.log("cancel")},confirm:()=>{console.log("confirm")}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}})}}()}}),j=JSON.parse('{"title":"Popconfirm 气泡确认框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"自定义内容","slug":"自定义内容","link":"#自定义内容","children":[]},{"level":2,"title":"Popconfirm 属性","slug":"popconfirm-属性","link":"#popconfirm-属性","children":[]},{"level":2,"title":"Popconfirm 事件","slug":"popconfirm-事件","link":"#popconfirm-事件","children":[]},{"level":2,"title":"Popconfirm 插槽","slug":"popconfirm-插槽","link":"#popconfirm-插槽","children":[]}],"relativePath":"components/popconfirm/index.md"}'),v=o("h1",{id:"popconfirm-气泡确认框",tabindex:"-1"},[s("Popconfirm 气泡确认框 "),o("a",{class:"header-anchor",href:"#popconfirm-气泡确认框","aria-hidden":"true"},"#")],-1),x=o("p",null,"常用于点击元素后进行一下操作时需要提醒用户的场景中",-1),g=o("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),w=o("p",null,"点击某个元素弹出一个简单的气泡确认框",-1),T=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"div"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"class"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"k-popover-group"'),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-popconfirm"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"title"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"是否确认要进行后续操作?"'),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},":width"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"180"'),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"#"),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"reference"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"        "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"type"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"insert"'),o("span",{style:{color:"#6E6A86"}},">"),o("span",{style:{color:"#E0DEF4"}},"操作"),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-popconfirm"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"div"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"})])]),o("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"div"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"class"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"k-popover-group"'),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-popconfirm"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"title"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"是否确认要进行后续操作?"'),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},":width"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"180"'),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"#"),o("span",{style:{color:"#907AA9","font-style":"italic"}},"reference"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"        "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"type"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"insert"'),o("span",{style:{color:"#9893A5"}},">"),o("span",{style:{color:"#575279"}},"操作"),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-popconfirm"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"div"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),V=o("hr",null,null,-1),N=o("h2",{id:"自定义内容",tabindex:"-1"},[s("自定义内容 "),o("a",{class:"header-anchor",href:"#自定义内容","aria-hidden":"true"},"#")],-1),P=o("p",null,"可以通过属性来自定义气泡框中提示内容以及按钮文本",-1),q=o("div",{class:"language-vue"},[o("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"div"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-popconfirm")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"position"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"bottom"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"cancelText"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"close"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"confirmText"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"ok"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@cancel"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"cancel"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@confirm"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"confirm"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"title"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"Are you sure you want to proceed with the subsequent operation?"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},":width"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"300"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"#"),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"reference"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"        "),o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"type"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"insert"'),o("span",{style:{color:"#6E6A86"}},">"),o("span",{style:{color:"#E0DEF4"}},"click ok"),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-button"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"      "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"    "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"k-popconfirm"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"div"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"template"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"<"),o("span",{style:{color:"#9CCFD8"}},"script"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),o("span",{style:{color:"#908CAA"}},"="),o("span",{style:{color:"#F6C177"}},'"ts"'),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#3E8FB0"}},"const"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#EA9A97","font-style":"italic"}},"cancel"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#3E8FB0"}},"="),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"()"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#3E8FB0"}},"=>"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#E0DEF4","font-style":"italic"}},"console"),o("span",{style:{color:"#3E8FB0"}},"."),o("span",{style:{color:"#EA9A97"}},"log"),o("span",{style:{color:"#E0DEF4"}},"("),o("span",{style:{color:"#F6C177"}},"'cancel'"),o("span",{style:{color:"#E0DEF4"}},")"),o("span",{style:{color:"#908CAA"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#908CAA"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#3E8FB0"}},"const"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#EA9A97","font-style":"italic"}},"confirm"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#3E8FB0"}},"="),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"()"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#3E8FB0"}},"=>"),o("span",{style:{color:"#E0DEF4"}}," "),o("span",{style:{color:"#908CAA"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#E0DEF4"}},"  "),o("span",{style:{color:"#E0DEF4","font-style":"italic"}},"console"),o("span",{style:{color:"#3E8FB0"}},"."),o("span",{style:{color:"#EA9A97"}},"log"),o("span",{style:{color:"#E0DEF4"}},"("),o("span",{style:{color:"#F6C177"}},"'confirm'"),o("span",{style:{color:"#E0DEF4"}},")"),o("span",{style:{color:"#908CAA"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#908CAA"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#6E6A86"}},"</"),o("span",{style:{color:"#9CCFD8"}},"script"),o("span",{style:{color:"#6E6A86"}},">")]),s(`
`),o("span",{class:"line"})])]),o("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"div"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-popconfirm")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"position"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"bottom"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"cancelText"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"close"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"confirmText"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"ok"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"@cancel"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"cancel"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"@confirm"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"confirm"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"title"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"Are you sure you want to proceed with the subsequent operation?"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#907AA9","font-style":"italic"}},":width"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"300"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"#"),o("span",{style:{color:"#907AA9","font-style":"italic"}},"reference"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"        "),o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"type"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"insert"'),o("span",{style:{color:"#9893A5"}},">"),o("span",{style:{color:"#575279"}},"click ok"),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-button"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"      "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"    "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"k-popconfirm"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"div"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"template"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"}),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"<"),o("span",{style:{color:"#56949F"}},"script"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),o("span",{style:{color:"#797593"}},"="),o("span",{style:{color:"#EA9D34"}},'"ts"'),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#286983"}},"const"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#D7827E","font-style":"italic"}},"cancel"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#286983"}},"="),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"()"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#286983"}},"=>"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#575279","font-style":"italic"}},"console"),o("span",{style:{color:"#286983"}},"."),o("span",{style:{color:"#D7827E"}},"log"),o("span",{style:{color:"#575279"}},"("),o("span",{style:{color:"#EA9D34"}},"'cancel'"),o("span",{style:{color:"#575279"}},")"),o("span",{style:{color:"#797593"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#797593"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#286983"}},"const"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#D7827E","font-style":"italic"}},"confirm"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#286983"}},"="),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"()"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#286983"}},"=>"),o("span",{style:{color:"#575279"}}," "),o("span",{style:{color:"#797593"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#575279"}},"  "),o("span",{style:{color:"#575279","font-style":"italic"}},"console"),o("span",{style:{color:"#286983"}},"."),o("span",{style:{color:"#D7827E"}},"log"),o("span",{style:{color:"#575279"}},"("),o("span",{style:{color:"#EA9D34"}},"'confirm'"),o("span",{style:{color:"#575279"}},")"),o("span",{style:{color:"#797593"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#797593"}},"};")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#9893A5"}},"</"),o("span",{style:{color:"#56949F"}},"script"),o("span",{style:{color:"#9893A5"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),S=B('<h1 id="popconfirm-api" tabindex="-1">Popconfirm API <a class="header-anchor" href="#popconfirm-api" aria-hidden="true">#</a></h1><h2 id="popconfirm-属性" tabindex="-1">Popconfirm 属性 <a class="header-anchor" href="#popconfirm-属性" aria-hidden="true">#</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>设置默认宽度</td><td><code>number</code></td><td>----------------</td><td>150</td></tr><tr><td>title</td><td>气泡确认框的内容</td><td><code>string</code></td><td>----------------</td><td>-----</td></tr><tr><td>cancelText</td><td>取消按钮文本</td><td><code>string</code></td><td>----------------</td><td>-----</td></tr><tr><td>confirmText</td><td>确认按钮文本</td><td><code>string</code></td><td>----------------</td><td>-----</td></tr></tbody></table><h2 id="popconfirm-事件" tabindex="-1">Popconfirm 事件 <a class="header-anchor" href="#popconfirm-事件" aria-hidden="true">#</a></h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>cancel</td><td>点击取消按钮触发</td><td><code>function</code></td><td>-----</td></tr><tr><td>confirm</td><td>点击确认按钮触发</td><td><code>function</code></td><td>-----</td></tr></tbody></table><h2 id="popconfirm-插槽" tabindex="-1">Popconfirm 插槽 <a class="header-anchor" href="#popconfirm-插槽" aria-hidden="true">#</a></h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>reference</td><td>触发 Popconfirm 显示的元素</td></tr></tbody></table>',7);function $(a,l,e,n,p,r){const c=f("render-demo-0"),t=f("demo"),C=f("render-demo-1");return h(),_("div",null,[v,x,g,w,E(t,{customClass:"undefined",sourceCode:`<template>
  <div class="k-popover-group">
    <k-popconfirm title="是否确认要进行后续操作?" :width="180">
      <template #reference>
        <k-button type="insert">操作</k-button>
      </template>
    </k-popconfirm>
  </div>
</template>
`},{highlight:A(()=>[T]),default:A(()=>[E(c)]),_:1}),V,N,P,E(t,{customClass:"undefined",sourceCode:`<template>
  <div>
    <k-popconfirm
      position="bottom"
      cancelText="close"
      confirmText="ok"
      @cancel="cancel"
      @confirm="confirm"
      title="Are you sure you want to proceed with the subsequent operation?"
      :width="300"
    >
      <template #reference>
        <k-button type="insert">click ok</k-button>
      </template>
    </k-popconfirm>
  </div>
</template>

<script setup lang="ts">
const cancel = () => {
  console.log('cancel');
};
const confirm = () => {
  console.log('confirm');
};
<\/script>
`},{highlight:A(()=>[q]),default:A(()=>[E(C)]),_:1}),S])}const I=D(b,[["render",$]]);export{j as __pageData,I as default};
