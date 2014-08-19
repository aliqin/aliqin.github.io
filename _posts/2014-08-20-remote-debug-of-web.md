---
layout: post
title: 最佳的web远程调试方案？
---

最佳web远程调试方案
======

## 什么是web远程调试？
通过dev tools如chrome dev tools, firebug of firefox进行前端js/css/html调试已经是前端工程师的必备技能。
随着移动互联网的发展，这一必备技能也随之迁移到移动端。
移动网站的数量已经跟上了移动互联网的浪潮，但是移动端浏览器调试工具的发展却落下了
但是受限于移动端设备屏幕尺寸较小，web page和dev tools必须分离才更方便

## 现有的web远程调试方案汇总


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