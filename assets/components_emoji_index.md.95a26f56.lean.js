import{V as r,_ as h,r as m,o as T,c as B,a as C,w as D,b as l,d as s}from"./app.4dda22f3.js";const{defineComponent:g}=r,w=g({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:E,createVNode:A,createElementVNode:p,vModelText:f,withDirectives:d,openBlock:u,createElementBlock:y}=r,i=["innerHTML"];function v(o,t){const n=E("k-emoji");return u(),y("div",null,[A(n,{onSelected:o.selectEmoticon},null,8,["onSelected"]),p("div",{innerHTML:o.html_},null,8,i),d(p("textarea",{style:{width:"100%"},ref:"myTextarea","onUpdate:modelValue":t[0]||(t[0]=a=>o.editorText=a),rows:"6"},null,512),[[f,o.editorText,void 0,{trim:!0}]])])}const{defineComponent:x}=r,{ref:e}=r;return{render:v,...x({setup(o,{expose:t}){t();const n=e("textarea"),a=e(),_=e(null),F={editorText:n,html_:a,myTextarea:_,selectEmoticon:c=>{a.value=c.textReplaceEmoji(c.value),c.type==1&&(n.value=c.value)},ref:e};return Object.defineProperty(F,"__isScriptSetup",{enumerable:!1,value:!0}),F}})}}()}}),N=JSON.parse('{"title":"emoji 组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]}],"relativePath":"components/emoji/index.md"}'),j=l("h1",{id:"emoji-组件",tabindex:"-1"},[s("emoji 组件 "),l("a",{class:"header-anchor",href:"#emoji-组件","aria-hidden":"true"},"#")],-1),k=l("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),P=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"k-emoji"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"@selected"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"selectEmoticon"'),l("span",{style:{color:"#6E6A86"}},"></"),l("span",{style:{color:"#9CCFD8"}},"k-emoji"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-html"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"html_"'),l("span",{style:{color:"#6E6A86"}},"></"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"textarea"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"width:100%"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"ref"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"myTextarea"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"v-model.trim"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"editorText"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"rows"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"6"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EB6F92"}},"/"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"div"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"template"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"<"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"lang"),l("span",{style:{color:"#908CAA"}},"="),l("span",{style:{color:"#F6C177"}},'"ts"'),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"setup"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"import "),l("span",{style:{color:"#908CAA"}},"{"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"ref"),l("span",{style:{color:"#3E8FB0"}}," "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#3E8FB0"}}," from "),l("span",{style:{color:"#F6C177"}},"'vue'"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"editorText"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#F6C177"}},"'textarea'"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"html_"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"()"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"myTextarea"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"ref"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#EA9A97"}},"null"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#3E8FB0"}},"const"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97","font-style":"italic"}},"selectEmoticon"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"("),l("span",{style:{color:"#C4A7E7","font-style":"italic"}},"data"),l("span",{style:{color:"#908CAA"}},")"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=>"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"html_"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"data"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#EA9A97"}},"textReplaceEmoji"),l("span",{style:{color:"#E0DEF4"}},"("),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"data"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#E0DEF4"}},")"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#3E8FB0"}},"if"),l("span",{style:{color:"#E0DEF4"}}," ("),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"data"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"type"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"=="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#EA9A97"}},"1"),l("span",{style:{color:"#E0DEF4"}},") "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"    "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"editorText"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"="),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"data"),l("span",{style:{color:"#3E8FB0"}},"."),l("span",{style:{color:"#E0DEF4","font-style":"italic"}},"value"),l("span",{style:{color:"#908CAA"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," let value = editorText.value;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," let el = myTextarea;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," let startPos = el.selectionStart;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," let endPos = el.selectionEnd;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," let newValue =")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   value.substring(0, startPos) + data.value + value.substring(endPos, value.length);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," editorText.value = newValue;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," if (el.setSelectionRange) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   setTimeout(() => {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     let index = startPos + data.value.length;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     el.setSelectionRange(index, index);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"     el.focus();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}},"   }, 0);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"}"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#3E8FB0"}},"else"),l("span",{style:{color:"#E0DEF4"}}," "),l("span",{style:{color:"#908CAA"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"    "),l("span",{style:{color:"#908CAA","font-style":"italic"}},"//"),l("span",{style:{color:"#6E6A86","font-style":"italic"}}," 发送自定义图片")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E0DEF4"}},"  "),l("span",{style:{color:"#908CAA"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#908CAA"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6E6A86"}},"</"),l("span",{style:{color:"#9CCFD8"}},"script"),l("span",{style:{color:"#6E6A86"}},">")]),s(`
`),l("span",{class:"line"})])]),l("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"k-emoji"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"@selected"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"selectEmoticon"'),l("span",{style:{color:"#9893A5"}},"></"),l("span",{style:{color:"#56949F"}},"k-emoji"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"v-html"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"html_"'),l("span",{style:{color:"#9893A5"}},"></"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"textarea"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"width:100%"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"ref"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"myTextarea"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"v-model.trim"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"editorText"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"rows"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"6"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#B4637A"}},"/"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"div"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"template"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"<"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"lang"),l("span",{style:{color:"#797593"}},"="),l("span",{style:{color:"#EA9D34"}},'"ts"'),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#907AA9","font-style":"italic"}},"setup"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"import "),l("span",{style:{color:"#797593"}},"{"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"ref"),l("span",{style:{color:"#286983"}}," "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#286983"}}," from "),l("span",{style:{color:"#EA9D34"}},"'vue'"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"editorText"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#EA9D34"}},"'textarea'"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"html_"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"()"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"myTextarea"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"ref"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#D7827E"}},"null"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#286983"}},"const"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E","font-style":"italic"}},"selectEmoticon"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"("),l("span",{style:{color:"#907AA9","font-style":"italic"}},"data"),l("span",{style:{color:"#797593"}},")"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=>"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#575279","font-style":"italic"}},"html_"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"data"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#D7827E"}},"textReplaceEmoji"),l("span",{style:{color:"#575279"}},"("),l("span",{style:{color:"#575279","font-style":"italic"}},"data"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#575279"}},")"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#286983"}},"if"),l("span",{style:{color:"#575279"}}," ("),l("span",{style:{color:"#575279","font-style":"italic"}},"data"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"type"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"=="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#D7827E"}},"1"),l("span",{style:{color:"#575279"}},") "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"    "),l("span",{style:{color:"#575279","font-style":"italic"}},"editorText"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"="),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#575279","font-style":"italic"}},"data"),l("span",{style:{color:"#286983"}},"."),l("span",{style:{color:"#575279","font-style":"italic"}},"value"),l("span",{style:{color:"#797593"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," let value = editorText.value;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," let el = myTextarea;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," let startPos = el.selectionStart;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," let endPos = el.selectionEnd;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," let newValue =")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   value.substring(0, startPos) + data.value + value.substring(endPos, value.length);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," editorText.value = newValue;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," if (el.setSelectionRange) {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   setTimeout(() => {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     let index = startPos + data.value.length;")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     el.setSelectionRange(index, index);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"     el.focus();")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}},"   }, 0);")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"}"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#286983"}},"else"),l("span",{style:{color:"#575279"}}," "),l("span",{style:{color:"#797593"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"    "),l("span",{style:{color:"#797593","font-style":"italic"}},"//"),l("span",{style:{color:"#9893A5","font-style":"italic"}}," 发送自定义图片")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#575279"}},"  "),l("span",{style:{color:"#797593"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#797593"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#9893A5"}},"</"),l("span",{style:{color:"#56949F"}},"script"),l("span",{style:{color:"#9893A5"}},">")]),s(`
`),l("span",{class:"line"})])])],-1);function V(E,A,p,f,d,u){const y=m("render-demo-0"),i=m("demo");return T(),B("div",null,[j,k,C(i,{customClass:"undefined",sourceCode:`<template>
  <div>
    <k-emoji @selected="selectEmoticon"></k-emoji>
    <div v-html="html_"></div>
    <textarea style="width:100%" ref="myTextarea" v-model.trim="editorText" rows="6" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const editorText = ref('textarea');
const html_ = ref();

const myTextarea = ref(null);
const selectEmoticon = (data) => {
  html_.value = data.textReplaceEmoji(data.value);
  if (data.type == 1) {
    editorText.value = data.value;
    // let value = editorText.value;
    // let el = myTextarea;
    // let startPos = el.selectionStart;
    // let endPos = el.selectionEnd;
    // let newValue =
    //   value.substring(0, startPos) + data.value + value.substring(endPos, value.length);
    // editorText.value = newValue;
    // if (el.setSelectionRange) {
    //   setTimeout(() => {
    //     let index = startPos + data.value.length;
    //     el.setSelectionRange(index, index);
    //     el.focus();
    //   }, 0);
    // }
  } else {
    // 发送自定义图片
  }
};
<\/script>
`},{highlight:D(()=>[P]),default:D(()=>[C(y)]),_:1})])}const M=h(w,[["render",V]]);export{N as __pageData,M as default};
