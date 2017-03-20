+++
title = "如何成为一名Chrome应用开发者"
date = "2016-04-03T21:42:50+08:00"
author = "0326"
tags = []
comments = true
draft = false
share = true
weight = 10
menu = ""
image = ""
+++


![Chrome网上应用店](http://upload-images.jianshu.io/upload_images/1665040-6d089496fdf86493.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Chrome网上应用店有丰富的应用和插件，这些工具极大的提高了我们的生产效率。不过本文不是给大家推荐那些精品插件名单，而是教你如何作为一名开发者，为Chrome贡献自己的插件。

<!--more-->

## 准备工作

#### 万里长城第零步，首先你得先翻墙

推荐用收费的VPN，以便于后续的一系列工作。不要把精力都花在了弄免费的翻墙工具上，毕竟收费的也不贵。

#### 万里长城第一步，不必去办VISA卡

要想在Chrome网上应用店（下文简称webstore）发布应用，需要在webstore[的开发者信息中心](https://chrome.google.com/webstore/developer/dashboard/)注册一下，填信息的时候你会发现没有中国大陆地区，所以Google在暗示天朝人民要用假的地址注册，于是我机智的选择了宝岛台湾。

然后Google还要你提供一个VISA/MasterCard账号，用来缴纳5美元注册费。我差点就真去办VISA卡了，后来网上一查，国内的VISA卡可能会认证失败，去淘宝上买虚拟卡又不放心，奋战一小时后我发现一个神奇的网站：[全球付](https://www.globalcash.hk/).

![mastercard](http://upload-images.jianshu.io/upload_images/1665040-79d505b3421a5b87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这网站专门用来搞全球购物的，冲100块钱，自动给你生成MasterCard账号，然后你就可以拿这个卡号信息去注册webstore开发者了，分分钟验证通过，并没有网友说的那么麻烦。

至于剩下的钱，你可以买点儿别的，或者转到其他银行卡里,机智如我。

## 应用开发

#### 基础入门

webstore有四种程序类别：应用、游戏、扩展程序、主题背景。

放心，都是用JS来写的，对于前端来说只有一星门槛。本文不会讲具体基础开发知识，因为这里已经有非常好的教学资料了：
- [Chrome 扩展及应用开发](http://www.ituring.com.cn/book/1421).来自图灵社区的免费电子书，适合入门。
- [Chrome扩展开发文档](http://open.chrome.360.cn/extension_dev/overview.html).来自360极速浏览器翻译的官方文档。
- [Chrome 插件开发官方文档(英文)](https://developer.chrome.com/extensions).前两个适合入门，实际开发的时候还是推荐官方的，查API啥的都很方便。

#### 经验之谈
webstore开发本人其实也是新手，但些许经验应该能帮助到其他人：

##### 1.如何优雅的调试

右键Chrome工具栏的小图标会弹出一个窗口，选择**审查弹出内容**即可调试。
但是这种方法极度低效，直接chrome://extensions/找到你插件的ID：

![Chrome 插件 ID](http://upload-images.jianshu.io/upload_images/1665040-75cb3e37b3f1b0b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后浏览器访问：
```
chrome-extension://<插件ID>/插件入口html文件
```
比如我的是：
```
chrome-extension://fnfchnalfnjbjbfeccpophocngdgapad/index.html
```
然后就可以愉快的调试了。

##### 2.如何查看其他插件的源码

访问chrome://version 找到Chrome插件安装的本机目录：

![chrome://version](http://upload-images.jianshu.io/upload_images/1665040-b0972ea4f1c6ffa7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后找到extension目录，所有插件和数据都在这里，可以随便参考其他插件源码。

##### 3.不要把JS代码写在html文件里
出于安全考虑，入口html文件中的JS代码只能通过script标签引用外部脚本文件，内嵌的JS代码会失效的。

##### 4.注意国际化
webstore面向的是全球用户，你辛辛苦苦写的小工具肯定不想只限于国内用户吧，所以在你的项目里面加上_locales文件夹，写代码的时候时刻考虑到如何才能更好地支持国际化。

##### 5.用好Google
开发遇到的问题Google一下一般能找到，StackOverflow 和Google网上论坛这两个站点要尤其留意，大部分问题这上面都有解决方案。

更多小技巧就不一一列举了，多看官方文档，有更详细的介绍。

## 应用发布
应用写好之后打包上传就好了，上传时Google会让你提供几张宣传图片，每一个需要填写的选项后面都有详细说明，需要认真阅读一下。

发布之后大概过上几个小时就能在webstore搜索到你的应用了：

![iBookmark](http://upload-images.jianshu.io/upload_images/1665040-aca4040d210fbca7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

至此大功告成，之后可以继续关注你的应用情况，适时更新。
最后附上自己写的一个Chrome收藏夹插件源码，仅供参考交流：
[https://github.com/0326/iBookmark](https://github.com/0326/iBookmark)