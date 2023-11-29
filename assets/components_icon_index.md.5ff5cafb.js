import{_ as F,B as e,o as y,c as i,D as o,x as s,z as a,F as d,M as D,a as l}from"./chunks/framework.d383e008.js";const k={};function C(E,A){const t=e("back"),n=e("edit"),c=e("earth"),p=e("like"),r=e("star");return y(),i("div",null,[o(t),o(n),o(c),o(p),o(r)])}const f=F(k,[["render",C]]),_={},m={style:{"margin-bottom":"10px"}},h={style:{"margin-bottom":"10px"}};function u(E,A){const t=e("back"),n=e("k-icon"),c=e("edit"),p=e("earth"),r=e("like");return y(),i(d,null,[s("div",m,[o(n,null,{default:a(()=>[o(t)]),_:1}),o(n,null,{default:a(()=>[o(c)]),_:1}),o(n,null,{default:a(()=>[o(p)]),_:1}),o(n,null,{default:a(()=>[o(r)]),_:1})]),s("div",h,[o(n,{color:"#fbbd0a"},{default:a(()=>[o(t)]),_:1}),o(n,{color:"#e74032"},{default:a(()=>[o(c)]),_:1}),o(n,{color:"#22a5f1"},{default:a(()=>[o(p)]),_:1}),o(n,{color:"#2bc0ac"},{default:a(()=>[o(r)]),_:1})]),s("div",null,[o(n,{size:"20px"},{default:a(()=>[o(t)]),_:1}),o(n,{size:"20px"},{default:a(()=>[o(c)]),_:1}),o(n,{size:"20px"},{default:a(()=>[o(p)]),_:1}),o(n,{size:"20px"},{default:a(()=>[o(r)]),_:1})])],64)}const b=F(_,[["render",u]]),v=D(`<h1 id="icon-组件" tabindex="-1">Icon 组件 <a class="header-anchor" href="#icon-组件" aria-label="Permalink to &quot;Icon 组件&quot;">​</a></h1><h2 id="使用图标" tabindex="-1">使用图标 <a class="header-anchor" href="#使用图标" aria-label="Permalink to &quot;使用图标&quot;">​</a></h2><p>kits-ui 预置的 icon 图标与组件包进行了分离,以便方便用户使用第三方 icon,因此需要单独进行安装 icon 包</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#908CAA;font-style:italic;">#</span><span style="color:#6E6A86;font-style:italic;">npm</span></span>
<span class="line"><span style="color:#EA9A97;">npm</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">install</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">@kits-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">#</span><span style="color:#6E6A86;font-style:italic;">yarn</span></span>
<span class="line"><span style="color:#EA9A97;">yarn</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">add</span><span style="color:#E0DEF4;"> </span><span style="color:#F6C177;">@kits-ui/icons</span></span></code></pre><pre class="shiki rose-pine-dawn vp-code-light"><code><span class="line"><span style="color:#797593;font-style:italic;">#</span><span style="color:#9893A5;font-style:italic;">npm</span></span>
<span class="line"><span style="color:#D7827E;">npm</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">install</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">@kits-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#797593;font-style:italic;">#</span><span style="color:#9893A5;font-style:italic;">yarn</span></span>
<span class="line"><span style="color:#D7827E;">yarn</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">add</span><span style="color:#575279;"> </span><span style="color:#EA9D34;">@kits-ui/icons</span></span></code></pre></div><h2 id="全局注册" tabindex="-1">全局注册 <a class="header-anchor" href="#全局注册" aria-label="Permalink to &quot;全局注册&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki rose-pine-moon vp-code-dark"><code><span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> main.ts</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#EA9A97;">*</span><span style="color:#3E8FB0;"> as </span><span style="color:#E0DEF4;font-style:italic;">kitsIcon</span><span style="color:#3E8FB0;"> from </span><span style="color:#F6C177;">&#39;@kits-ui/icons&#39;</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#908CAA;font-style:italic;">//</span><span style="color:#6E6A86;font-style:italic;"> 注册icon</span></span>
<span class="line"><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">app</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">=</span><span style="color:#E0DEF4;"> </span><span style="color:#EA9A97;">createApp</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">App</span><span style="color:#E0DEF4;">)</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#3E8FB0;">for</span><span style="color:#E0DEF4;"> (</span><span style="color:#3E8FB0;">const</span><span style="color:#E0DEF4;"> </span><span style="color:#908CAA;">[</span><span style="color:#E0DEF4;font-style:italic;">key</span><span style="color:#908CAA;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">component</span><span style="color:#908CAA;">]</span><span style="color:#E0DEF4;"> </span><span style="color:#3E8FB0;">of</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">Object</span><span style="color:#3E8FB0;">.</span><span style="color:#EA9A97;">entries</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">kitsIcon</span><span style="color:#E0DEF4;">)) </span><span style="color:#908CAA;">{</span></span>
<span class="line"><span style="color:#E0DEF4;">  </span><span style="color:#E0DEF4;font-style:italic;">app</span><span style="color:#3E8FB0;">.</span><span style="color:#EA9A97;">component</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">key</span><span style="color:#908CAA;">,</span><span style="color:#E0DEF4;"> </span><span style="color:#E0DEF4;font-style:italic;">component</span><span style="color:#E0DEF4;">)</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#908CAA;">}</span></span></code></pre><pre class="shiki rose-pine-dawn vp-code-light"><code><span class="line"><span style="color:#797593;font-style:italic;">//</span><span style="color:#9893A5;font-style:italic;"> main.ts</span></span>
<span class="line"><span style="color:#286983;">import </span><span style="color:#D7827E;">*</span><span style="color:#286983;"> as </span><span style="color:#575279;font-style:italic;">kitsIcon</span><span style="color:#286983;"> from </span><span style="color:#EA9D34;">&#39;@kits-ui/icons&#39;</span><span style="color:#797593;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#797593;font-style:italic;">//</span><span style="color:#9893A5;font-style:italic;"> 注册icon</span></span>
<span class="line"><span style="color:#286983;">const</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">app</span><span style="color:#575279;"> </span><span style="color:#286983;">=</span><span style="color:#575279;"> </span><span style="color:#D7827E;">createApp</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">App</span><span style="color:#575279;">)</span><span style="color:#797593;">;</span></span>
<span class="line"><span style="color:#286983;">for</span><span style="color:#575279;"> (</span><span style="color:#286983;">const</span><span style="color:#575279;"> </span><span style="color:#797593;">[</span><span style="color:#575279;font-style:italic;">key</span><span style="color:#797593;">,</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">component</span><span style="color:#797593;">]</span><span style="color:#575279;"> </span><span style="color:#286983;">of</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">Object</span><span style="color:#286983;">.</span><span style="color:#D7827E;">entries</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">kitsIcon</span><span style="color:#575279;">)) </span><span style="color:#797593;">{</span></span>
<span class="line"><span style="color:#575279;">  </span><span style="color:#575279;font-style:italic;">app</span><span style="color:#286983;">.</span><span style="color:#D7827E;">component</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">key</span><span style="color:#797593;">,</span><span style="color:#575279;"> </span><span style="color:#575279;font-style:italic;">component</span><span style="color:#575279;">)</span><span style="color:#797593;">;</span></span>
<span class="line"><span style="color:#797593;">}</span></span></code></pre></div><h2 id="直接使用" tabindex="-1">直接使用 <a class="header-anchor" href="#直接使用" aria-label="Permalink to &quot;直接使用&quot;">​</a></h2>`,8),B=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"back"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"edit"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"earth"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"like"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"    "),s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#EB6F92"}},"star"),s("span",{style:{color:"#6E6A86"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0DEF4"}},"  "),s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"div"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")])])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"back"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"edit"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"earth"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"like"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"    "),s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#B4637A"}},"star"),s("span",{style:{color:"#9893A5"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#575279"}},"  "),s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"div"),s("span",{style:{color:"#9893A5"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")])])])],-1),x=s("h2",{id:"使用-k-icon",tabindex:"-1"},[l("使用 k-icon "),s("a",{class:"header-anchor",href:"#使用-k-icon","aria-label":'Permalink to "使用 k-icon"'},"​")],-1),g=s("p",null,[l("使用 k-icon 可以通过 "),s("strong",null,"size"),l(" 和 "),s("strong",null,"color"),l(" 为 icon 设置大小与颜色")],-1),z=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki rose-pine-moon vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"<"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#6E6A86"}},"</"),s("span",{style:{color:"#9CCFD8"}},"template"),s("span",{style:{color:"#6E6A86"}},">")])])]),s("pre",{"v-pre":"",class:"shiki rose-pine-dawn vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"<"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#9893A5"}},"</"),s("span",{style:{color:"#56949F"}},"template"),s("span",{style:{color:"#9893A5"}},">")])])])],-1),I=s("h2",{id:"内置-icon-持续补充中",tabindex:"-1"},[l("内置 Icon(持续补充中...) "),s("a",{class:"header-anchor",href:"#内置-icon-持续补充中","aria-label":'Permalink to "内置 Icon(持续补充中...)"'},"​")],-1),T=JSON.parse('{"title":"Icon 组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon/index.md","filePath":"components/icon/index.md"}'),P={name:"components/icon/index.md"},N=Object.assign(P,{setup(E){return(A,t)=>{const n=e("demo"),c=e("Icons");return y(),i("div",null,[v,o(n,{customClass:"",sourceCode:`<template>
  <div>
    <back />
    <edit />
    <earth />
    <like />
    <star />
  </div>
</template>
`},{highlight:a(()=>[B]),default:a(()=>[o(f)]),_:1}),x,g,o(n,{customClass:"",sourceCode:`<template>
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
`},{highlight:a(()=>[z]),default:a(()=>[o(b)]),_:1}),I,o(c)])}}});export{T as __pageData,N as default};
