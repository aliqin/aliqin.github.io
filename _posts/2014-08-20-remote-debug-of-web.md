---
layout: post
title: 最佳的web远程调试方案
---

## 什么是web远程调试？
通过dev tools如chrome dev tools, firebug of firefox进行前端js/css/html调试已经是前端工程师的必备技能。
随着移动互联网的发展，这一必备技能也随之迁移到移动端。
虽然移动网站的数量已经跟上了移动互联网的浪潮，但是移动端浏览器调试工具的发展却落下了。
远程调试最佳的解决方案是浏览器自身支持，假如android browser直接开启webkit远程调试端口，基本可以解决目前移动web开发中的绝大部分调试问题。
庆幸的是曾经看到新闻，android browser将会替换默认为chrome，到时真是皆大欢喜！

移动端浏览器dev tools的落后，也促使了第三方调试工具的发展，如比较著名的weinre。

## web远程调试特点
受限于移动端设备屏幕尺寸较小，web远程调试相对桌面浏览器调试有一些显著的特点：
* web page和dev tools必须分离使用才更方便
* web page和dev tools之前通过usb/network同步调试数据
* web tools之前会有一个proxy server用于双向同步数据

## 比较流行的web远程调试方案
|   |   Supported target Paltform   |   Supported Features    |
|   ------  |   ------  |   ------  |
|   Weinre  |   Ios4+, android2.1+, firefox, IE10+    |   Elements, resources, network, timeline, console   |
|   Aardwolf    |   Ios, android, WinPhone 7, BlackBerry OS 6+  |   Breakpoint  |
|   Jsconsole   |   Ios4.2+, android2.2.2+, webos   |   Console |
|   DragonFly    |   Opera mobile    |   opera dragon panel |
|   Iphone app (JSConsole app or Bugaboo)    |   Ios    |   Console |
|   Iphone Safari    |   Ios    |   almost all |
|   UCweb browser dev (android)    |   Ucweb android only    |   almost all features   |
|   QQ browser dev (android)    |   QQBrowser android only    |   almost all features   |
|   WebKit Remote Debugging protocol    |   webkit(pc)    |   almost all features    |
|   Chrome v8 debugger protocol    |   V8 javascript engine    |   Breakpoint   |

## 最佳的web远程调试方案

### 特定浏览器
* 直接使用官方支持的远程调试
 - ios safari[^safari]
 - android UC browser(dev version)[^UC]
 - android QQ browser(dev version)
 - android Chrome[^chrome]
 - Opera mobile[^Opera]

### 其他浏览器

#### weinre[^weinre]
* 特点
 - html,css调试，修改后所见即所得
 - console.log输出
 - 简化的timeline面板支持
 - 简化的resources面板支持
* 待改进增强
 - 暂存注入调试js之前的log，调试js注入后输出全部log
 - 调试过程中比较容易断线，调试断线后自重重连；优化调试信息同步，渐进增强从xhr改为socket，传输效率更高

#### Aardwolf[^Aardwolf]
* 特点
 - js断点
 - js运行调用堆栈
* 待改进
 - 调试调用不方便，可考虑直接集成到前端构建grunt/gulp之类

## 参考资料
[^safari]: safari远程调试 [https://developer.apple.com/safari/tools/](https://developer.apple.com/safari/tools/)
[^UC]: android uc browser开发版远程调试 [http://www.uc.cn/business/developer/](http://www.uc.cn/business/developer/)
[^chrome]: android chrome远程调试 [https://developer.chrome.com/devtools/docs/debugger-protocol](https://developer.chrome.com/devtools/docs/debugger-protocol)
[^Opera]: Opera移动版远程调试 [http://www.opera.com/dragonfly/documentation/remote/](http://www.opera.com/dragonfly/documentation/remote/)
[^weinre]: web inspect remote -- weinre远程调试 [http://people.apache.org/~pmuellr/weinre/](http://people.apache.org/~pmuellr/weinre/)
[^Aardwolf]: Aardwolf远程调试[http://lexandera.com/aardwolf/](http://lexandera.com/aardwolf/)