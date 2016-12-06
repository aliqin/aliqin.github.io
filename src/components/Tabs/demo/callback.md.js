webpackJsonp([40,184],{433:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:3,title:{"zh-CN":"\u56de\u8c03","en-US":"Type"},filename:"src/components/Tabs/demo/callback.md",id:"src-components-Tabs-demo-callback"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token operator" >&lt;</span>tabs @on<span class="token operator" >-</span>tab<span class="token operator" >-</span>click<span class="token operator" >=</span><span class="token string" >"handleOnClick"</span><span class="token operator" >></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>tab</span> <span class="token attr-name" >header</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d\u554a\u554a\u554a\u4e2d\u554a\u554a\u554a\u554a\u554a\u554a\u554a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n      \u9009\u9879\u5361\u4e00\u5185\u5bb9\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>tab</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>tab</span> <span class="token attr-name" >header</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n     <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n        \u9009\u9879\u5361\u4e8c\u5185\u5bb9\n     <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>tab</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>tab</span> <span class="token attr-name" >header</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u88ab\u7981\u7528\u7684<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>tab</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>tab</span> <span class="token attr-name" >header</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u88ab\u7981\u7528\u7684<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>tab</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>tab</span> <span class="token attr-name" >header</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n     <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n        \u9009\u9879\u5361\u4e8c\u5185\u5bb9\n     <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>tab</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>tab</span> <span class="token attr-name" >header</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n     <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n        \u9009\u9879\u5361\u4e8c\u5185\u5bb9\n     <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>tab</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>tabs</span><span class="token punctuation" >></span></span>'}],preview:'<tabs @on-tab-click="handleOnClick">\n  <tab header="\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d\u554a\u554a\u554a\u4e2d\u554a\u554a\u554a\u554a\u554a\u554a\u554a">\n    <p>\n      \u9009\u9879\u5361\u4e00\u5185\u5bb9\n    </p>\n  </tab>\n  <tab header="\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d">\n     <p>\n        \u9009\u9879\u5361\u4e8c\u5185\u5bb9\n     </p>\n  </tab>\n  <tab header="\u88ab\u7981\u7528\u7684" disabled>\n    ...\n  </tab>\n  <tab header="\u88ab\u7981\u7528\u7684" disabled>\n    ...\n  </tab>\n  <tab header="\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d">\n     <p>\n        \u9009\u9879\u5361\u4e8c\u5185\u5bb9\n     </p>\n  </tab>\n  <tab header="\u63a8\u5e7f\u77ed\u4fe1\u7b7e\u540d">\n     <p>\n        \u9009\u9879\u5361\u4e8c\u5185\u5bb9\n     </p>\n  </tab>\n</tabs>',vueScript:"let Message = atui.Message\nnew Vue({\n  el: 'body',\n  components: {\n    tabs: atui.Tabs,\n    tab: atui.Tabs.Tab\n  },\n  methods: {\n    handleOnClick (index) {\n      Message.info('\u8fd9\u662f\u7b2c'+ index + '\u4e2aTab')\n    }\n  }\n})"}}});