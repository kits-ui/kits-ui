import{V as n,_ as F,r as d,o as f,c as b,a as u,w as D,b as s,d as l,e as B}from"./app.76e1e493.js";const{defineComponent:m}=n,h=m({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,openBlock:c,createBlock:t}=n;function p(o,i){const E=a("k-filter-box");return c(),t(E,{filterData:o.data,onOnSelectData:o.onSelectData},null,8,["filterData","onOnSelectData"])}const{defineComponent:r}=n,{ref:e}=n;return{render:p,...r({setup(o,{expose:i}){i();const A={data:e([{id:"f9ff118f9bd94f2ab6b1afdcef7efa16",name:"分类1",childList:[{id:"9fc33fbc7503403dbbc58ac1c11789da",title:"标签1-1",name:"标签1-1"}]},{id:"45446ae2aecf4a10b40df4253d6dece4",name:"分类2",childList:[{id:"259736e9b406451f9bd3eb85fe83155e",title:"标签2-1",name:"标签2-1"}]},{id:"d6f9f70df6184bc8ba29dd50d8841d89",name:"分类3",childList:[{id:"174622ef5f0f11ec94b70242ac140004",title:"标签3-1",name:"标签3-1"},{id:"e9679319beb74e208b72b55f3a0fca6e",title:"标签3-2",name:"标签3-2"}]},{id:"6d22479b128240f4be6dd7885e4d884c",name:"分类4",childList:[{id:"dcb0a6daa7ef11ebbfb2000c299a2318",title:"标签4-1",name:"标签4-1"},{id:"345cc5f5b85411eb91ee000c299a2318",title:"标签4-2",name:"标签4-2"},{id:"d88fd45d5f0c11ec94b70242ac140004",title:"标签4-3",name:"标签4-3"},{id:"c6689a84ed2111ec8052000c299a2318",title:"标签4-4",name:"标签4-4"},{id:"e36e7ee6a7ef11ebbfb2000c299a2318",title:"标签4-5",name:"标签4-5"},{id:"6ebc6b8b5f0e11ec94b70242ac140004",title:"标签4-6",name:"标签4-6"},{id:"42733678ed2211ec8052000c299a2318",title:"标签4-7",name:"标签4-7"}]}]),onSelectData:C=>{console.log(C)},ref:e};return Object.defineProperty(A,"__isScriptSetup",{enumerable:!1,value:!0}),A}})}}()}}),V=JSON.parse('{"title":"搜索面板","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"Filter API","slug":"filter-api","link":"#filter-api","children":[]},{"level":2,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"relativePath":"components/filterBox/index.md"}'),_=s("h1",{id:"搜索面板",tabindex:"-1"},[l("搜索面板 "),s("a",{class:"header-anchor",href:"#搜索面板","aria-hidden":"true"},"#")],-1),v=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),x=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-filter-box"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},":filterData"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"data"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@onSelectData"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"onSelectData"'),s("span",{style:{color:"#6E6A86"}},"></"),s("span",{style:{color:"#9CCFD8"}},"k-filter-box"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"ts"'),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"import "),s("span",{style:{color:"#908CAA"}},"{"),s("span",{style:{color:"#3E8FB0"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"ref"),s("span",{style:{color:"#3E8FB0"}}," "),s("span",{style:{color:"#908CAA"}},"}"),s("span",{style:{color:"#3E8FB0"}}," from "),s("span",{style:{color:"#F6C177"}},"'vue'"),s("span",{style:{color:"#908CAA"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"data"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97"}},"ref"),s("span",{style:{color:"#E0DEF4"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'f9ff118f9bd94f2ab6b1afdcef7efa16'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'分类1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    childList"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'9fc33fbc7503403dbbc58ac1c11789da'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签1-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签1-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    ]"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'45446ae2aecf4a10b40df4253d6dece4'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'分类2'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    childList"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'259736e9b406451f9bd3eb85fe83155e'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签2-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签2-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    ]"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'d6f9f70df6184bc8ba29dd50d8841d89'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'分类3'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    childList"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'174622ef5f0f11ec94b70242ac140004'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签3-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签3-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'e9679319beb74e208b72b55f3a0fca6e'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签3-2'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签3-2'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    ]"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'6d22479b128240f4be6dd7885e4d884c'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'分类4'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    childList"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'dcb0a6daa7ef11ebbfb2000c299a2318'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-1'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'345cc5f5b85411eb91ee000c299a2318'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-2'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-2'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'d88fd45d5f0c11ec94b70242ac140004'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-3'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-3'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'c6689a84ed2111ec8052000c299a2318'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-4'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-4'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'e36e7ee6a7ef11ebbfb2000c299a2318'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-5'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-5'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'6ebc6b8b5f0e11ec94b70242ac140004'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-6'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-6'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        id"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'42733678ed2211ec8052000c299a2318'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        title"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-7'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"        name"),s("span",{style:{color:"#908CAA"}},":"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#F6C177"}},"'标签4-7'"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    ]"),s("span",{style:{color:"#908CAA"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#908CAA"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"])"),s("span",{style:{color:"#908CAA"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#3E8FB0"}},"const"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#EA9A97","font-style":"italic"}},"onSelectData"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"="),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"("),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"value"),s("span",{style:{color:"#908CAA"}},")"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#3E8FB0"}},"=>"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#908CAA"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"console"),s("span",{style:{color:"#3E8FB0"}},"."),s("span",{style:{color:"#EA9A97"}},"log"),s("span",{style:{color:"#E0DEF4"}},"("),s("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),s("span",{style:{color:"#E0DEF4"}},")"),s("span",{style:{color:"#908CAA"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#908CAA"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"script"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-filter-box"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},":filterData"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"data"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"@onSelectData"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"onSelectData"'),s("span",{style:{color:"#9893A5"}},"></"),s("span",{style:{color:"#56949F"}},"k-filter-box"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"ts"'),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"import "),s("span",{style:{color:"#797593"}},"{"),s("span",{style:{color:"#286983"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"ref"),s("span",{style:{color:"#286983"}}," "),s("span",{style:{color:"#797593"}},"}"),s("span",{style:{color:"#286983"}}," from "),s("span",{style:{color:"#EA9D34"}},"'vue'"),s("span",{style:{color:"#797593"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#575279","font-style":"italic"}},"data"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E"}},"ref"),s("span",{style:{color:"#575279"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'f9ff118f9bd94f2ab6b1afdcef7efa16'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'分类1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    childList"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'9fc33fbc7503403dbbc58ac1c11789da'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签1-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签1-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    ]"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'45446ae2aecf4a10b40df4253d6dece4'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'分类2'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    childList"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'259736e9b406451f9bd3eb85fe83155e'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签2-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签2-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    ]"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'d6f9f70df6184bc8ba29dd50d8841d89'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'分类3'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    childList"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'174622ef5f0f11ec94b70242ac140004'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签3-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签3-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'e9679319beb74e208b72b55f3a0fca6e'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签3-2'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签3-2'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    ]"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'6d22479b128240f4be6dd7885e4d884c'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'分类4'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    childList"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'dcb0a6daa7ef11ebbfb2000c299a2318'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-1'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'345cc5f5b85411eb91ee000c299a2318'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-2'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-2'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'d88fd45d5f0c11ec94b70242ac140004'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-3'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-3'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'c6689a84ed2111ec8052000c299a2318'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-4'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-4'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'e36e7ee6a7ef11ebbfb2000c299a2318'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-5'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-5'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'6ebc6b8b5f0e11ec94b70242ac140004'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-6'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-6'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        id"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'42733678ed2211ec8052000c299a2318'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        title"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-7'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"        name"),s("span",{style:{color:"#797593"}},":"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#EA9D34"}},"'标签4-7'"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    ]"),s("span",{style:{color:"#797593"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#797593"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"])"),s("span",{style:{color:"#797593"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#286983"}},"const"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#D7827E","font-style":"italic"}},"onSelectData"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"="),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"("),s("span",{style:{color:"#907AA9","font-style":"italic"}},"value"),s("span",{style:{color:"#797593"}},")"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#286983"}},"=>"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#797593"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#575279","font-style":"italic"}},"console"),s("span",{style:{color:"#286983"}},"."),s("span",{style:{color:"#D7827E"}},"log"),s("span",{style:{color:"#575279"}},"("),s("span",{style:{color:"#575279","font-style":"italic"}},"value"),s("span",{style:{color:"#575279"}},")"),s("span",{style:{color:"#797593"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#797593"}},"};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"script"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),k=B('<h2 id="filter-api" tabindex="-1">Filter API <a class="header-anchor" href="#filter-api" aria-hidden="true">#</a></h2><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>filterData</td><td>filterData 的数据</td><td><code>Array</code></td><td>-----------</td><td>-</td></tr></tbody></table></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><div class="vp-table_k"><table><thead><tr><th>方法</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>onSelectData</td><td>获取所选标签的 id 集合的回调</td><td>--</td></tr></tbody></table></div>',5);function S(a,c,t,p,r,e){const y=d("render-demo-0"),o=d("demo");return f(),b("div",null,[_,v,u(o,{customClass:"undefined",sourceCode:`<template>
  <k-filter-box :filterData="data" @onSelectData="onSelectData"></k-filter-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data = ref([
  {
    id: 'f9ff118f9bd94f2ab6b1afdcef7efa16',
    name: '分类1',
    childList: [
      {
        id: '9fc33fbc7503403dbbc58ac1c11789da',
        title: '标签1-1',
        name: '标签1-1',
      },
    ],
  },
  {
    id: '45446ae2aecf4a10b40df4253d6dece4',
    name: '分类2',
    childList: [
      {
        id: '259736e9b406451f9bd3eb85fe83155e',
        title: '标签2-1',
        name: '标签2-1',
      },
    ],
  },
  {
    id: 'd6f9f70df6184bc8ba29dd50d8841d89',
    name: '分类3',
    childList: [
      {
        id: '174622ef5f0f11ec94b70242ac140004',
        title: '标签3-1',
        name: '标签3-1',
      },
      {
        id: 'e9679319beb74e208b72b55f3a0fca6e',
        title: '标签3-2',
        name: '标签3-2',
      },
    ],
  },
  {
    id: '6d22479b128240f4be6dd7885e4d884c',
    name: '分类4',
    childList: [
      {
        id: 'dcb0a6daa7ef11ebbfb2000c299a2318',
        title: '标签4-1',
        name: '标签4-1',
      },
      {
        id: '345cc5f5b85411eb91ee000c299a2318',
        title: '标签4-2',
        name: '标签4-2',
      },
      {
        id: 'd88fd45d5f0c11ec94b70242ac140004',
        title: '标签4-3',
        name: '标签4-3',
      },
      {
        id: 'c6689a84ed2111ec8052000c299a2318',
        title: '标签4-4',
        name: '标签4-4',
      },
      {
        id: 'e36e7ee6a7ef11ebbfb2000c299a2318',
        title: '标签4-5',
        name: '标签4-5',
      },
      {
        id: '6ebc6b8b5f0e11ec94b70242ac140004',
        title: '标签4-6',
        name: '标签4-6',
      },
      {
        id: '42733678ed2211ec8052000c299a2318',
        title: '标签4-7',
        name: '标签4-7',
      },
    ],
  },
]);

const onSelectData = (value) => {
  console.log(value);
};
<\/script>
`},{highlight:D(()=>[x]),default:D(()=>[u(y)]),_:1}),k])}const N=F(h,[["render",S]]);export{V as __pageData,N as default};
