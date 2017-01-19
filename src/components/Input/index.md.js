webpackJsonp([98,185],{426:function(t,d){"use strict";t.exports={content:["section",["p","atui.Input"],["blockquote",["p","\u6ce8\u610f\uff1ainput\u5728HTML\u662f\u539f\u751f\u6807\u7b7e\uff0c\u6ce8\u518c\u7ec4\u4ef6\u65f6\u8bf7\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6bd4\u5982vInput"]]],meta:{category:"Components",type:"Form Controls",title:"Input",subtitle:"\u8f93\u5165\u6846",filename:"src/components/Input/index.md"},toc:["ul",["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","prefix-cls"],["td","\u6837\u5f0f\u524d\u7f00"],["td","String"],["td","atui"]],["tr",["td","placeholder"],["td","\u5360\u4f4d\u63d0\u793a"],["td","String"],["td","\u7a7a"]],["tr",["td","value"],["td","\u8f93\u5165\u57df\u6587\u672c"],["td","String"],["td","\u7a7a"]],["tr",["td","large"],["td","\u6309\u94ae\u7ec4\u5c3a\u5bf8\uff0c\u5927"],["td","Boolean"],["td","false"]],["tr",["td","small"],["td","\u6309\u94ae\u7ec4\u5c3a\u5bf8\uff0c\u5c0f"],["td","Boolean"],["td","false"]],["tr",["td","error"],["td","\u589e\u52a0\u9519\u8bef\u6837\u5f0f\uff08\u4e0d\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\uff0c\u63a8\u8350\u901a\u8fc7\u4fee\u6539valid-status\u5c5e\u6027\u7684\u503c\u6765\u63a7\u5236\uff09"],["td","Boolean"],["td","false"]],["tr",["td","success"],["td","\u589e\u52a0\u6210\u529f\u6837\u5f0f\uff08\u4e0d\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\uff0c\u63a8\u8350\u901a\u8fc7\u4fee\u6539valid-status\u5c5e\u6027\u7684\u503c\u6765\u63a7\u5236\uff09"],["td","Boolean"],["td","false"]],["tr",["td","warn"],["td","\u589e\u52a0\u8b66\u544a\u6837\u5f0f\uff08\u4e0d\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\uff0c\u63a8\u8350\u901a\u8fc7\u4fee\u6539valid-status\u5c5e\u6027\u7684\u503c\u6765\u63a7\u5236\uff09"],["td","Boolean"],["td","false"]],["tr",["td","valid-status"],["td","\u5f53\u524d\u9a8c\u8bc1\u72b6\u6001\uff0c\u5982\u4e0d\u8bbe\u7f6e\uff0c\u4f1a\u6839\u636e\u9a8c\u8bc1\u89c4\u5219\u81ea\u52a8\u751f\u6210 \u6709\u4e09\u4e2a\u72b6\u6001\u53ef\u9009\uff1a",["code","error"],",",["code","success"],",",["code","warn"]],["td","String"],["td","\u7a7a"]],["tr",["td","required"],["td","\u89c4\u5219\u9a8c\u8bc1\uff0c\u662f\u5426\u5fc5\u586b"],["td","Boolean"],["td","false"]],["tr",["td","requiredTips"],["td","\u5fc5\u586b\u9a8c\u8bc1\u5931\u8d25\u7684\u63d0\u793a\u6587\u6848"],["td","String"],["td","\u7a7a"]],["tr",["td","maxlength"],["td","\u8f93\u5165\u5185\u5bb9\u6700\u5927\u957f\u5ea6"],["td","String"],["td","\u7a7a"]],["tr",["td","minlength"],["td","\u8f93\u5165\u5185\u5bb9\u6700\u5c0f\u957f\u5ea6"],["td","String"],["td","\u7a7a"]],["tr",["td","minlengthTips"],["td","\u6700\u5c0f\u957f\u5ea6\u9a8c\u8bc1\u5931\u8d25\u7684\u63d0\u793a\u6587\u6848"],["td","String"],["td","\u7a7a"]],["tr",["td","rules"],["td","\u9a8c\u8bc1\u89c4\u5219"],["td","Array"],["td","\u7a7a"]],["tr",["td","rules-tips"],["td","\u9a8c\u8bc1\u89c4\u5219\u5bf9\u5e94\u7684\u9a8c\u8bc1\u5931\u8d25\u65f6\u7684\u63d0\u793a\u6587\u6848"],["td","Array"],["td","\u7a7a"]],["tr",["td","valid-result"],["td","\u6240\u6709\u9a8c\u8bc1\u89c4\u5219\u6821\u9a8c\u540e\u7684\u9a8c\u8bc1\u7ed3\u679c\uff0c\u6bcf\u9879\u9a8c\u8bc1\u89c4\u5219\u90fd\u5bf9\u5e94\u7740\u4e00\u4e2a\u9a8c\u8bc1\u72b6\u6001\uff08success\u6216\u8005error\uff09\uff0c\u4e00\u4e2a\u9a8c\u8bc1\u63d0\u793a"],["td","Object"],["td","\u7a7a"]],["tr",["td","tips"],["td","\u603b\u7684\u63d0\u793a\u6587\u6848\uff0c\u5982\u4e0d\u914d\u7f6e\uff0c\u4f1a\u6839\u636erules\u548crules-tips\u81ea\u52a8\u751f\u6210"],["td","String"],["td","\u7a7a"]]]]]}}});