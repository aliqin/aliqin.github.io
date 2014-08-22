---
layout: post
title: Google Web开发最佳实践（二）
---

#多设备布局

#1 响应式网页设计基础
使用移动设备上网已然成为一大趋势，但不幸的是，很多网页都没有对这些移动设备做相应的优化。移动设备对网页大小和内容的呈现方式应该与桌面端有所不同。
平板、手机、桌面电脑、游戏机、电视还有可穿戴设备……现在各种各样的设备导致了屏幕尺寸也是五花八门。而且在未来，屏幕的尺寸也会越来越不同，为了跟上这趋势，你的站点应该要尽量去适应各种屏幕尺寸才行。
<video autoplay="" loop="" controls="" class="responsiveVideo">
    <source src="https://developers.google.com/web/fundamentals/layouts/rwd-fundamentals/videos/resize.webm" type="video/webm">
    <source src="https://developers.google.com/web/fundamentals/layouts/rwd-fundamentals/videos/resize.mp4" type="video/mp4">
</video>
Ethan Marcotte 最先在 A List Apart 中定义了响应式网页设计：网页可以根据用户正在使用的设备来做出响应，布局的更改是基于设备的大小和容量。举例来说，在一部手机上，用户会看到一栏的内容；在平板上，可能内容还是相同的，但是是分两栏呈现的。

##1.1 设置视口
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

##1.2 内容大小适应窗口
无论是在桌面设备还是移动设备上，用户总是习惯性垂直地浏览网页而不是横向地浏览。强制用户更改浏览页面的习惯，或者需要缩小页面才能看到它的全貌，这些都是很差的用户体验。

---
***TL;DR***

* 如果要在元素上使用固定宽度，数值不能太大。
* 不能以某一个特定的视口尺寸作为内容的渲染标准。
* 用CSS媒体查询来定义不同尺寸的屏幕所需要的不同的样式。

---
当你使用meta视口标签开发一个移动站点的时候，常常不小心就创建出不兼容部分视口的页面。举例来说，如果一个图片的宽度超过视口的宽度，就会出现横向滚动条。你需要调整内容来适应视口的宽度，以便用户不需要横向滚动。不同的设备CSS的像素点在屏幕维度和宽度是不一样的（例如手机和平板之间，甚至不同的手机屏幕都不一样），不能用特定的视口宽度来渲染内容。 对页面上的元素设置较大的绝对宽度（下面的例子所示），会导致在屏幕小的设备上,层超出视口的宽度（例子：320px分辨率的设备屏幕，例如iPhone）。所以你需要考虑使用相对的宽度值，比如百分比（例如：width: 100%;）。相似地，在使用数值较大的绝对对的定位时也要小心，小屏幕上可能会出现元素溢出到视口外面的情况。
<img src="http://gtms01.alicdn.com/tps/i1/TB1RM7SFVXXXXbgXVXXyx8dOXXX-400-710.png" alt="" width="50%"><img src="http://gtms02.alicdn.com/tps/i2/TB10HgUFVXXXXcKXFXXcmddOXXX-400-711.png" alt="" width="50%">

##1.3 CSS媒体查询实现响应式
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


**min-device-width的笔记**

除了*-width, 还可以根据 *-device-width来设置查询条件。不过这两个属性的差别虽然很小但是非常重要：min-width是基于浏览器窗口的尺寸，win-device-width却是基于屏幕的尺寸。在移动设备上，这一点并不是很重要，毕竟用户是不能在移动设备上调整浏览器窗口大小的。不过在桌面端，用户是可以控制窗口的大小，所以如果网页的内容可以自然适应窗口是最好不过的了。因此，这个情况下你就不应该使用*-device-width，否则在桌面端页面是不会随着浏览器窗口大小的改变而调整的。


**使用相对单位**

