import{_ as s,o as a,c as n,e as p}from"./app.45ea143b.js";const m=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[{"level":2,"title":"完整引入","slug":"完整引入","link":"#完整引入","children":[]}],"relativePath":"guide/use.md"}'),l={name:"guide/use.md"},o=p(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-hidden="true">#</a></h1><h2 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-hidden="true">#</a></h2><p>在 main.js 或 main.ts 中引入下面内容</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki rose-pine-moon vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#908CAA;">{</span><span style="color:#3E8FB0;"> </span><span style="color:#E0DEF4;font-style:italic;">createApp</span><span style="color:#3E8FB0;"> </span><span style="color:#908CAA;">}</span><span style="color:#3E8FB0;"> from </span><span style="color:#F6C177;">&#39;vue&#39;</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#E0DEF4;font-style:italic;">App</span><span style="color:#3E8FB0;"> from </span><span style="color:#F6C177;">&#39;./App.vue&#39;</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#E0DEF4;font-style:italic;">kitsUi</span><span style="color:#3E8FB0;"> from </span><span style="color:#F6C177;">&#39;kits-ui&#39;</span><span style="color:#908CAA;">;</span></span>
<span class="line"><span style="color:#3E8FB0;">import </span><span style="color:#F6C177;">&#39;@kits-ui/theme&#39;</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#EA9A97;">createApp</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">App</span><span style="color:#E0DEF4;">)</span><span style="color:#3E8FB0;">.</span><span style="color:#EA9A97;">use</span><span style="color:#E0DEF4;">(</span><span style="color:#E0DEF4;font-style:italic;">kitsUi</span><span style="color:#E0DEF4;">)</span><span style="color:#3E8FB0;">.</span><span style="color:#EA9A97;">mount</span><span style="color:#E0DEF4;">(</span><span style="color:#F6C177;">&#39;#app&#39;</span><span style="color:#E0DEF4;">)</span><span style="color:#908CAA;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki rose-pine-dawn vp-code-light" tabindex="0"><code><span class="line"><span style="color:#286983;">import </span><span style="color:#797593;">{</span><span style="color:#286983;"> </span><span style="color:#575279;font-style:italic;">createApp</span><span style="color:#286983;"> </span><span style="color:#797593;">}</span><span style="color:#286983;"> from </span><span style="color:#EA9D34;">&#39;vue&#39;</span><span style="color:#797593;">;</span></span>
<span class="line"><span style="color:#286983;">import </span><span style="color:#575279;font-style:italic;">App</span><span style="color:#286983;"> from </span><span style="color:#EA9D34;">&#39;./App.vue&#39;</span><span style="color:#797593;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#286983;">import </span><span style="color:#575279;font-style:italic;">kitsUi</span><span style="color:#286983;"> from </span><span style="color:#EA9D34;">&#39;kits-ui&#39;</span><span style="color:#797593;">;</span></span>
<span class="line"><span style="color:#286983;">import </span><span style="color:#EA9D34;">&#39;@kits-ui/theme&#39;</span><span style="color:#797593;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D7827E;">createApp</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">App</span><span style="color:#575279;">)</span><span style="color:#286983;">.</span><span style="color:#D7827E;">use</span><span style="color:#575279;">(</span><span style="color:#575279;font-style:italic;">kitsUi</span><span style="color:#575279;">)</span><span style="color:#286983;">.</span><span style="color:#D7827E;">mount</span><span style="color:#575279;">(</span><span style="color:#EA9D34;">&#39;#app&#39;</span><span style="color:#575279;">)</span><span style="color:#797593;">;</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
