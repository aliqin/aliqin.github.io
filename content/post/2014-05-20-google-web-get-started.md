+++
title = "Google Web开发最佳实践（一）"
date = "2014-05-20T00:18:34+08:00"
author = "shenlm203"
tags = []
comments = true
draft = false
share = true
menu = ""
image = ""
+++

本文翻译自 [Web Fundamentals:Best practices for modern web development](https://developers.google.com/web/fundamentals/) (可能需要[翻墙](https://code.google.com/p/goagent/wiki/InstallGuide))

# Get Started-你的首个多屏网站

为有着不同兼容性，不同的屏幕尺寸和交互方法设备构建web看上去让人沮丧。
构建多屏体验并没有听说的那么难。按照本教程中的课程，我们将为《CS256: 移动Web开发》课程做一个示范登录页，它可很好地运行于多种不同设备(小到手机，大到电视)。
为了展示，手册带你通过如下两步入门。

<!--more-->

![](http://gtms02.alicdn.com/tps/i2/TB1ufssFVXXXXaOXFXXF1nQTXXX-1375-750.jpg)

## 1 创建网站的内容和结构
内容是任何网站最重要的部分。因此，让设计服务于内容，而不是设计决定内容。在这篇指南中，首先确定我们需要的内容，然后根据内容来创建结构，接着以简单的线性布局展示网页。线性布局在宽窄视口（ViewPort）方面具有良好效果。（注：ViewPort，视口、视觉窗口，即显示区域）

### 1.1 创建网页结构
确认我们的需求：

* 一块描述我们高级产品 —“CS256：移动Web开发”教程 — 的区域
* 一个表单，用于收集对我们产品感兴趣用户的信息
* 一段深入描述，以及视频
* 一些实际课程产品中的图片
* 一个数据表格，用来支持产品理念的信息

- - -
***TL;DR***

* 首先确定我们需要的内容
* 勾画出信息架构（IA）的窄、宽视口
* 创建内容页面的骨架图，无须样式化

- - -

我们还分别从窄视口和宽视口出发，列出了粗略的信息架构和布局。
![](http://gtms01.alicdn.com/tps/i1/TB1pUsWFVXXXXXJXpXX.pwpZVXX-290-647.png)
这很容易转化成用于指导项目后续工作的网页框架的粗略部分。
    
    <!doctype html>
    <html>
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>CS256: Mobile Web development - structure</title>
      </head>
      <body>
        <div id="headline">
          <header>
            <h1></h1>
            <p></p>
          </header>
          <div id="blurb">
            <p></p>
            <ul>
              <li>
            </ul>
          </div>
          <form method="post" id="register">
          </form>
        </div>
        <div id="section1">
          <h2></h2>
          <p></p>
          <ul>
            <li>
          </ul>
          <video></video>
        </div>
        <div id="section2">
          <h2></h2>
          <p></p>
          <div id="images">
            <img>
          </div>
        </div>
        <div id="section3">
          <h2></h2>
          <p></p>
        </div>
        <footer>
          <p></p>
        </footer>
          </body>
    </html>

### 1.2 向网页添加内容
该网站的基本部分已经完成。我们清楚这部分及其要展示的内容，并且知道这部分在整个信息架构中的各自位置。现在，我们开始扩建网站。

**创建标题和表单**

标题和注册申请表单是该页面的关键部分，必须快速呈现给用户。
添加标题仅需要几行简单的代码。

    <div id="headline">
      <div class="container">
        <header>
          <h1>Mobile Web Development</h1>
          <p>Building Mobile Web Experiences</p>
        </header>
        <div id="blurb">
          <p>So you've heard mobile is kind of a big deal, and you're not
          sure how to transform your traditional desktop-focused web apps
          into fast, effective multi-device experiences.</p>
          <p>This course is designed to teach web developers what
          they need to know to create great cross-device web
          experiences.</p>
          <p>This course will focus on building mobile-first web apps,
          which will work across multiple platforms including:</p>
          <ul>
            <li>Android,</li>
            <li>iOS,</li>
            <li>and others.</li>
          </ul>
        </div>
        <form method="post" id="register">
        </form>
      </div>
    </div>

我们还需要填充表单。表单简易，用于搜集用户的名字、电话、回他们电话的恰当时间。
所有的表单应该具有标签和placeholders（预期值的提示信息），以便于用户聚焦相应的元素，了解往其中应该填写的内容，还有利于协助工具理解表单结构。名称属性不仅用于把表单值传输到服务器，还用于浏览器针对用户如何自动填写表单问题上给出重要提示。
我们还添加了语义类型，使得用户能够更快、更简单地在移动设备上输入内容。例如，当输入电话号码时，拨号键盘应恰好呈现在用户眼前。
相关链接
    [创建一个神奇的表单](https://developers.google.com/web/fundamentals/input/form/)
    [正确地输入标签和名称](https://developers.google.com/web/fundamentals/input/form/label-and-name-inputs)
    [选择最佳的input类型](https://developers.google.com/web/fundamentals/input/form/choose-the-best-input-type)

**创建视频和信息区域**

内容的视频、信息区域稍微复杂一些，包括了一个我们产品功能的项目符号列表，还包含一个展示我们产品服务于用户的预留视频。

    <div id="section1">
      <div class="container">
        <h2>What will I learn?</h2>
        <p>After completing this class, you'll have built a web application with a first-class mobile experience.</p>
        <p>You'll understand what it takes to:</p>
        <ul>
          <li>build great web experiences on mobile devices</li>
          <li>use the tools you need to test performance</li>
          <li>apply your knowledge to your own projects in the future</li>
        </ul>
        <video controls poster="udacity.png">
          <source src="udacity.mp4" type="video/mp4"></source>
          <source src="udacity.webm" type="video/webm"></source>
          <p>Sorry your browser doesn't support video.
             <a href="udacity.mov">Download the video</a>.
          </p>
        </video>
        <br>
      </div>
    </div>
视频通常以互动性较强的方式来描述内容，经常用来阐述一个产品或概念。
遵循最佳实践原则，你可以轻松地在你的网站整合视频：
* 添加controls属性，方便人们播放视频
* 添加poster图片，提供内容预览
* 添加多个<source>元素，以支持多种视频格式
* 当窗口无法播放视频时，添加带视频链接的文本，供人们下载视频
   
    <video controls poster="udacity.png">
      <source src="udacity.webm" type="video/webm"></source>
      <source src="udacity.mov" type="video/mov"></source>
      <p>Sorry your browser doesn't support video.
         <a href="udacity.mov">Download the video</a>.
      </p>
    </video>

相关链接
[有效使用视频](https://developers.google.com/web/fundamentals/media/video/)
[改变开始播放位置](https://developers.google.com/web/fundamentals/media/video/)
[包含一张视频的海报](https://developers.google.com/web/fundamentals/media/video/)

**创建图片区域**
没有图片的网站会略显枯燥。有两种类型的图片：

* 内容图片—嵌入文档的图片，用于传达其他内容信息
* 样式图片—让网站看起来更漂亮的图片，包括背景图片、图案、渐变。我们将在下篇文章中讲述。

图片区域是内容图片的集合。这些图片出现在我们的产品中。
内容图片对于传达页面内容起着极为重要的作用，可以把他们想象成报纸上的图片所发挥的作用。我们正在使用的图片是一个名为*Chris Wilson, Peter Lubbers and Sean Bennet.*的项目所使用的图片。

    <div id="section2">
      <h2>Instructors</h2>
      <p>The worlds leading mobile autorities</p>
    
      <div id="images">
        <img src="chriswilson.png" alt="Chris Wilson: Course Instructor">
        <img src="peterlubbers.png" alt="Peter Lubbers: Course Instructor">
        <img src="seanbennett.png" alt="Sean Bennet: Course Developer">
      </div>
    
      <br>
    </div>

图片设置成与屏幕宽度一样宽。这个设置在移动设备上行之有效，但在桌面程序中表现平平。我们将在响应式设计部分讲述这个问题。
相关链接
[有效使用图片](https://developers.google.com/web/fundamentals/media/images/)
[在标记中正确使用图片](https://developers.google.com/web/fundamentals/media/images/#images-in-markup)
[优化图片压缩](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)

很多人没有查看图像的能力，他们经常使用一些辅助的技术，像是屏幕阅读器。屏幕阅读器可以分析页面上的数据，然后将分析结果口头转达给用户。为了确保屏幕阅读器可以将解析结果正确的反映给使用者，你要尽量保证你的内容图像具有可描述的alt属性。
在添加alt属性时，一定要确保alt属性文本在充分描述图像的同时，尽可能的简明扼要。例如，在我们的事例当中，我们将alt属性简单的标记为“Name：role”，该标记足够呈现给用户该章节的作者及其工作。

**添加数据列表部分**
最后一部分是简单的表格，用于列出产品的详细统计数据。
表格仅限用于列表示资料，如信息矩阵。
   
    <div id="section3">
      <h2>Mobile. Why should I care?</h2>
      <p>It is huge.  Everywhere.</p>
      <table>
        <caption>
          <p>Data from <a href="http://gs.statcounter.com/#desktop+mobile+tablet-comparison-ww-monthly-201303-201403">StatsCounter</a></p>
        </caption>
        <thead>
           <tr>
             <th>Country</th>
             <th>Desktop share</th>
             <th>Tablet share</th>
             <th>Mobile share</th>
           </tr>
        </thead>
        <colgroup>
           <col span="1">
           <col span="1">
           <col span="1">
           <col span="1">
        </colgroup>
        <tbody>
         <tr>
            <td data-th="Country"><a href="http://gs.statcounter.com/#desktop+mobile+tablet-comparison-IN-monthly-201303-201403">India</a></td>
            <td data-th="Desktop share">32%</td>
            <td data-th="Tablet share">1%</td>
            <td data-th="Mobile share">67%</td>
          </tr>
          <tr>
            <td data-th="Country"><a href="http://gs.statcounter.com/#desktop+mobile+tablet-comparison-GB-monthly-201303-201403">GB</a></td>
            <td data-th="Desktop share">69%</td>
            <td data-th="Tablet share">13%</td>
            <td data-th="Mobile share">18%</td>
          </tr>
          <tr>
            <td data-th="Country"><a href="http://gs.statcounter.com/#desktop+mobile+tablet-comparison-US-monthly-201303-201403">US</a></td>
            <td data-th="Desktop share">69%</td>
            <td data-th="Tablet share">9%</td>
            <td data-th="Mobile share">22%</td>
          </tr>
          <tr>
            <td data-th="Country"><a href="http://gs.statcounter.com/#desktop+mobile+tablet-comparison-CN-monthly-201303-201403">China</a></td>
            <td data-th="Desktop share">86%</td>
            <td data-th="Tablet share">4%</td>
            <td data-th="Mobile share">10%</td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>

**添加页脚footer**
大部分网站需要一个页脚，用来展示诸如条款和条件、免责声明等内容，以及无须出现在页面的主导航或主内容区域的其他内容。
在我们的网站中，我们将链接到使用条款和条件、联系页面、以及我们的社交帐号。
    
    <footer>
      <div class="container">
        <p>We always need a footer.</p>
      </div>
    </footer>

### 1.3 总结
我们已经创建好了网站的大纲，确定了全部的主要框架元素。我们确信所有相关内容已经准备妥当，以满足我们业务的需求。
![](http://gtms03.alicdn.com/tps/i3/TB1K5IPFVXXXXayXFXXtJRI0FXX-848-911.png)
这个时候你会发现，网页看起来已经相当完美了，右边是已经设计完的效果。内容是任何网站最重要的方面。我们需要确保拥有良好的信息架构和坚实的信息密度。这篇指南提供了优秀的创建网站基础。我们将在下一篇指南中为内容设计样式。

<!-- todo: 此处与翻译不一致，查阅 -->
## 2 让网站响应式

### 2.1 添加一个视口
即使对于一个基本页面，你必须始终包含一个viewport 元数据标签。视口是建立多设备体验的最重要的组成部分。没有它，你的网站将无法良好运行于移动设备上。
视口用于提示浏览器：网页页面需要进行调整以适应屏幕范围。你可以为视口指定多种配置，以控制页面的显示。我们推荐一个默认值：

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

视口元素位于文档头部，仅需声明一次。

了解更多关于使用视口的最佳实践：
[设置视口](https://developers.google.com/web/fundamentals/documentation/multi-device-layouts/rwd-fundamentals/#set-the-viewport)
[调整内容大小以适应视口](https://developers.google.com/web/fundamentals/documentation/multi-device-layouts/rwd-fundamentals/#size-content-to-the-viewport)

### 2.2 使用简单的样式
我们公司及产品根据样式指南，提供了一个非常具体的品牌、字体指导方针。
**样式指南**
样式指南是深入认识页面的可视化表达的有效途径。它有助于确保设计首尾风格一致。
![](http://gtms03.alicdn.com/tps/i3/TB1nvIsFVXXXXc0XpXXF7Mu6pXX-864-163.png)
**添加样式化图片**
在前篇指南中，我们添加了所谓的“内容图片”。这些图片对于描述我们产品很重要。样式图片不是核心内容的一部分，但增添了视觉冲击力，或引导用户注意力至特定内容。
这方面的一个很好的例子是：顶部内容的标题图片。它经常被用来吸引用户阅读更多的产品。
它们可以非常简单地包含进来。在我们的例子中，样式图片为背景，应用简单的css即可。
![](http://gtms03.alicdn.com/tps/i3/TB1rO7PFVXXXXboXXXX7SdxOXXX-400-849.png)
    
    #headline {
      padding: 0.8em;
      color: white;
      font-family: Roboto, sans-serif;
      background-image: url(backgroundimage.jpg);
      background-size: cover;
    }

### 2.3 设置首个临界点
当宽度大约为600px时，设计开始变得糟糕。在我们的例子中，行的长度会超过10个字（最佳的阅读长度），而这正是我们需要调整的地方。
<video controls="" poster="https://developers.google.com/web/fundamentals/getting-started/your-first-multi-screen-site/images/firstbreakpoint.png" style="width: 100%">
    <source src="https://developers.google.com/web/fundamentals/getting-started/your-first-multi-screen-site/videos/firstbreakpoint.webm" type="video/webm">
</video>
600px似乎是我们创建第一个临界点的良好位置，因为它确定了范围，重新定位元素，使之更好地适应屏幕。我们使用一种称为“媒介查询（Media Queries）”的技术，可做到这一点。
    
    @media (min-width: 600px) {

    }

更大的屏幕意味着拥有更多的空间，因此，在如何显示内容的问题上具有更强的灵活性。
从当前我们产品页面的效果看来，接下来我们需要：
* 约束设计的最大宽度
* 修改元素内边距和减少文本尺寸
* 移动表单，与标题内容浮动对齐
* 确保视频浮动于内容周围
* 减少图像尺寸，显示于更合适的网格

了解更多关于使用“媒介查询”的方式和位置：
[使用“媒介查询”](https://developers.google.com/web/fundamentals/documentation/multi-device-layouts/rwd-fundamentals/#use-css-media-queries-for-responsiveness)
[布局模式](https://developers.google.com/web/fundamentals/documentation/multi-device-layouts/rwd-patterns/)
[主要的流式布局](https://developers.google.com/web/fundamentals/documentation/multi-device-layouts/rwd-patterns/#mostly-fluid)

### 2.4 限制设计界面的最大宽度
我们仅选择两大布局：窄视口和宽视口：这大大简化了构建过程。
我们决定，在窄视口中创建全幅部分，并且在宽视口中仍保持全幅。这意味着我们应限制屏幕的最大宽度，使得文本、段落不延伸成一长单行，出现超宽屏幕。我们选择800px作为最大值。
为了实现这个目标，我们需要限制宽度，并将元素置于中心。在每个主要区域中，我们需要创建一个容器，将其外边距（margin）设为auto。这允许屏幕增大，但内容仍处于中心，最大尺寸为800px。
如下所示，容器是一个简单的div：

    <div class="container">...</div>

    <div id="section1">
        <div class="container">
    <h2>What will I learn?</h2>
 
    .container {
      margin: auto;
      max-width: 800px;
    }

### 2.5 改变内边距和减少文本尺寸
在窄视口中，我们没有大量空间来显示内容。因此，排版尺寸和磅值往往需大幅减少，以适应屏幕。
在更宽视口中，我们需要考虑用户倾向于更大的屏幕，甚至更大。为了增加内容的可读性，我们可以增加排版的尺寸和磅值，也可以改变内边距，以使不同区域更加明显。
在我们产品页面中，我们通过设置宽度方向的内边距为5%，以增加区域元素的内边距。我们也将增加每个部分顶部的大小。
    #headline {
      padding: 20px 5%;
    }
    
### 2.6 调整元素以适应宽视口
窄视口以线性方式堆叠显示。每个主要区域及其里面的内容是依次从上到下排列。
宽视口提供了额外的空间，使得内容能以最佳方式呈现在屏幕上。对于我们的产品页面，根据信息架构，意味着我们可以：

* 移动表单，贴近头标题信息
* 将视频放在重要功能列表右边
* 平铺图像
* 展开表格

**使表单元素浮动**
窄视口意味着拥有较少的横向空间，不能充裕地放置屏幕上的元素。
为了更有效地利用屏幕的横向空间，我们需要打破顶部的线性流式布局，移动表单和表项，使得彼此紧邻。
    
    #headline #blurb {
      float: left;
      font-weight: 200;
      width: 50%;
      font-size: 18px;
      box-sizing: border-box;
      padding-right: 10px;
    }

    #headline #register {
      float:right;
      padding: 20px;
      width: 50%;
      box-sizing: border-box;
      font-weight: 300;
    }

    #headline br {
      clear: both;
    }

    #headline {
      padding: 20px 5%;
    }

<video controls="" poster="https://developers.google.com/web/fundamentals/documentation/introduction-to-media/images/floatingform.png" style="width: 100%">
  <source src="https://developers.google.com/web/fundamentals/documentation/introduction-to-media/videos/floatingform.mov" type="video/mov">
  <source src="https://developers.google.com/web/fundamentals/documentation/introduction-to-media/videos/floatingform.webm" type="video/webm">
  <p>Sorry your browser doesn't support video. <a href="https://developers.google.com/web/fundamentals/documentation/introduction-to-media/videos/floatingform.mov">Download the video</a>.</p>
</video>

**使视频元素浮动**
在窄视口中，将视频设计为占屏幕的整个宽度，放置在重要功能列表后面。在宽视口中，当视屏位于功能列表后面时，视频变得太大，看起来不合适。
视频元素需移出窄视口的垂直流式布局，应与内容的项目符号列表并列显示。
    
    #section1 ul {
      box-sizing: border-box;
      float: left;
      width: 50%;
      padding-right: 1em;
    }
    
    #section1 video {
      width: 50%;
      float: right;
    }
    
**平铺图片**
在窄视口（大部分移动设备）接口中，图像设置为屏幕的整个宽度、垂直堆叠。这在宽视口中得不到很好地扩展。
为了使图片在宽视口中看起来合适，将图片宽度缩放容器的30%，水平放置（而不是窄视口的垂直放置）。我们还将增加边框半径和盒子阴影（box-shadow），使图像看起来更吸引人。
![](http://gtms04.alicdn.com/tps/i4/TB1ONkYFVXXXXalXpXXW4RsLFXX-893-446.png)
    
     #section2 div img {
       width: 30%;
       margin: 1%;
       box-sizing: border-box;
       border-radius: 50% 50%;
       box-shadow: black 0px 0px 5px;
     }

**让图片自适应DPI**
使用图片时，要考虑视口大小、显示分辨率。
在过去，网页专为96dpi屏幕而设计。随着移动设备的出现，我们已见证了屏幕像素密度的逐渐增大，更别说笔记本电脑的Retina显示屏了。因此，被编码为96dpi的图像，往往在高保真dpi设备上看起来很糟糕。
我们有一个还没被广泛采用的解决方案。对于支持该方案的浏览器，你可以在高分辨显示器上显示高像素的图像。
了解更多关于针对不同屏幕分辨率有效使用图片：
[针对高保真dpi设备，使用srcset属性来增强图片效果](https://developers.google.com/web/fundamentals/documentation/introduction-to-media/images/#enhance-imgs-with-srcset-for-high-dpi-devices)
[使用媒介查询，以提供高分辨率的图片或艺术设计](https://developers.google.com/web/fundamentals/documentation/introduction-to-media/images/#use-media-queries-to-provide-high-res-images-or-art-direction)

**数据表格**
表格很难合适地展示在窄视口的设备上，需要特殊考虑。
在窄视口中，我们建议将表分成两排，把标题和表格单元调到一排，呈列状。
[在浏览器中查看演示视频](https://developers.google.com/web/fundamentals/getting-started/your-first-multi-screen-site/videos/responsivetable.webm)
在我们的网站中，必须单独为表格内容创建一个额外的临界点。由于最初是为移动设备构造网页，去掉已应用的样式是困难的，所以我们必须在宽视口css中关闭窄视口下表格的部分css。这向我们呈现了一个明确、连贯变化。
   
    @media screen and (max-width: 600px) {
      table thead {
        display: none;
      }

      table td {
        display: block;
        position: relative;
        padding-left: 50%;
        padding-top: 13px;
        padding-bottom: 13px;
        text-align: left;
        background: #e9e9e9;
      }

      table td:before {
        content: attr(data-th) " :";
        display: inline-block;
        color: #000000;
        background: #e9e9e9;
        border-right: 2px solid transparent;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 33%;
        max-height: 100%;

        font-size: 16px;
        font-weight: 300;
        padding-left: 13px;
        padding-top: 13px;
      }
    }

### 2.7 总结

祝贺你。当你阅读至此，你可创建你第一个产品的简单登陆页面，可跨大量不同设备、不同比例的表单、以及不同屏幕尺寸。
如果你遵循这些原则，你将有一个良好的开端：

* 写代码之前，创建一个基本的信息架构和清楚需要的内容
* 总是设置一个视口
* 移动优先，形成基本的经验
* 一旦拥有移动经验，增加显示器的宽度，直到网页看起来不合适，并在此设置临界点
* 不断迭代



