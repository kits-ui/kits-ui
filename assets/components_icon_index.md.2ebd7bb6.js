import{V as m,_ as B,r as A,o as b,c as v,a as y,w as F,e as x,b as s,d as l}from"./app.7ba7b0e0.js";const{defineComponent:g}=m,z=g({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:o,openBlock:n,createElementBlock:c}=m;function i(E,t){const p=a("back"),r=a("edit"),f=a("earth"),h=a("like"),_=a("star");return n(),c("div",null,[o(p),o(r),o(f),o(h),o(_)])}return{render:i,...{}}}(),"render-demo-1":function(){const{resolveComponent:a,createVNode:o,withCtx:n,createElementVNode:c,Fragment:i,openBlock:u,createElementBlock:E}=m,t={style:{"margin-bottom":"10px"}},p={style:{"margin-bottom":"10px"}};function r(h,_){const d=a("back"),e=a("k-icon"),C=a("edit"),k=a("earth"),D=a("like");return u(),E(i,null,[c("div",t,[o(e,null,{default:n(()=>[o(d)]),_:1}),o(e,null,{default:n(()=>[o(C)]),_:1}),o(e,null,{default:n(()=>[o(k)]),_:1}),o(e,null,{default:n(()=>[o(D)]),_:1})]),c("div",p,[o(e,{color:"#fbbd0a"},{default:n(()=>[o(d)]),_:1}),o(e,{color:"#e74032"},{default:n(()=>[o(C)]),_:1}),o(e,{color:"#22a5f1"},{default:n(()=>[o(k)]),_:1}),o(e,{color:"#2bc0ac"},{default:n(()=>[o(D)]),_:1})]),c("div",null,[o(e,{size:"20px"},{default:n(()=>[o(d)]),_:1}),o(e,{size:"20px"},{default:n(()=>[o(C)]),_:1}),o(e,{size:"20px"},{default:n(()=>[o(k)]),_:1}),o(e,{size:"20px"},{default:n(()=>[o(D)]),_:1})])],64)}return{render:r,...{}}}()}}),J=JSON.parse('{"title":"Icon 组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用图标","slug":"使用图标","link":"#使用图标","children":[]},{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"全局注册","slug":"全局注册","link":"#全局注册","children":[]},{"level":2,"title":"直接使用","slug":"直接使用","link":"#直接使用","children":[]},{"level":2,"title":"使用 k-icon","slug":"使用-k-icon","link":"#使用-k-icon","children":[]},{"level":2,"title":"内置 Icon(持续补充中...)","slug":"内置-icon-持续补充中","link":"#内置-icon-持续补充中","children":[]}],"relativePath":"components/icon/index.md"}'),V=x(`<h1 id="icon-组件" tabindex="-1">Icon 组件 <a class="header-anchor" href="#icon-组件" aria-hidden="true">#</a></h1><h2 id="使用图标" tabindex="-1">使用图标 <a class="header-anchor" href="#使用图标" aria-hidden="true">#</a></h2><p>kits-ui 预置的 icon 图标与组件包进行了分离,以便方便用户使用第三方 icon,因此需要单独进行安装 icon 包</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki rose-pine-moon vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#908CAA;font-style:italic;">#</span><span style="color:#6E6A86;font-style:italic;">npm</span></span>
<span class="line"><span style="color:#EA9A97;">npm</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">install</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">@kits-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">#</span><span style="color:#6E6A86;font-style:italic;">yarn</span></span>
<span class="line"><span style="color:#EA9A97;">yarn</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">add</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">@kits-ui/icons</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki rose-pine-dawn vp-code-light" tabindex="0"><code><span class="line"><span style="color:#797593;font-style:italic;">#</span><span style="color:#9893A5;font-style:italic;">npm</span></span>
<span class="line"><span style="color:#D7827E;">npm</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">install</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">@kits-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#797593;font-style:italic;">#</span><span style="color:#9893A5;font-style:italic;">yarn</span></span>
<span class="line"><span style="color:#D7827E;">yarn</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">add</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">@kits-ui/icons</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="全局注册" tabindex="-1">全局注册 <a class="header-anchor" href="#全局注册" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki rose-pine-moon vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> main.ts</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#EA9A97;">*</span><span style="color:#3E8FB0;"> as </span><span style="color:#E0DEF4;font-style:italic;">kitsIcon</span><span style="color:#3E8FB0;"> from </span><span style="color:#F6C177;">&#39;@kits-ui/icons&#39;</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> 注册icon</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">app</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">createApp</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">App</span><span style="color:#E0DEF4;">)</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#3E8FB0;">for</span><span style="color:#E0DEF4;"> (</span><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">[</span><span style="color:#E0DEF4;font-style:italic;">key</span><span style="color:#908CAA;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">component</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">of</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">Object</span><span style="color:#3E8FB0;">.</span><span style="color:#EA9A97;">entries</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">kitsIcon</span><span style="color:#E0DEF4;">)) </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#E0DEF4;font-style:italic;">app</span><span style="color:#3E8FB0;">.</span><span style="color:#EA9A97;">component</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">key</span><span style="color:#908CAA;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">component</span><span style="color:#E0DEF4;">)</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki rose-pine-dawn vp-code-light" tabindex="0"><code><span class="line"><span style="color:#797593;font-style:italic;">//</span><span style="color:#9893A5;font-style:italic;"> main.ts</span></span>
<span class="line"><span style="color:#286983;">import </span><span style="color:#D7827E;">*</span><span style="color:#286983;"> as </span><span style="color:#575279;font-style:italic;">kitsIcon</span><span style="color:#286983;"> from </span><span style="color:#EA9D34;">&#39;@kits-ui/icons&#39;</span><span style="color:#797593;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#797593;font-style:italic;">//</span><span style="color:#9893A5;font-style:italic;"> 注册icon</span></span>
<span class="line"><span style="color:#286983;">const</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">app</span><span style="color:#575279;"> </span><span style="color:#286983;">=</span><span style="color:#575279;"> </span><span style="color:#D7827E;">createApp</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">App</span><span style="color:#575279;">)</span><span style="color:#797593;">;</span></span>
<span class="line"><span style="color:#286983;">for</span><span style="color:#575279;"> (</span><span style="color:#286983;">const</span><span style="color:#575279;"> </span><span style="color:#797593;">[</span><span style="color:#575279;font-style:italic;">key</span><span style="color:#797593;">,</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">component</span><span style="color:#797593;">]</span><span style="color:#575279;"> </span><span style="color:#286983;">of</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">Object</span><span style="color:#286983;">.</span><span style="color:#D7827E;">entries</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">kitsIcon</span><span style="color:#575279;">)) </span><span style="color:#797593;">{</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#575279;font-style:italic;">app</span><span style="color:#286983;">.</span><span style="color:#D7827E;">component</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">key</span><span style="color:#797593;">,</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">component</span><span style="color:#575279;">)</span><span style="color:#797593;">;</span></span>
<span class="line"><span style="color:#797593;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="直接使用" tabindex="-1">直接使用 <a class="header-anchor" href="#直接使用" aria-hidden="true">#</a></h2>`,8),N=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"back"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"edit"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"earth"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"like"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"star"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"back"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"edit"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"earth"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"like"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"star"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),I=s("h2",{id:"使用-k-icon",tabindex:"-1"},[l("使用 k-icon "),s("a",{class:"header-anchor",href:"#使用-k-icon","aria-hidden":"true"},"#")],-1),w=s("p",null,[l("使用 k-icon 可以通过 "),s("strong",null,"size"),l(" 和 "),s("strong",null,"color"),l(" 为 icon 设置大小与颜色")],-1),j=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"margin-bottom: 10px"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"back"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"edit"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"earth"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"like"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"style"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"margin-bottom: 10px"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"color"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"#fbbd0a"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"back"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"color"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"#e74032"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"edit"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"color"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"#22a5f1"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"earth"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"color"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"#2bc0ac"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"like"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"size"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"20px"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"back"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"size"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"20px"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"edit"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"size"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"20px"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"earth"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#E0DEF4"}}," "),s("span",{style:{color:"#C4A7E7","font-style":"italic"}},"size"),s("span",{style:{color:"#908CAA"}},"="),s("span",{style:{color:"#F6C177"}},'"20px"'),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"      "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"like"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"k-icon"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"margin-bottom: 10px"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"back"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"edit"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"earth"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"like"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"style"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"margin-bottom: 10px"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"color"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"#fbbd0a"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"back"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"color"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"#e74032"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"edit"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"color"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"#22a5f1"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"earth"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"color"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"#2bc0ac"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"like"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"size"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"20px"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"back"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"size"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"20px"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"edit"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"size"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"20px"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"earth"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#575279"}}," "),s("span",{style:{color:"#907AA9","font-style":"italic"}},"size"),s("span",{style:{color:"#797593"}},"="),s("span",{style:{color:"#EA9D34"}},'"20px"'),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"      "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"like"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"k-icon"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("h2",{id:"内置-icon-持续补充中",tabindex:"-1"},[l("内置 Icon(持续补充中...) "),s("a",{class:"header-anchor",href:"#内置-icon-持续补充中","aria-hidden":"true"},"#")],-1);function O(a,o,n,c,i,u){const E=A("render-demo-0"),t=A("demo"),p=A("render-demo-1"),r=A("Icons");return b(),v("div",null,[V,y(t,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <back />
    <edit />
    <earth />
    <like />
    <star />
  </div>
</template>
`},{highlight:F(()=>[N]),default:F(()=>[y(E)]),_:1}),I,w,y(t,{customClass:"demoblock-custom",sourceCode:`<template>
  <div style="margin-bottom: 10px">
    <k-icon>
      <back />
    </k-icon>
    <k-icon>
      <edit />
    </k-icon>
    <k-icon>
      <earth />
    </k-icon>
    <k-icon>
      <like />
    </k-icon>
  </div>
  <div style="margin-bottom: 10px">
    <k-icon color="#fbbd0a">
      <back />
    </k-icon>
    <k-icon color="#e74032">
      <edit />
    </k-icon>
    <k-icon color="#22a5f1">
      <earth />
    </k-icon>
    <k-icon color="#2bc0ac">
      <like />
    </k-icon>
  </div>
  <div>
    <k-icon size="20px">
      <back />
    </k-icon>
    <k-icon size="20px">
      <edit />
    </k-icon>
    <k-icon size="20px">
      <earth />
    </k-icon>
    <k-icon size="20px">
      <like />
    </k-icon>
  </div>
</template>
`},{highlight:F(()=>[j]),default:F(()=>[y(p)]),_:1}),$,y(r)])}const P=B(z,[["render",O]]);export{J as __pageData,P as default};
