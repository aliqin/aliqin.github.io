webpackJsonp([120,185],{354:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u6e10\u663e","en-US":"Type"},filename:"src/components/Carousel/demo/fade.md",id:"src-components-Carousel-demo-fade"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">animation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span> <span class="token attr-name">:speed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1000<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://placeholdit.imgix.net/~text?txtsize<span class="token punctuation">=</span>75&amp;txt<span class="token punctuation">=</span>one&amp;w<span class="token punctuation">=</span>400&amp;h<span class="token punctuation">=</span>300&amp;txttrack<span class="token punctuation">=</span>0&amp;bg<span class="token punctuation">=</span>0096e0&amp;txtclr<span class="token punctuation">=</span>fff<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://placeholdit.imgix.net/~text?txtsize<span class="token punctuation">=</span>75&amp;txt<span class="token punctuation">=</span>two&amp;w<span class="token punctuation">=</span>400&amp;h<span class="token punctuation">=</span>300&amp;txttrack<span class="token punctuation">=</span>0&amp;bg<span class="token punctuation">=</span>ff7500&amp;txtclr<span class="token punctuation">=</span>fff<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://placeholdit.imgix.net/~text?txtsize<span class="token punctuation">=</span>75&amp;txt<span class="token punctuation">=</span>three&amp;w<span class="token punctuation">=</span>400&amp;h<span class="token punctuation">=</span>300&amp;txttrack<span class="token punctuation">=</span>0&amp;bg<span class="token punctuation">=</span>e52e2e&amp;txtclr<span class="token punctuation">=</span>fff<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">></span></span>'}],preview:'<carousel animation="fade" :speed="1000" >\n  <slide>\n    <img src="https://placeholdit.imgix.net/~text?txtsize=75&txt=one&w=400&h=300&txttrack=0&bg=0096e0&txtclr=fff">\n  </slide>\n  <slide>\n    <img src="https://placeholdit.imgix.net/~text?txtsize=75&txt=two&w=400&h=300&txttrack=0&bg=ff7500&txtclr=fff">\n  </slide>\n  <slide>\n    <img src="https://placeholdit.imgix.net/~text?txtsize=75&txt=three&w=400&h=300&txttrack=0&bg=e52e2e&txtclr=fff">\n  </slide>\n</carousel>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n      carousel: atui.Carousel,\n      slide: atui.Carousel.Slide\n  },\n  events: {\n    beforeChange (slide) {\n      //console.log('beforeFade',slide)\n    },\n    afterChange (slide) {\n      //console.log('afterFade',slide)\n    }\n  }\n})"}}});