与传统的固定宽度布局对比，响应式设计背后的理念就是流动性和平衡性。使用相对单位的方法，可以简化布局，还能防止创建出大于视口的组件。举例来说，对在最外层的div设置100%的宽度，确保它可以恰恰好占满视口。这样的话，无论是在320px的iPhone，还是342px的黑莓Z10或者360pxNexus 5上，这个div都可以恰好占满视口。另外，使用相对单位还能让浏览器可以根据用户的缩放比例来渲染内容，而不需要添加横向滚动条。
![](http://gtms01.alicdn.com/tps/i1/TB18jI4FVXXXXbKXXXXOx8VKpXX-888-277.png)

##1.4 如何选择视图
当你在考虑根据设备的不同来设计视图的时候，请小心！如果视图是依赖于特定的设备、产品、品牌或者操作系统，很可能你会进入维护的噩梦中。所以正确的方式应该是，由内容来决定布局是如何放置在容器中的。

---
***TL;DR***

* 根据内容创建视图，不要依赖于特定的设备、产品或者品牌
* 从最小的移动设备开始，而后逐步提升体验使得屏幕实际使用面增加。
* 一行文本至多70到80个字。

---


**从小做起**

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


**使用小型视图**

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


**针对阅读体验优化文本**

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
    

**不要完全隐藏内容**

当你想要根据屏幕尺寸来选择哪里内容是要隐藏的那些内容又是要显示的的时候，一定要小心。不要简单地把不能适应屏幕尺寸的内容直接隐藏，用户需要的并不是屏幕的尺寸。比如说，*天气预报*上的污染指数被隐藏了，那么春季易过敏的用户就不知道外面的天气适不适合出门了。

#2 响应式网页设计模式

虽然响应式网页设计模式正在快速发展，不过已经有几种成熟的设计模式可以流畅地兼容桌面端和移动端设备。
大多数响应式网页的布局可以归纳为五种设计模式：mostly fluid、column drop、layout shifter、tiny tweaks和off canvas。一些情况下，页面可能会采用组合设计模式，例如组合使用column drop和off canvas。这些设计模式最初都是由Luke Wroblewski定义的，它们为响应式页面提供了一个坚实的基础。
为创建简单易懂的示例，下面每一个案例都是基于flexbox通过真实的标签创建的，主要是在一个主div内放置了三个内容div。每个示例都是先从定义最小视图开始，然后在必要时候加上响应节点。尽管需要依赖特定前缀来实现最佳效果，但是flexbox布局模式已经可以很好的支持主流浏览器。


##2.1 mostly fluid

Mostly fluid设计模式主要由流体式栅格（fluid grid）构成。不管是大尺寸还是中型屏幕，它保持主体内容的大小，只调整主体与屏幕两边的边距。遇到更小的屏幕时，流体式栅格布局会让主体内容“流动”起来，形成堆栈式纵向排列布局。这种方式有个好处是，它通常只要在大屏幕和小屏幕之间设置一个响应点即可。
![](https://developers.google.com/web/fundamentals/layouts/rwd-patterns/imgs/mostly-fluid.svg)
在最小视图情况下，每个内容div都垂直排列，一旦屏幕达到600px宽时，第一个内容div保持宽度100%，而下面两个div如图所示，两列并排位于第一个div下方。超过800px宽时，主容器div会固定宽度并在屏幕上居中。

*使用这种设计模式的网站包括：*
[A List Apart](http://mediaqueri.es/ala/)
[Media Queries](http://mediaqueri.es/)
[SimpleBits](http://simplebits.com/)

    .container {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-flow: row wrap;
      flex-flow: row wrap;
    }

    .c1, .c2, .c3, .c4, .c5 {
      width: 100%;
    }

    @media (min-width: 600px) {
      .c2, .c3, .c4, .c5 {
        width: 50%;
      }
    }

    @media (min-width: 800px) {
      .c1 {
        width: 60%;
      }
      .c2 {
        width: 40%;
      }
      .c3, .c4, .c5 {
        width: 33.33%;
      }
    }

    @media (min-width: 800px) {
      .container {
        width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
    }


##2.2 Column drop
对于满宽和多列的布局来说，column drop布局法在屏幕变小导致容不下太多内容时，会纵向排列div，最终使每一层都纵向垂直排列。这种布局方式，可以根据内容情况来选择响应点，改变响应点来适应不同设计。
![](https://developers.google.com/web/fundamentals/layouts/rwd-patterns/imgs/column-drop.svg)
与mostly fluid的示例类似，这种布局在最小视图下每块内容纵向依次排列。然而，当屏幕宽度超过600px时，第一个和第二个内容div占据了屏幕全部宽度。Div层的顺序则根据CSS中的order属性排列。当宽度达到800px时，三个内容div一起出现，并占据屏幕的全部宽度。

*使用这种设计模式的网站包括：*
[Modernizr](http://modernizr.com/)
[Wee Nudge](http://weenudge.com/)

     .container {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-flow: row wrap;
      flex-flow: row wrap;
    }

    .c1, .c2, .c3 {
      width: 100%;
    }

    @media (min-width: 600px) {
      .c1 {
        width: 60%;
        -webkit-order: 2;
        order: 2;
      }

      .c2 {
        width: 40%;
        -webkit-order: 1;
        order: 1;
      }

      .c3 {
        width: 100%;
        -webkit-order: 3;
        order: 3;
      }
    }


    @media (min-width: 800px) {
      .c2 {
        width: 20%;
      }

      .c3 {
        width: 20%;
      }
    }


##2.3 layout shifter
Layout shifter布局是响应能力最强的，它通过多个响应点来适应多种屏幕宽度。这种布局的关键在于，内容不是向下流动或移到到其他列下面，而是四处移动。由于每个响应点对应的布局有巨大的差异，所以要保持一致需要更复杂的操作，并可能需要对元素内部做出改动，而不仅仅是改变全局布局。
![](https://developers.google.com/web/fundamentals/layouts/rwd-patterns/imgs/layout-shifter.svg)
这个简化的例子展示了layout shifter的设计模式。其处于小屏幕情况时，内容div纵向排列。但当屏幕变大时，布局发生了很大的改变，布局形成左边一个div层，而右边由两个div层垂直排列组成。

*使用这种设计模式的网站包括：*
[Food Sense](http://foodsense.is/)
[Seminal Responsive Design Example](http://alistapart.com/d/responsive-web-design/ex/ex-site-FINAL.html)
[Andersson-Wise Architects](http://www.anderssonwise.com/)

    .container {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-flow: row wrap;
      flex-flow: row wrap;
    }

    .c1, .c2, .c3, .c4 {
      width: 100%;
    }

    @media (min-width: 600px) {
      .c1 {
        width: 25%;
      }

      .c4 {
        width: 75%;
      }

    }

    @media (min-width: 800px) {
      .container {
        width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
    }

##2.4 tiny tweaks
Tiny tweaks会对布局做出细微的改变，比如调整字体大小、缩放图片尺寸或细微地移动内容。这种布局对于单列布局非常适合，比如单页面线性网站和以文章为主的网站。
![](https://developers.google.com/web/fundamentals/layouts/rwd-patterns/imgs/tiny-tweaks.svg)
正如其名，示例在随着屏幕尺寸变动时改动非常小。当屏幕宽度越来越大时，字体大小和行距也跟着变大。

*使用这种设计模式的网站包括：*
[Opera’s Shiny Demos](http://shinydemos.com/)
[Ginger Whale](http://gingerwhale.com/)
[Future Friendly](http://futurefriendlyweb.com/)
    
    .c1 {
      padding: 10px;
      width: 100%;
    }

    @media (min-width: 500px) {
      .c1 {
        padding: 20px;
        font-size: 1.5em;
      }
    }

    @media (min-width: 800px) {
      .c1 {
        padding: 40px;
        font-size: 2em;
      }
    }

##2.5 off canvas
与堆栈式垂直排列内容列不同，off canvas设计模式将不常用的内容（也许是导航或屏幕外的菜单）只在大屏幕情况下显示，而在小屏幕下只显示主要内容。
![](https://developers.google.com/web/fundamentals/layouts/rwd-patterns/imgs/off-canvas.svg)
与垂直纵向排列内容不同，这个示例中通过transform: translate(-250px, 0)来隐藏两个内容div层， 然后使用JavaScript控制元素样式的增加来显示隐藏层。随着屏幕变得更宽，会移除元素设置为屏幕外的定位布局，然后在可视范围内中显示出来。

*使用这种设计模式的网站包括：*
[HTML5Rocks Articles](http://www.html5rocks.com/en/tutorials/developertools/async-call-stack/)
[Google Nexus](http://www.google.com/nexus/)
[Facebook’s Mobile Site](https://m.facebook.com/)
    
    body {
      overflow-x: hidden;
    }
    
    .container {
      display: block;
    }

    .c1, .c3 {
      position: absolute;
      width: 250px;
      height: 100%;
    
      /*
        This is a trick to improve performance on newer versions of Chrome
        #perfmatters
      */
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;

      -webkit-transition: -webkit-transform 0.4s ease-out;
      transition: transform 0.4s ease-out;
    
      z-index: 1;
    }

    .c1 {
      /*
      Using translate3d as a trick to improve performance on older versions of Chrome
      See: http://aerotwist.com/blog/on-translate3d-and-layer-creation-hacks/
      #perfmatters
      */
      -webkit-transform: translate(-250px,0);
      transform: translate(-250px,0);
    }

    .c2 {
      width: 100%;
      position: absolute;
    }
    
    .c3 {
      left: 100%;
    }

    .c1.open {
      -webkit-transform: translate(0,0);
      transform: translate(0,0);
    }

    .c3.open {
      -webkit-transform: translate(-250px,0);
      transform: translate(-250px,0);
    }
    
    @media (min-width: 500px) {
      /* If the screen is wider then 500px, use Flexbox */
      .container {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row nowrap;
        flex-flow: row nowrap;
      }
      .c1 {
        position: relative;
        -webkit-transition: none 0s ease-out;
        transition: none 0s ease-out;
        -webkit-transform: translate(0,0);
        transform: translate(0,0);
      }
      .c2 {
        position: static;
      }
    }

    @media (min-width: 800px) {
      body {
        overflow-x: auto;
      }
      .c3 {
        position: relative;
        left: auto;
        -webkit-transition: none 0s ease-out;
        transition: none 0s ease-out;
        -webkit-transform: translate(0,0);
        transform: translate(0,0);
      }
    }


#3 导航和行为模式

##3.1 应用栏
多年使用互联网的经验告诉用户所有桌面站点都应该有一个页头（page header），但是在移动端，你需要的就是应用栏（APP Bar）。
![](http://gtms04.alicdn.com/tps/i4/TB1UXw6FVXXXXaWXXXXRnHmQFXX-2047-1090.png)
每到一个站点，用户总是希望在每一个页面的顶端看到站点的logo，而且当用户点击顶端的logo时，他能再回到主页。在用户的传统认知中，网页都需要有个页头作为上述功能的载体，对应的在移动端则需要应用栏。

---
***TL;DR***

- logo要放在每一屏的最顶端，用户可以通过点击logo回到主页。
- 如果你有一个目录按钮，将它放在应用栏的最左或者最右，而且整个站点的目录按钮都要在相同的位置，不能忽左忽右的。
- 页面上一些关键的操作应该放在应用栏上。

---

应用栏包含有三点：

* 站点logo
* 主要动作
* （可选）菜单按钮

几乎所有在互联网里的站点都有发生动作的地方，就拿搜索来说：将按钮放在应用栏上来做一些交互，会培养用户养成某些习惯，使得看到当前页面他们就会知道需要怎么和网页交互。
如果你需要菜单，将汉堡包图标（三条横线）放在应用栏的最左或者最右。一旦你选定好了图标的位置，就不要再改动它了，也就是站点上所有的页面都在相同的位置放置上这样一个图标，这样用户学习使用你的站点的成本就非常的低。

**按钮在左边还是右边**
如果在菜单上你想要添加滑动，那么菜单最好是要放在左边或者右边。
页面的左上角应该算是UI设计中最重要的一个位置，但如果是单手持机，这也是最难触碰到的位置。而将菜单放在右上角会突出这个图标，显示它的重要性，但是单手持机的时候，这个位置又容易被误碰。
<img src="http://gtms02.alicdn.com/tps/i2/TB1D.kYFVXXXXaXXFXXWgIpNFXX-608-360.png" alt="" width="50%"><img src="http://gtms01.alicdn.com/tps/i1/TB1mRM3FVXXXXaxXpXXWgIpNFXX-608-360.png" alt="" width="50%">

**设计指南**
应用栏是一个你需要将一系列主要内容放在上面的东西，用户可以通过它估计到一些与站点有关的信息，在应用栏上你可以玩各种有趣的花样：更改栏目、按钮的样式，还有交互上也能表现新意。
<img src="http://gtms02.alicdn.com/tps/i2/TB1.U.TFVXXXXchXFXXWgIpNFXX-608-360.png" alt="" width="50%"><img src="http://gtms02.alicdn.com/tps/i2/TB12w3YFVXXXXXKXFXXWgIpNFXX-608-360.png" alt="" width="50%">


##3.2 Tab Bar

Tab Bar可以用作为网站的主导航。它可以向用户显示你网站的主体区域，也可以帮助用户快速辨认他们在网站中所处的位置。
![](http://gtms01.alicdn.com/tps/i1/TB1vrg5FVXXXXc9XXXXRnHmQFXX-2047-1090.png)
Tab Bar可以快速在网站中不同区域内容之间进行切换。不过，它只适用于结构相对简单的网站，这样，在浏览网站时用户可以方便地知道他们在哪，以及要去到哪儿。

---
***TL;DR***

* 当你的网站只有不超过5个板块时使用它。
* 将它放置在主体内容的上方或下方。
* 将当前所选中的区域设置得明显些，方便用户辨认。

---

将tab的总数限制在5个以下，不然每个图标和其点击区域会变得太小，使用户在点击tab时太过费力。
将你的tab放置在主体内容的上方或下方，这种做法是在用户最佳体验和最佳设计中取得的一种平衡。
使用tab的一个好处是，它提供用户一种一致的导航方式，使用户可以快速知道他们浏览到了哪儿。
<img src="http://gtms02.alicdn.com/tps/i2/TB19ZEWFVXXXXcDXFXXm63eUXXX-699-420.png" alt="" width="50%"><img src="http://gtms03.alicdn.com/tps/i3/TB1gbE5FVXXXXc8XXXXC9UuNFXX-608-420.png" alt="" width="50%">


##3.3 Navigation Drawer

当网站具有太多板块和子板块时，采用Navigation Bar是更好的做法。它即可以作为一个处于画布外的可滑动元素，也可以用来显示网站全局状态。
![](http://gtms01.alicdn.com/tps/i1/TB1EK.5FVXXXXc8XXXXRnHmQFXX-2047-1090.png)
Navigation Drawer是一个滑动面板，通常用来显示网站的导航菜单，同时也用来反映网站的全局状态，例如用户登录。
用户可以通过放置在屏幕上方App Bar上的菜单按钮来滑出菜单。

---
***TL;DR***

* Navigation Drawer必须让用户可以很方便地打开。
* 如果网站的板块太多，可以考虑将一些内容分组，通过展开/收缩组来控制菜单项。避免向用户强加过多的东西。
* 不要将非常重要的操作藏在滑动面板内。例如搜索，就应该显眼的放置在主页上，而不是藏在隐藏的面板里。

---

这种做法的主要优势是，在可上下滚动的面板元素内，内容允许增加，这适用于大型网站结构，同时又只占据屏幕很小的空间。
对于用户来说，要让他们花最少的学习成本在网站上找到Navigation Drawer，一个显眼的菜单按钮是非常重要的。
![](http://gtms02.alicdn.com/tps/i2/TB10FwYFVXXXXa2XFXXGrP71VXX-642-358.png)


**Tabs VS Navigation Drawer**
一些开发者发现，当他们使用Tab而非Naviagtion Drawer时，会获得更高的交互赞誉。然而，选择何种方式是在Navigation Drawer的灵活性和Tab Bar的直观性中进行平衡，你需要考虑哪种方式最适合你的网站。

##3.4 底栏
如果你在开发一款Web应用时发现，用户可能需要的操作的数目超过了应用栏可以放置的数量，那么最好的解决方式就是把一些操作放到底栏上。
![](http://gtms02.alicdn.com/tps/i2/TB12hs1FVXXXXXEXFXXRnHmQFXX-2047-1090.png)
现在我们已经知道了可以将操作放在应用栏上。对于大部分站点来说(特别是那些内容导向的站点)，用户能进行的操作相对较少，所以一个应用栏就够了。比起这样的站点，Web应用就不一样了，UI上的每一个区域都会更多的操作。如果你不打算使用选项卡（Tab）但又有很多的交互要放在应用栏上，那最好还是把一些动作放到底栏上吧。

---
***TL;DR***

* 只有当你不准备使用选项卡（Tab Bar）的时候才使用这个方法。
* 底栏上最多只能有5项。
* 除非应用栏已经放不下了，否则不要用底栏。


---

这么做的好处是你有了更多操作的空间，而且底栏的位置方便触碰，用户在原生底栏之上还多了一个可操作层。但是底栏上最多只能出现5种操作，还要注意底栏不可以太小以至于很难触碰。
<img src="http://gtms03.alicdn.com/tps/i3/TB1iSEYFVXXXXaMXFXXW7GiKFXX-710-420.png" alt="" width="50%">


