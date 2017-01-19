webpackJsonp([118,185],{406:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Cascader/demo/basic.md",id:"src-components-Cascader-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cascader</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>selectChange<span class="token punctuation">"</span></span> <span class="token attr-name">:default-value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>defaultValue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cascader</span><span class="token punctuation">></span></span>'}],preview:'<cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>',vueScript:"var options = [{\n    value: 'zhejiang',\n    label: '\u6d59\u6c5f',\n    children: [{\n      value: 'hangzhou',\n      label: '\u676d\u5dde',\n      children: [{\n        value: 'xihu',\n        label: '\u897f\u6e56',\n      }],\n    }],\n  }, {\n    value: 'jiangsu',\n    label: '\u6c5f\u82cf',\n    children: [{\n      value: 'nanjing',\n      label: '\u5357\u4eac',\n      children: [{\n        value: 'zhonghuamen',\n        label: '\u4e2d\u534e\u95e8',\n      }],\n    }],\n  }];\n\nvar defaultValue = ['zhejiang', 'hangzhou', 'xihu']\n\nnew Vue({\n  el: 'body',\n  components: {\n    cascader: atui.Cascader\n  },\n  data () {\n    return {\n      options: options,\n      defaultValue: defaultValue\n    }\n  },\n  methods: {\n    selectChange(selectedValue, option) {\n      alert(selectedValue)\n    }\n  }\n})"}}});