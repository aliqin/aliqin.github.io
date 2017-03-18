+++
title = "响应式网页设计基础"
date = "2014-05-16T00:18:34+08:00"
author = "shenlm203"
tags = ["响应式Web"]
comments = true
draft = false
share = true
menu = ""
image = ""
+++


使用移动设备上网已然成为一大趋势，但不幸的是，很多网页都没有对这些移动设备做相应的优化。移动设备对网页大小和内容的呈现方式应该与桌面端有所不同。
平板、手机、桌面电脑、游戏机、电视还有可穿戴设备……现在各种各样的设备导致了屏幕尺寸也是五花八门。而且在未来，屏幕的尺寸也会越来越不同，为了跟上这趋势，你的站点应该要尽量去适应各种屏幕尺寸才行。

<!--more-->

<video autoplay="" loop="" controls="" class="responsiveVideo">
    <source src="https://developers.google.com/web/fundamentals/layouts/rwd-fundamentals/videos/resize.webm" type="video/webm">
    <source src="https://developers.google.com/web/fundamentals/layouts/rwd-fundamentals/videos/resize.mp4" type="video/mp4">
</video>
Ethan Marcotte 最先在 A List Apart 中定义了响应式网页设计：网页可以根据用户正在使用的设备来做出响应，布局的更改是基于设备的大小和容量。举例来说，在一部手机上，用户会看到一栏的内容；在平板上，可能内容还是相同的，但是是分两栏呈现的。

# 1 设置视口
针对设备优化的页面需要在文档头部加上meta视口元素，视口标签可以告诉浏览器网页的宽度和缩放程度是什么。

---
***TL;DR***

* 用meta视口标签来控制浏览器视口的宽度和缩放程度。
* 添加width=device-width来适应不同的宽度。
* 添加initial-scale=1,建议一个css像素和设备无关像素的1:1的对应关系。
* 如果用户不能缩放页面的话，要确保你的页面还是可用的。

---

为了提供最好的用户体验，移动端的浏览器会按照桌面端的屏幕宽度来渲染页面（通常是980px左右，这个值会根据设备的不同有所浮动），为了更容易地阅读页面，字体会相应的加大，内容也会有所缩放来适应屏幕。对于用户来说，这么做的结果就是页面上的字体可能忽大忽小，还可能需要双击或者捏动缩放屏幕才能看清内容。
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

用meta视口的width=device-width来控制页面以适应密度无关像素的屏幕的宽度，这样页面就在回流的时候可以适应不同的屏幕尺寸，无论是在小屏幕的移动端或者是大屏幕的桌面端都可以适应。
<img src="http://gtms04.alicdn.com/tps/i4/TB1PQ76FVXXXXXaXXXXcmddOXXX-400-711.png" alt="4" width="50%"><img src="http://gtms01.alicdn.com/tps/i1/TB1Acg3FVXXXXbIXXXXcmddOXXX-400-711.png" alt="4" width="50%">
当横屏的时候，有些浏览器会保持页面的宽度不变然后放大屏幕，而不是用回流重新加载出页面。添加initial-scale=1属性，使得无论手持设备的方向是怎么样的，CSS的像素和密度无关像素都是1:1的关系，另外还能让页面占满整个横屏宽度。
*注意：用逗号来分隔这些属性，以保证老式浏览器的兼容性。*


**确保视口可用**

除了要设置initial-scale,你还可以设置针对视口应用minimum-scale、maximum-scale还有user-scalable属性。不过一旦这几个属性设置好了，用户就没法随意缩放视口了，这对视口的可用性造成了一定问题。

# 2 内容大小适应窗口
无论是在桌面设备还是移动设备上，用户总是习惯性垂直地浏览网页而不是横向地浏览。强制用户更改浏览页面的习惯，或者需要缩小页面才能看到它的全貌，这些都是很差的用户体验。

---
***TL;DR***

* 如果要在元素上使用固定宽度，数值不能太大。
* 不能以某一个特定的视口尺寸作为内容的渲染标准。
* 用CSS媒体查询来定义不同尺寸的屏幕所需要的不同的样式。

---

当你使用meta视口标签开发一个移动站点的时候，常常不小心就创建出不兼容部分视口的页面。举例来说，如果一个图片的宽度超过视口的宽度，就会出现横向滚动条。你需要调整内容来适应视口的宽度，以便用户不需要横向滚动。不同的设备CSS的像素点在屏幕维度和宽度是不一样的（例如手机和平板之间，甚至不同的手机屏幕都不一样），不能用特定的视口宽度来渲染内容。 对页面上的元素设置较大的绝对宽度（下面的例子所示），会导致在屏幕小的设备上,层超出视口的宽度（例子：320px分辨率的设备屏幕，例如iPhone）。所以你需要考虑使用相对的宽度值，比如百分比（例如：width: 100%;）。相似地，在使用数值较大的绝对对的定位时也要小心，小屏幕上可能会出现元素溢出到视口外面的情况。
<img src="http://gtms01.alicdn.com/tps/i1/TB1RM7SFVXXXXbgXVXXyx8dOXXX-400-710.png" alt="" width="50%"><img src="http://gtms02.alicdn.com/tps/i2/TB10HgUFVXXXXcKXFXXcmddOXXX-400-711.png" alt="" width="50%">



