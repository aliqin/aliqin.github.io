+++
title = "web远程调试方案推荐"
date = "2014-08-20T00:18:34+08:00"
author = "woodsrong"
tags = []
comments = true
draft = false
share = true
menu = ""
image = ""
+++


![remote_debug_banner](http://img2.tbcdn.cn/L1/461/1/c13240faf3a4b929d6df74f5b274e9249ae70397)

## 什么是web远程调试？
通过dev tools如chrome dev tools, firebug of firefox进行前端js/css/html调试已经是前端工程师的必备技能。随着移动互联网的发展，这一必备技能也随之迁移到移动端。虽然移动网站的数量已经跟上了移动互联网的浪潮，但是移动端浏览器调试工具的发展却落下了。远程调试最佳的解决方案是浏览器自身支持，假如android browser直接开启webkit远程调试端口，基本可以解决目前移动web开发中的绝大部分调试问题。庆幸的是曾经看到新闻，android browser将会替换默认为chrome，到时真是皆大欢喜！

<!--more-->

移动端浏览器dev tools的落后，也促使了第三方调试工具的发展，如比较著名的weinre。

## web远程调试特点
受限于移动端设备屏幕尺寸较小，web远程调试相对桌面浏览器调试有一些显著的特点：

* web page和dev tools必须分离使用才更方便
* web page和dev tools之前通过usb/network同步调试数据
* web page和dev tools之前会有一个proxy server用于双向同步数据

## 流行的web远程调试方案
|   |   Supported target Paltform   |   Supported Features    |
|   ------  |   ------  |   ------  |
|   Weinre  |   Ios4+, android2.1+, firefox, IE10+    |   Elements, resources, network, timeline, console   |
|   Aardwolf    |   Ios, android, WinPhone 7, BlackBerry OS 6+  |   Breakpoint  |
|   Jsconsole   |   Ios4.2+, android2.2.2+, webos   |   Console |
|   DragonFly    |   Opera mobile    |   opera dragon panel |
|   Iphone app (JSConsole app or Bugaboo)    |   Ios    |   Console |
|   [Android adb log](http://developer.android.com/guide/webapps/debugging.html)   |   android2.1+    |   Console |
|   Iphone Safari    |   Ios    |   almost all features |
|   Firefox (android)    |   android    |   almost all features   |
|   UCweb browser dev (android)    |   Ucweb android only    |   almost all features   |
|   QQ browser dev (android)    |   QQBrowser android only    |   almost all features   |
|   [Android webview debug](http://developer.android.com/reference/android/webkit/WebView.html#setWebContentsDebuggingEnabled(boolean))    |   android4.4+ webview    |   almost all features    |
|   [WebKit Remote Debugging protocol](https://www.webkit.org/blog/1620/webkit-remote-debugging/)    |   webkit(pc)    |   almost all features    |
|   [Chrome v8 debugger protocol](https://code.google.com/p/v8/wiki/DebuggerProtocol)    |   V8 javascript engine    |   almost all features   |

## web远程调试方案推荐

### 特定浏览器
* 直接使用官方支持的远程调试
 - [ios safari](https://developer.apple.com/safari/tools/)
 - [android UC browser(dev version)](http://www.uc.cn/business/developer/)
 - [android Chrome](https://developer.chrome.com/devtools/docs/remote-debugging)
 - [android Firefox](https://developer.mozilla.org/zh-CN/docs/Tools/Remote_Debugging/Firefox_for_Android)
 - [Opera mobile](http://www.opera.com/dragonfly/documentation/remote/)

### 其他浏览器

#### [weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html)
* 特点
 - html,css调试，修改后所见即所得
 - console.log输出
 - 简化的timeline面板支持
 - 简化的resources面板支持
* 待改进增强
 - 暂存注入调试js之前的log，调试js注入后输出全部log
 - 调试过程中比较容易断线，调试断线后自动重连；优化调试信息同步，渐进增强从xhr改为socket，传输效率更高

#### [Aardwolf](http://lexandera.com/aardwolf/)
* 特点
 - js断点
 - js运行调用堆栈
* 待改进
 - 调试调用不方便，可考虑直接集成到前端构建grunt/gulp之类

## 参考资料
1. safari远程调试 [https://developer.apple.com/safari/tools/](https://developer.apple.com/safari/tools/)
2. android uc browser开发版远程调试 [http://www.uc.cn/business/developer/](http://www.uc.cn/business/developer/)
3. android chrome远程调试 [https://developer.chrome.com/devtools/docs/remote-debugging](https://developer.chrome.com/devtools/docs/remote-debugging)
4. android Firefox远程调试 [https://developer.mozilla.org/zh-CN/docs/Tools/Remote_Debugging/Firefox_for_Android)
5. Opera移动版远程调试 [http://www.opera.com/dragonfly/documentation/remote/](http://www.opera.com/dragonfly/documentation/remote/)
6. web inspect remote -- weinre远程调试 [http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html)
7. Aardwolf远程调试 [http://lexandera.com/aardwolf/](http://lexandera.com/aardwolf/)
8. android adb log [http://developer.android.com/guide/webapps/debugging.html](http://developer.android.com/guide/webapps/debugging.html)
9. Android webview debug <http://developer.android.com/reference/android/webkit/WebView.html#setWebContentsDebuggingEnabled(boolean)>
10. WebKit Remote Debugging protocol <https://www.webkit.org/blog/1620/webkit-remote-debugging/>
11. Chrome v8 debugger protocol [https://code.google.com/p/v8/wiki/DebuggerProtocol](https://code.google.com/p/v8/wiki/DebuggerProtocol)

## 后续计划
* weinre详细介绍
* Aardwolf详细介绍
* weinre增强：weinre改进/Aardwolf整合