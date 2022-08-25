import{_ as i,o as l,c as u,a,w as t,e as o,r as p,b as n,d as s}from"./app.84f9d8ff.js";const r={},d=o(`<h1 id="vue-api" tabindex="-1"><a class="header-anchor" href="#vue-api" aria-hidden="true">#</a> Vue API</h1><p>Oui \u6846\u67B6\u5728 Vue \u4E2D\u6CE8\u518C\u4E86\u4E00\u4E9B\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u65B9\u4FBF\u5404\u4E2A\u9875\u9762\u8C03\u7528\u3002 \u6587\u6863\u4E2D\u4F7F\u7528 <code>vm</code> (ViewModel \u7684\u7F29\u5199) \u8FD9\u4E2A\u53D8\u91CF\u540D\u8868\u793A Vue \u5B9E\u4F8B\u3002</p><h2 id="vm-oui" tabindex="-1"><a class="header-anchor" href="#vm-oui" aria-hidden="true">#</a> vm.$oui</h2><h3 id="state-\u5168\u5C40\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#state-\u5168\u5C40\u72B6\u6001" aria-hidden="true">#</a> state: \u5168\u5C40\u72B6\u6001</h3><p>\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u5305\u62EC\u5982\u4E0B\u5B57\u6BB5</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>locale</td><td>String</td><td>\u5F53\u524D\u8BED\u8A00</td></tr><tr><td>theme</td><td>String</td><td>\u5F53\u524D\u4E3B\u9898</td></tr><tr><td>hostname</td><td>String</td><td>\u5F53\u524D\u7CFB\u7EDF\u7684\u4E3B\u673A\u540D</td></tr></tbody></table><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ $oui.state.locale }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ $oui.state.theme }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ $oui.state.hostname }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call-\u8C03\u7528\u540E\u7AEF\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#call-\u8C03\u7528\u540E\u7AEF\u63A5\u53E3" aria-hidden="true">#</a> call: \u8C03\u7528\u540E\u7AEF\u63A5\u53E3</h3><ul><li>\u7528\u6CD5: vm.$oui.call(mod, func, [param])</li><li>\u53C2\u6570 <ul><li>mod - \u6A21\u5757\u540D\uFF0C\u5BF9\u5E94\u7740\u7CFB\u7EDF\u4E2D\u7684 <code>/usr/share/oui/rpc</code> \u76EE\u5F55\u4E0B\u7684\u4E00\u4E2A <code>Lua</code> \u6587\u4EF6\u540D\uFF08\u4E0D\u5E26\u540E\u7F00\uFF09</li><li>func - \u65B9\u6CD5\u540D\uFF0C\u5BF9\u5E94\u4E0A\u9762\u7684 <code>Lua</code> \u6587\u4EF6\u5BFC\u51FA\u7684 <code>Table</code> \u4E2D\u7684\u4E00\u4E2A\u65B9\u6CD5</li><li>param - \u4F20\u9012\u7ED9\u8981\u8C03\u7528\u7684\u65B9\u6CD5\u7684\u53C2\u6570</li></ul></li><li>\u8FD4\u56DE\u503C: Promise</li></ul>`,9),k=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$oui"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"call"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'system'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'get_cpu_time'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" times "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token operator"},"..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-lua ext-lua line-numbers-mode"},[n("pre",{class:"language-lua"},[n("code",null,[n("span",{class:"token comment"},"-- /usr/share/oui/rpc/system.lua"),s(`

`),n("span",{class:"token keyword"},"local"),s(" fs "),n("span",{class:"token operator"},"="),s(" require "),n("span",{class:"token string"},"'oui.fs'"),s(`

`),n("span",{class:"token keyword"},"local"),s(" M "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" M"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get_cpu_time"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"local"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"for"),s(" line "),n("span",{class:"token keyword"},"in"),s(" io"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lines"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/proc/stat'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"do"),s(`
        `),n("span",{class:"token keyword"},"local"),s(" cpu "),n("span",{class:"token operator"},"="),s(" line"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"match"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'^(cpu%d?)'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" cpu "),n("span",{class:"token keyword"},"then"),s(`
            `),n("span",{class:"token keyword"},"local"),s(" times "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"for"),s(" field "),n("span",{class:"token keyword"},"in"),s(" line"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"gmatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'%S+'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"do"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token keyword"},"not"),s(" field"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"match"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cpu'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"then"),s(`
                    times`),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"#"),s("times "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"tonumber"),n("span",{class:"token punctuation"},"("),s("field"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token keyword"},"end"),s(`
            `),n("span",{class:"token keyword"},"end"),s(`
            result`),n("span",{class:"token punctuation"},"["),s("cpu"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` times
        `),n("span",{class:"token keyword"},"end"),s(`
    `),n("span",{class:"token keyword"},"end"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" times "),n("span",{class:"token operator"},"="),s(" result "),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"end"),s(`

`),n("span",{class:"token keyword"},"return"),s(` M
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=o(`<h3 id="ubus-\u5BF9-call-\u7684\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#ubus-\u5BF9-call-\u7684\u5C01\u88C5" aria-hidden="true">#</a> ubus: \u5BF9 call \u7684\u5C01\u88C5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">ubus</span><span class="token punctuation">(</span><span class="token string">&#39;system&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;validate_firmware_image&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/tmp/firmware.bin&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> valid <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u4EF7\u4E8E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$oui</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;ubus&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;call&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">object</span><span class="token operator">:</span> <span class="token string">&#39;system&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;validate_firmware_image&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/tmp/firmware.bin&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="login-\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#login-\u767B\u5F55" aria-hidden="true">#</a> login\uFF1A\u767B\u5F55</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logout-\u9000\u51FA\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#logout-\u9000\u51FA\u767B\u5F55" aria-hidden="true">#</a> logout: \u9000\u51FA\u767B\u5F55</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setlocale-\u5207\u6362\u8BED\u8A00" tabindex="-1"><a class="header-anchor" href="#setlocale-\u5207\u6362\u8BED\u8A00" aria-hidden="true">#</a> setLocale: \u5207\u6362\u8BED\u8A00</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token string">&#39;en-US&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="settheme-\u5207\u6362\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#settheme-\u5207\u6362\u4E3B\u9898" aria-hidden="true">#</a> setTheme: \u5207\u6362\u4E3B\u9898</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sethostname-\u8BBE\u7F6E\u7CFB\u7EDF\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#sethostname-\u8BBE\u7F6E\u7CFB\u7EDF\u4E3B\u673A\u540D" aria-hidden="true">#</a> setHostname: \u8BBE\u7F6E\u7CFB\u7EDF\u4E3B\u673A\u540D</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">setHostname</span><span class="token punctuation">(</span><span class="token string">&#39;OpenWrt&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F60\u9700\u8981\u901A\u8FC7\u8C03\u7528\u8BE5\u51FD\u6570\u6765\u8BBE\u7F6E\u4E3B\u673A\u540D\uFF0C\u8FD9\u6837 <code>$oui.state.hostname</code> \u624D\u80FD\u5F97\u5230\u66F4\u65B0\u3002</p></div><h3 id="reloadconfig-\u91CD\u8F7D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#reloadconfig-\u91CD\u8F7D\u914D\u7F6E" aria-hidden="true">#</a> reloadConfig: \u91CD\u8F7D\u914D\u7F6E</h3><p>\u5BF9\u4E0B\u9762\u7684 ubus \u64CD\u4F5C\u7684\u5C01\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ubus call <span class="token function">service</span> event <span class="token string">&#39;{&quot;type&quot;:&quot;config.change&quot;, &quot;data&quot;: {&quot;package&quot;: &quot;system&quot;}}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">reloadConfig</span><span class="token punctuation">(</span><span class="token string">&#39;system&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="reconnect-\u7B49\u5F85\u7CFB\u7EDF\u91CD\u542F\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#reconnect-\u7B49\u5F85\u7CFB\u7EDF\u91CD\u542F\u5B8C\u6210" aria-hidden="true">#</a> reconnect: \u7B49\u5F85\u7CFB\u7EDF\u91CD\u542F\u5B8C\u6210</h3><p>\u5F53\u6267\u884C\u91CD\u542F\u64CD\u4F5C\u65F6\uFF0C\u8BE5\u65B9\u6CD5\u6BD4\u8F83\u6709\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$oui<span class="token punctuation">.</span><span class="token function">reconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timer" tabindex="-1"><a class="header-anchor" href="#timer" aria-hidden="true">#</a> $timer</h2><p>\u4F60\u4EE5\u524D\u53EF\u80FD\u662F\u8FD9\u6837\u5199\u7684\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">timer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>interval<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>vm.$timer</code> \u540E\uFF0C\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getDhcpLeases</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$timer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;dhcp&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getDhcpLeases<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">repeat</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vm.$timer.create</code> \u63A5\u53D7 3 \u4E2A\u53C2\u6570\uFF1A</p><ul><li>name: \u5B9A\u65F6\u5668\u540D\u79F0(\u4E0D\u80FD\u91CD\u590D)</li><li>callback: \u56DE\u8C03\u65B9\u6CD5</li><li>option: \u9009\u9879</li></ul><p>\u5176\u4E2D <code>option</code> \u5305\u62EC\u5982\u4E0B\u5B57\u6BB5\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>time</td><td>Number</td><td>\u8D85\u65F6\u65F6\u95F4\u6216\u8005\u95F4\u9694\u65F6\u95F4\uFF08\u9ED8\u8BA4\u503C\u4E3A 1000\uFF09</td></tr><tr><td>autostart</td><td>Boolean</td><td>\u662F\u5426\u521B\u5EFA\u540E\u81EA\u52A8\u542F\u52A8\uFF08\u9ED8\u8BA4\u4E3A true\uFF09</td></tr><tr><td>immediate</td><td>Boolean</td><td>\u521B\u5EFA\u540E\u662F\u5426\u7ACB\u5373\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570</td></tr><tr><td>repeat</td><td>Boolean</td><td>\u662F\u5426\u91CD\u590D</td></tr></tbody></table><p><code>vm.$timer.start</code>\uFF1A\u542F\u52A8\u5B9A\u65F6\u5668</p><p><code>vm.$timer.stop</code>\uFF1A\u505C\u6B62\u5B9A\u65F6\u5668(\u7528\u6237\u65E0\u9700\u8C03\u7528\u8BE5\u51FD\u6570\uFF0C\u9664\u975E\u6709\u7279\u522B\u9700\u8981)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$timer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$timer<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="md5" tabindex="-1"><a class="header-anchor" href="#md5" aria-hidden="true">#</a> $md5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> md5 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$md5</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36);function h(b,g){const e=p("CodeGroupItem"),c=p("CodeGroup");return l(),u("div",null,[d,a(c,null,{default:t(()=>[a(e,{title:"Vue",active:""},{default:t(()=>[k]),_:1}),a(e,{title:"Lua"},{default:t(()=>[v]),_:1})]),_:1}),m])}var y=i(r,[["render",h],["__file","vue-api.html.vue"]]);export{y as default};
