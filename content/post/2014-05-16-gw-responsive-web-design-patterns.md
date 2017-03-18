+++
title = "响应式网页设计模式"
date = "2014-05-16T00:18:34+08:00"
author = "shenlm203"
tags = ["响应式Web"]
comments = true
draft = false
share = true
menu = ""
image = ""
+++


虽然响应式网页设计模式正在快速发展，不过已经有几种成熟的设计模式可以流畅地兼容桌面端和移动端设备。
大多数响应式网页的布局可以归纳为五种设计模式：mostly fluid、column drop、layout shifter、tiny tweaks和off canvas。一些情况下，页面可能会采用组合设计模式，例如组合使用column drop和off canvas。这些设计模式最初都是由Luke Wroblewski定义的，它们为响应式页面提供了一个坚实的基础。
为创建简单易懂的示例，下面每一个案例都是基于flexbox通过真实的标签创建的，主要是在一个主div内放置了三个内容div。每个示例都是先从定义最小视图开始，然后在必要时候加上响应节点。尽管需要依赖特定前缀来实现最佳效果，但是flexbox布局模式已经可以很好的支持主流浏览器。

<!--more-->

# 1 mostly fluid

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


# 2 Column drop
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


# 3 layout shifter

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

# 4 tiny tweaks
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

# 5 off canvas
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