# 3 CSS媒体查询实现响应式
媒体查询是一种可以应用在CSS样式上的简易过滤器，它可以根据设备的渲染特性（包括显示类型、宽度、高度、转向甚至是分辨率）来显示不同的样式。

---
***TL;DR***

* 媒体查询可以根据设备特性应用不同的样式。
* 使用min-width确保最大的体验程度。
* 对元素使用相对大小，防止布局被破坏

---

举个例子，你可以把所有需要应用的打印上的样式放入打印媒体查询中：

    <link rel="stylesheet" href="print.css" media="print">

除了在样式表的链接上使用media属性，还有另外两种方式可以实现媒体查询：在CSS文件中添加@media和@import。出于性能的考虑，前两个方法都比使用@import要好。

    @media print {
      /* print style sheets go here */
    }

    @import url(print.css) print;

<!-- todo: 此处与翻译不一致，查阅 -->
媒体查询使用的逻辑不是互斥的，如果过滤器发现符合了某一标准，那么利用CSS的优先级规则使得对应的样式可以生效。 
媒体查询使得响应式的体验得以实现：根据屏幕尺寸的不同，特定的样式得以应用。有了媒体查询语句，就可以根据设备的不同特性应用不同的样式了。
<table class="table-2"><colgroup><col span="1"><col span="1"></colgroup><thead><tr><th data-th="attribute">attribute</th><th data-th="Result">Result</th></tr></thead><tbody><tr><td data-th="attribute"><code>min-width</code></td><td data-th="Result">Rules applied for any browser width over the value defined in the query.</td></tr><tr><td data-th="attribute"><code>max-width</code></td><td data-th="Result">Rules applied for any browser width under the value defined in the query.</td></tr><tr><td data-th="attribute"><code>min-height</code></td><td data-th="Result">Rules applied for any browser height over the value defined in the query.</td></tr><tr><td data-th="attribute"><code>max-height</code></td><td data-th="Result">Rules applied for any browser height under the value defined in the query.</td></tr><tr><td data-th="attribute"><code>orientation=portrait</code></td><td data-th="Result">Rules applied for any browser where the height is greater than or equal to the width.</td></tr><tr><td data-th="attribute"><code>orientation=landscape</code></td><td data-th="Result">Rules for any browser where the width is greater than the height.</td></tr></tbody></table>
来看看下面这个例子：
![](http://gtms03.alicdn.com/tps/i3/TB1l4I5FVXXXXaQXXXXIg6rIVXX-600-360.png)

    <link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
    <link rel="stylesheet" media="(min-width: 640px)" href="min-640px.css">
    <link rel="stylesheet" media="(orientation: portrait)" href="portrait.css">
    <link rel="stylesheet" media="(orientation: landscape)" href="landscape.css">
    <style>
      @media (min-width: 500px) and (max-width: 600px) {
        h1 {
          color: fuchsia;
        }

        .desc:after {
          content:" In fact, it's between 500px and 600px wide.";
        }
      }
    </style>

*说明:*

* 当浏览器宽度在0px到640px之间，max-640px.css就会生效。
* 当浏览器宽度在500px到600px之间，在@media中定义的样式会生效。
* 如果浏览器是在640px或者以上的，min-640px.css会生效。
* 如果浏览器的宽度大于高度，landscape.css就会生效。
* 如果浏览器的高度大于宽度，portrait.css就会生效。


## 3.1 min-device-width的笔记

除了*-width, 还可以根据 *-device-width来设置查询条件。不过这两个属性的差别虽然很小但是非常重要：min-width是基于浏览器窗口的尺寸，win-device-width却是基于屏幕的尺寸。在移动设备上，这一点并不是很重要，毕竟用户是不能在移动设备上调整浏览器窗口大小的。不过在桌面端，用户是可以控制窗口的大小，所以如果网页的内容可以自然适应窗口是最好不过的了。因此，这个情况下你就不应该使用*-device-width，否则在桌面端页面是不会随着浏览器窗口大小的改变而调整的。


## 3.2 使用相对单位

与传统的固定宽度布局对比，响应式设计背后的理念就是流动性和平衡性。使用相对单位的方法，可以简化布局，还能防止创建出大于视口的组件。举例来说，对在最外层的div设置100%的宽度，确保它可以恰恰好占满视口。这样的话，无论是在320px的iPhone，还是342px的黑莓Z10或者360pxNexus 5上，这个div都可以恰好占满视口。另外，使用相对单位还能让浏览器可以根据用户的缩放比例来渲染内容，而不需要添加横向滚动条。
![](http://gtms01.alicdn.com/tps/i1/TB18jI4FVXXXXbKXXXXOx8VKpXX-888-277.png)

# 4 如何选择视图
当你在考虑根据设备的不同来设计视图的时候，请小心！如果视图是依赖于特定的设备、产品、品牌或者操作系统，很可能你会进入维护的噩梦中。所以正确的方式应该是，由内容来决定布局是如何放置在容器中的。

---
***TL;DR***

* 根据内容创建视图，不要依赖于特定的设备、产品或者品牌
* 从最小的移动设备开始，而后逐步提升体验使得屏幕实际使用面增加。
* 一行文本至多70到80个字。

---


## 4.1 从小做起

从小屏幕开始设计内容，然后再扩大到大尺寸的屏幕，直到你需要使用到视图为止。这样你的视图就可以根据内容来优化，而且所使用的视图数量会是最小的，换言之，这么做是有利于后续维护。现在回头看看我们一开始提到的例子：天气预报。现在你要做的第一步就是—让这个页面可以适应小屏幕。
![](http://gtms03.alicdn.com/tps/i3/TB1dIU6FVXXXXbmXXXX1llbOXXX-400-667.png)
接下来，调整浏览器的大小，直到页面元素间留有过多的空白为止，当然现在这个页面看起来挺丑的。虽然说设定宽度的边界值是一个很主观的事情，但是很明显600px以上对于这个页面来说太宽了。
![](http://gtms03.alicdn.com/tps/i3/TB1l9UFFVXXXXXCXVXXIg6rIVXX-600-360.png)
为了在600px的宽度下插入一个视图，我们需要创建两个样式表：一个用于浏览器宽度在600px或者以下；另一个是在宽度大于600px时生效。
    
    <link rel="stylesheet" href="weather.css">
    <link rel="stylesheet" media="(max-width:600px)" href="weather-2-small.css">
    <link rel="stylesheet" media="(min-width:601px)" href="weather-2-large.css">

最后，重构一下你的CSS。在这个例子中，我们有些通用的属性放在weather.css中：字体、图标、基本的定位还有颜色。针对小屏幕的样式放在weather-small.css中，大屏幕的样式则是放在weather-large.css中。
![](http://gtms01.alicdn.com/tps/i1/TB1ziIIFVXXXXXCXVXXIg6rIVXX-600-360.png)

<!-- todo: 翻译不符 -->
## 4.2 使用小型视图

当布局需要有很大改动的时候视图也会大换血，不过当你需要一些小改动的时候，视图也能提供帮助。比如在两个主要视图之间，你可以更改某个元素margin或者padding值，或者增加字号可以使布局显得更自然一些。现在从小屏幕上的布局开始优化天气预报的页面。当视口宽度大于360px的时候要增加字号；接下来，如果有足够空间的话，可以把最高温和最低温分开来，这样他们就能在同一条线上，而不是竖着排列。这样还能用更大的图标来显示天气状况。
    
    @media (min-width: 360px) {
      body {
        font-size: 1.0em;
      }
    }
    
    @media (min-width: 500px) {
      .seven-day-fc .temp-low,
      .seven-day-fc .temp-high {
        display: inline-block;
        width: 45%;
      }
    
      .seven-day-fc .seven-day-temp {
        margin-left: 5%;
      }
    
      .seven-day-fc .icon {
        width: 64px;
        height: 64px;
      }
    }

![](http://gtms04.alicdn.com/tps/i4/TB1C0gJFVXXXXaHXVXX3GI8NVXX-400-632.png)![](http://gtms02.alicdn.com/tps/i2/TB1ZrsTFVXXXXbEXFXXhvg9NVXX-400-640.png)
相似地，对于大屏幕，最好要限制页面的最大宽度，防止整个屏幕都被这个页面占用。
    
     @media (min-width: 700px) {
      .weather-forecast {
        width: 700px;
      }
    }


## 4.3 针对阅读体验优化文本

传统的阅读理论认为理想的文字数量应该是每行70到80个字符（英文中大概是8到9个单词一行），因此如果每行文字超过了10个单词了，你就需要考虑使用新的视图了。
![](http://gtms01.alicdn.com/tps/i1/TB1k1IYFVXXXXbdXpXXcmddOXXX-400-711.png)![](http://gtms04.alicdn.com/tps/i4/TB1ZOA6FVXXXXbAXXXXo_fwIVXX-600-417.png)
现在让我们仔细研究一下上面的博文例子。在相对小的屏幕上，字体是使用Roboto，字号是1em，这样一行就是10个的单词，但是在大屏幕上你就需要换一个视图，不然一行就有太多字了。在这个例子中，如果浏览器的宽度大于575px，理想的内容宽度是550px。
    
      @media (min-width: 575px) {
      article {
        width: 550px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    

## 4.4 不要完全隐藏内容

当你想要根据屏幕尺寸来选择哪里内容是要隐藏的那些内容又是要显示的的时候，一定要小心。不要简单地把不能适应屏幕尺寸的内容直接隐藏，用户需要的并不是屏幕的尺寸。比如说，*天气预报*上的污染指数被隐藏了，那么春季易过敏的用户就不知道外面的天气适不适合出门了。
