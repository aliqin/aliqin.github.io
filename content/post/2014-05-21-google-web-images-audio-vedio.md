+++
title = "Google web开发最佳实践(三)"
date = "2014-05-21T00:18:34+08:00"
author = "shenlm203"
tags = []
comments = true
draft = false
share = true
menu = ""
image = ""
+++

# 图像、音频和视频

图像、音频和视频可以吸引用户，但是当他们的出现与网站格格不入，或者没有加载、加载缓慢的时候，就会流失用户。

<!--more-->

## 1 图像
一图胜千言，说的是图像是每个页面中不可或缺的一部分。图像同时占据着页面下载字节数的绝大部分。在响应式设计中，按照设备特性变化的不仅有布局还有图片。

### 1.1 标签中的图像

img元素是强大的。它能够下载、解析并且渲染内容。现代的浏览器可以支持多种图像格式。引入能够跨设备的图像，与放置专为桌面浏览器定制的图像没什么不同，只需要几个小的调整就能有很好的体验。

---
***TR;DR***

* 对图像使用相对大小单位
* 使用img标签的srcset属性为高DPI设备优化
* 响应式图像的艺术方向（Art direction in responsive images with picture）
* 其他图像技术

---

#### 1.1.1 对图像使用相对大小单位

在指定图像宽度时，请记得使用相对单位，防止图像超出可视区域。例如规则 width: 50%;会使图像宽度变成容器元素（而不是相对于可视区域或者实际像素）宽度的50%。
因为CSS允许内容超出容器，有必要使用max-width: 100%规则防止图像及其他元素的溢出。例如：


    img, embed, object, video {
        max-width: 100%;
    }

确保使用alt属性为img元素提供有意义的描述，这些措施能提高网站的可访问性，更好地为屏幕阅读器等辅助设施提供上下文。


#### 1.1.2 使用img标签的srcset属性为高DPI设备优化

CSS中的image-set()函数增强了background属性的表现，使得为不同特性的设备提供不同的图片变得更加容易。与CSS函数image-set的工作方式相同， srcset 属性允许浏览器根据设备特性选择最佳图像，例如在2x大小的显示屏上显示2x的图像，或者在网络带宽受限时显示1x大小的图片。

    <img src="photo.png" srcset="photo@2x.png 2x" ...>
    
在那些不支持srcset的浏览器上，只会简单地显示src属性指定的默认图像。这就是为什么总包含1x大小图片的做法很重要，因为它能显示在所有的设备上。支持srcset属性的浏览器会解析由英文逗号分割的图像/条件列表，并且只会下载显示最合适的图像。
虽然条件包括像素密度、可视区域宽度和高度，而浏览器目前支持的，还只有像素密度。要保持当前行为与未来特性的一致，只需要在属性中坚持指定2x大小的图像就可以了。


#### 1.1.3 Art direction in responsive images with picture

根据设备的特性改变图像，被称为一种艺术方向，可以使用图片元素来完成。图片元素定义了一个声明性的解决方案，这个方案是基于不同特征（如设备大小、设备分辨率等）提供不同版本的图像。
![](http://gtms04.alicdn.com/tps/i4/TB1BrpaGXXXXXXSXXXXFe2mIVXX-600-328.png)
<!-- todo： 翻译不完善 -->
当一个响应式设计规定，不同的图像出现在不同的设备屏幕上时，就要使用图片元素。图片元素和视频元素相类似，可以包含多个源元素，基于媒体查询或者图像格式可以指定不同的图像文件。

    <picture>
        <source media="(min-width: 800px)" srcset="head.jpg, head-2x.jpg 2x">
        <source media="(min-width: 450px)" srcset="head-small.jpg, head-small-2x.jpg 2x">
        <img src="head-fb.jpg" srcset="head-fb-2x.jpg 2x" >
    </picture>
    
在上面的例子中，如果浏览器的宽度大于800px，那么300.png或者600.png将是可用的，具体的使用选择将取决于设备的分辨率。如果浏览器的宽度在400px至800px之间，那么200.png或者400.png将是可用的，同样，具体的视同选择将取决于设备的分辨率。为了做到向后兼容，也为了不支持图片元素的浏览器能正常访问，img元素也是必不可少的。


**相对大小的图片**
当图片的尺寸无法确定的时候，我们很难指定一张图片的具体宽高。像图片使用百分比定宽，流式布局和依赖浏览器窗口自适应等情况。
通过添加与该图像元素的尺寸相关的宽度描述符，而非提供固定的图像尺寸，可以允许浏览器自动加载最佳尺寸的图像。

    <img src="lighthouse-200.jpg" sizes="50vw"
        srcset="lighthouse-100.jpg 100w, lighthouse-200.jpg 200w,
        lighthouse-400.jpg 400w, lighthouse-800.jpg 800w,
        lighthouse-1000.jpg 1000w, lighthouse-1400.jpg 1400w,
        lighthouse-1800.jpg 1800w">

上面例子呈现的图像的宽度是浏览器视窗的一半（根据属性sizes=“50vw”）。吴坤浏览器的窗口是如何的大，最终呈现的图像来源，都是根据浏览器的宽度和设备的像素比例来选择的。下面的表格显示了浏览器会选择的图像：

<table class="table-4"><colgroup><col span="1"><col span="1"><col span="1"><col span="1"></colgroup><thead><tr><th data-th="Browser width">Browser width</th><th data-th="Device pixel ratio">Device pixel ratio</th><th data-th="Image used">Image used</th><th data-th="Effective resolution">Effective resolution</th></tr></thead><tbody><tr><td data-th="Browser width">400px</td><td data-th="Device pixel ratio">1</td><td data-th="Image used"><code>200.png</code></td><td data-th="Effective resolution">1x</td></tr><tr><td data-th="Browser width">400px</td><td data-th="Device pixel ratio">2</td><td data-th="Image used"><code>400.png</code></td><td data-th="Effective resolution">2x</td></tr><tr><td data-th="Browser width">320px</td><td data-th="Device pixel ratio">2</td><td data-th="Image used"><code>400.png</code></td><td data-th="Effective resolution">2.5x</td></tr><tr><td data-th="Browser width">600px</td><td data-th="Device pixel ratio">2</td><td data-th="Image used"><code>800.png</code></td><td data-th="Effective resolution">2.67x</td></tr><tr><td data-th="Browser width">640px</td><td data-th="Device pixel ratio">3</td><td data-th="Image used"><code>1000.png</code></td><td data-th="Effective resolution">3.125x</td></tr><tr><td data-th="Browser width">1100px</td><td data-th="Device pixel ratio">1</td><td data-th="Image used"><code>1400.png</code></td><td data-th="Effective resolution">1.27x</td></tr></tbody></table>


**设置响应式图片断点**

在许多情况下，大小或者图像的改变依赖于网站的布局断点。例如，在小屏幕上，你可能想要图像覆盖全部视窗，在大屏幕上，它应该只占视窗的一小部分。
    
     <img src="400.png"
        sizes="(min-width: 600px) 25vw, (min-width: 500px) 50vw, 100vw"
        srcset="100.png 100w, 200.png 200w, 400.png 400w,
                 800.png 800w, 1600.png 1600w, 2000.png 2000w">
    
上面例子中的sizes属性使用了多种媒体查询去对应不同大小的图像。当浏览器的宽度大于600px时，图像的宽度将会是浏览器视窗的25%；当浏览器的宽度在500px到600px之间时，图像的宽度将会使浏览器视窗的一半；而当浏览器窗口宽度小于500px时，图像宽度就和浏览器视窗一样。


#### 1.1.4 配置可放大的产品图片

买家想看到他们正在买什么。在零售类网站中，用户希望能提供更高分辨率的商品细节。
![](http://gtms03.alicdn.com/tps/i3/TB1nJg6FVXXXXXIXFXXzsgj2VXX-325-550.png)

[J. Crew site](https://www.jcrew.com/) 就是一个很好的支持触屏和图片放大的例子。它通过一个可消失浮层暗示图片是可以点击和支持放大查看细节的。


#### 1.1.5 其他图像技术

**图片压缩**

压缩图像技术总是为所有设备提供高压缩的2x大小图片，而不论设备的规格。取决于图像的种类和压缩级别，图像质量看上去不会有太大改变，但是大小会显著降低。技术总是为所有设备提供高压缩的2x大小图片，而不论设备的规格。取决于图像的种类和压缩级别，图像质量看上去不会有太大改变，但是大小会显著降低。

**注意：**因为它需要占用更多的内存并且解码。在小屏幕上放缩大尺寸图片成本高昂，对内存和处理能力有限的低端设备来说尤其痛苦。

**JavaScript图像替代方案**

JavaScript图像替代方案会检查设备能力，并且做“正确的操作”。
你可以通过window.devicePixelRatio属性判断设备分辨率长宽比，获得屏幕宽度、高度，甚至可以通过 navigator.connection 嗅探网络连接、伪造请求。一旦收集了所有的信息，你可以选择加载哪张图片。
这种做法的坏处是，使用JavaScript就意味着在相应的加载器完全解析之前，图像的加载会有延迟。这意味着在 pageload 事件出发之前，图像还尚未加载。而且，浏览器有可能会同时下载1x大小和2x大小的图片，增加了页面的重量。


###1.2 css中的图片

CSS 的 `background` 属性是向元素添加复杂图像的有利工具，让添加多张图片，或者重复图片等更加简单。与媒体查询结合时，background属性变得更加强大，能做到按照屏幕分辨率，可视区域大小等有条件地加载背景图片。

---
***TL;DR***

* 考虑显示设备的特征，使用最好的图片，包括考虑屏幕大小，设备分辨率和页面布局。
* 在CSS中更改 background-image 属性，为高DPI的设备使用媒体查询的 min-resolution 和 -webkit-min-device-pixel-ratio 属性。
* 使用 srcset 属性，在提供原始1x大小图像的基础上提供高分辨率图像。
* 在使用JS图像的替代技术时考虑花费的性能，或者在低分辨率设备上使用高压缩的高分辨率图片。

---

#### 1.2.1 为图片加载或艺术指导(art direction)使用媒体查询

媒体查询不仅影响页面布局，还可以根据可视区域宽度有条件地加载图片，提供艺术指导。
在下面的例子中，小屏幕上只会下载显示small.png并应用到div上，而大屏幕上会将background-image: url(body.png) 应用到body上，同时background-image: url(large.png) 应用到 div上。

    .example {
      height: 400px;
      background-image: url(small.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position-x: center;
    }

    @media (min-width: 500px) {
      body {
        background-image: url(body.png);
      }
      .example {
        background-image: url(large.png);
      }
    }

#### 1.2.2 使用image-set提供高分辨率图片

CSS中的image-set()函数增强了background属性的表现，使得为不同的设备特性提供不同的图片变得更容易。这允许浏览器根据设备特性选择最佳图像，例如在2x大小的显示屏上显示2x的图像，或者在网络带宽受限时显示1x大小的图片。
    
    background-image: image-set(
      url(icon1x.jpg) 1x,
      url(icon2x.jpg) 2x
    );

加载了正确的图片，浏览器也会将它调整到合适的大小。换句话说，浏览器假设2x大小的图片是1x大小图片的二倍，于是便会以2倍的比例缩小2x大小的图片，所以页面上的图片大小看上去是一致的。
对 image-set() 函数的支持还很新，并且仅仅在带有-webkit 前缀的Chrome和Safari浏览器中支持。另外还要考虑当 image-set() 不起作用的时候设置备用图片的情况，例如：
    
     .sample {
        width: 128px;
        height: 128px;
        background-image: url(icon1x.png);
        background-image: -webkit-image-set(
            url(icon1x.png) 1x,
            url(icon2x.png) 2x
        );
        background-image: image-set(
            url(icon1x.png) 1x,
            url(icon2x.png) 2x
        );
    }

上面的样式会在支持image-set的浏览器中加载合适的资源，而在不支持的时候使用1x大小的资源。最需要注意的问题是浏览器对 image-set() 的支持还不够，大多数浏览器还是会得到1x大小的资源。


#### 1.2.3 使用媒体查询提供高分辨率图片或者艺术指导

媒体查询规则创建在设备宽高比之上，让它可以为2x或者1x大小屏幕指定不同的图片。
    
    @media (min-resolution: 2dppx),
    (-webkit-min-device-pixel-ratio: 2)
    {
      /* High dpi styles & resources here */
    }

Chrome, Firefox 和 Opera 浏览器都支持标准的 (min-resolution: 2dppx)属性，而Safari和Android浏览器都需要写上厂商前缀，并且去掉dppx单位。请记住，这些样式只会在满足媒体查询的时候加载，而你必须指定最基本的样式。指定基本样式的做法能保证即使浏览器不支持特定分辨率的媒体查询，也能渲染某些东西。
    
    .sample {
        width: 128px;
        height: 128px;
        background-image: url(icon1x.png);
    }

    @media (min-resolution: 2dppx), /* Standard syntax */
    (-webkit-min-device-pixel-ratio: 2)  /* Safari & Android Browser */
    {
        .sample {
            background-size: contain;
            background-image: url(icon2x.png);
        }
    }

你也可以根据可视区域大小使用 min-width 语法显示替代图片。这项技术的好处在于，如果媒体查询不匹配日，图像便不会下载。例如， bg.png 只在浏览器的宽度为500px或者更大的宽度上才会下载并应用到 body 上：
    
    @media (min-width: 500px) {
      body {
        background-image: url(bg.png);
      }
    }

### 1.3 使用SVG作为图标

当要向页面中添加图标时，如果可能使用SVG或在某些情况下使用unicode字符。

---
***TL;DR***

* 使用SVG和unicode作为图标代替位图

---

#### 1.3.1 使用unicode代替简单图标

多字体都支持数量庞大的Unicode图示，这些图示可以用来替代图片。与图片不同，Unicode字体的放缩性很好，不管他们出现在屏幕上是大是小，他们看上去都会很好。
在普通字符集之外，Unicode还会包含数字形式的符号 (⅐)、箭头 (←)、数学运算符 (√)、几何形状(★)、控件图片(▶)、盲文符号 (⠏)、音符(♬)、希腊字母(Ω)、甚至还有国际象棋棋子(♞)。
使用Unicode字符就像使用命名HTML实体一样，使用 &#XXXX 的格式，这里的XXXX代表着Unicode字符码。例如：

    You're a super &#9733;

You’re a super ★


#### 1.3.2 使用SVG代替复杂图标

对于更复杂的图标需求，图标字体通常更轻量，易于使用，通过单个HTTP请求就能获得。图标字体相对于图像有几个好处：

* 图标字体是矢量图，而且可以无限缩放;
* 对于颜色、阴影、透明度和动画的CSS效果更加直接;
* 整套图标都可以包含在一行文字中;
* 有语义
* 通过适当的属性提供更好的可访问性


有了SVG图标，你也可以添加目录式行内SVG：

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           width="32" height="32" viewBox="0 0 32 32">
        <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#000000"></path>
    </svg>
    or by using an image tag, like this credit card icon:
    <img src="credit.svg">.


#### 1.3.3 谨慎使用图标字体

图标字体易用且非常流行，但是相较于SVG来说仍有一些不足。

* 它们是可以无限缩放的矢量图形，但是可能会走样导致呈现出错误的形状。
* 有限的CSS样式
* 仅靠line-height, letter-spacing等很难做到像素级精确
* 无语义，且很难在屏幕阅读器和其他辅助技术上使用
* 使用率很低，要使用很少量的图标可能要加载非常大的字体文件

![](http://gtms02.alicdn.com/tps/i2/TB1LzBXGXXXXXaMXXXXZ03gZVXX-320-568.png)

    使用 Font Awesome，你既可以完全使用Unicode，就像HTML5 logo (<span class="awesome"></span>)，也可以向 &lt;i&gt;元素添加特殊的class，像是 CSS3，logo (<i class="fa fa-css3"></i>)。

网上有成百上千的免费和付费图标字体，包括Font Awesome、Pictos 和 Glyphicons。
请确保需要使用这些图标的时候，能够平衡额外的HTTP请求和文件大小。例如，如果你只需要少数的几个图标，那最好是使用一张图片或者一张Sprite图。

### 1.4 图片性能优化

图像通常占据页面下载字节数的绝大部分，同时也占据了可观的视觉空间。结果是，优化图片能极大地节约带宽提高性能：浏览器下载的字节数越少，客户端所竞争的带宽就越少，浏览器能下载显示所有的资源就越快。

---
***TL;DR***
    
* 不要只是随意地选取图像格式，要理解可用格式间的差异，并使用最合适的格式。
* 在工作流程中引入图像优化和压缩工具减少文件大小。
* 将最常使用的图片合并为sprite图，以减少HTTP请求数。
* 考虑只在图片进入可视区域时加载，提升初次加载速度，减少初次加载的页面体积。

---

#### 1.4.1 选择正确的格式

有两种类型的图片需要考虑： 矢量图 和 位图. 对于位图来说，你同时需要选择正确的压缩格式，例如：GIF、PNG和JPG。
**位图**，是照片一类的图像，由许多独立成格的像素或者点表示。位图常来源于相机或者扫描仪，或者可以在浏览器的canvas元素中生成。图像尺寸越大，文件体积就越大。当放大到比原来大小还大时，位图就会变得模糊，因为浏览器需要猜测如何去填补遗失的像素。
**矢量图**，像是logo和线条图，是由一系列曲线，线条，形状和填充颜色定义的。矢量图是由像Adobe Illustrator或者Inkscape这样的程序创造，并以SVG这样的格式保存得来的。因为矢量图是由一些简单的基元创造的，可以在不改变图片大小，并且不损失图像质量的情况下进行缩放。
选择了正确的格式以后，考虑图像的来源(位图或者矢量图)和内容(颜色、动画、文本等)都很重要。没有哪一种格式适用于所有的图像类型，每种格式都有它自身的长处和短处。
可以从以下指导开始选择正确的格式：


* JPG 用于照片。
* SVG 用于矢量作品和单色图形，例如logo和线条画。如果没有矢量作品，还可以尝试 WebP 或者 PNG 格式。
* 使用PNG格式而不是GIF格式，因为PNG格式色彩更丰富，还能提供更好的压缩比。
* 而对于长动画，考虑使用<video\>标签，因为它能提供更好的图像质量，还给用户提供回放的控制权。


#### 1.4.2 减少文件体积

图像的文件体积可以考虑使用‘后处理’方案在保存后减少体积。有许多图像压缩的工具——有损的、无损的、在线的、图形化的以及命令行的。在可能的情况下，最好尝试自动化的图像优化方案，让它成为你工作流程的一等公民。
这里有一些工具可以在无损的情况下处理 JPG 和 PNG 文件而不影响图像质量。对于 JPG文件，请尝试 jpegtran 或者 jpegoptim (只在 Linux 上可用；同时请使用 –strip-all 选项)。对于 PNG文件，请尝试 OptiPNG 或者 PNGOUT。


#### 1.4.3 使用sprites

CSS sprite是一种将数个图片合成为一张大‘sprite 图’的图像。这单张图可以在元素上指定background图片(sprite图)后加上相应的偏移量显示正确的部分。
![](http://gtms04.alicdn.com/tps/i4/TB1gC7.FVXXXXbnXXXXZZMo2pXX-190-352.png)
    
    .sprite-sheet {
      background-image: url(sprite-sheet.png);
      width: 40px;
      height: 25px;
    }

    .google-logo {
      width: 125px;
      height: 45px;
      background-position: -190px -170px;
    }

    .gmail {
      background-position: -150px -210px;
    }

    .maps {
      height: 40px;
      background-position: -120px -165px;
    }

Sprite图的好处是，既可以减少下载多张图片的下载数，又可以保证缓存能起作用。


#### 1.4.4 考虑延迟加载

延迟加载可以显著地加速含有图片的长页面加载速度，通过按需加载，或者在主要内容完成加载渲染后再加载等方式完成。除了性能提升，使用延迟加载也可以创造出无限滚动的体验效果。
创建无限滚动页面要注意，因为内容只会在可见的时候加载，搜索引擎可能永远见不到相应的内容。另外，如果用户想要查看footer处的信息将永远不能查看到，因为总会有新内容加载出来。


### 1.5 完全避免使用图片

有时候，最好的图片本身却并不是图片。在尽可能的情况下，请优先使用浏览器自带的特性来提供相同或者相似的功能。浏览器之前要产生视觉效果可能需要图片。这意味着浏览器现在可以不需要下载单个图片，也不需要努力阻止图片被放大。而图标可以使用Unicode或者特殊的图标字体生成。

---
***TL;DR***

* 尽可能避免使用图片，而充分发挥浏览器的能力，使用Unicode字符替代图片，以及使用图标字体替换复杂图标。

---

#### 1.5.1 将文本放在标签中，而不是嵌进图片内

在尽可能的情况下，文本就应该是文本，而不要嵌进图片中。不能像那些使用图片作为头条信息或者将电话、地址等联络信息写进图片的例子一样，这种做法妨碍人们去复制粘贴信息，让屏幕阅读器的可访问性变差，也不是响应式应有的做法。可取而代之的，是将文本放在标签中，使用Webfont完成你所需的样式。

#### 1.5.2 使用CSS替代图片

现代浏览器能够使用CSS特性，创造之前需要使用图像来完成的样式。例如，复杂渐变可以使用 background 属性创建，阴影可以使用 box-shadow 创建，而圆角可以使用 border-radius 属性添加。

    <style>
      div#noImage {
        color: white;
        border-radius: 5px;
        box-shadow: 5px 5px 4px 0 rgba(9,130,154,0.2);
        background: linear-gradient(rgba(9, 130, 154, 1), rgba(9, 130, 154, 0.5));
      }
    </style>

请记住使用这些技术要求一定的渲染周期，在移动设备上影响较大。如果过度使用，你将失去得到的任何好处，并且可能影响性能。


## 2 视频

请记住使用这些技术要求一定的渲染周期，在移动设备上影响较大。如果过度使用，你将失去得到的任何好处，并且可能影响性能。

### 2.1 添加视频

学习将视频添加到你的网站中最简单的方式，从而确保用户在任何设备上都能得到最佳的体验。

---
***TL;DR***

* 添加视频元素（组件）
* 指定多个文件格式，制作视频的多种格式来覆盖广泛的移动平台
* 指定开始和结束时间
* 包含海报图片

---

#### 2.1.1 添加视频元素

在网站上用视频元素加载、解码并播放视频

<video>
    <source src="https://developers.google.com/web/fundamentals/media/video/video/chrome.webm" type="video/webm">
    <source src="https://developers.google.com/web/fundamentals/media/video/video/chrome.mp4" type="video/mp4">
    <p>This browser does not support the video element.</p>
</video>

    <video src="chrome.webm" type="video/webm">
        <p>Your browser does not support the video element.</p>
    </video>


#### 2.1.2 指定多个文件格式

不是所有浏览器都支持相同的视频格式的，<source>元素可以让你指定多种格式作为备选，以防用户的浏览器不支持某些格式。举例来说：
   
    <video controls>
      <source src="chrome.webm" type="video/webm">
      <source src="chrome.mp4" type="video/mp4">
      <p>This browser does not support the video element.</p>
    </video>

当浏览器解析<source>标签时，它将使用可选的type属性来帮助决定下载哪个文件或是播放哪个文件。如果浏览器支持WebM格式的话，它会播放chrome.webm文件，如果不支持，它会检查其是否能支持MPEG-4视频的播放，可以参考《极客们的数字媒体入门》来找到更多有关网络上的音频和视频是如何工作的。这种方法比起HTML上不同的服务或是服务器端脚本来讲有诸多优势，尤其是在手机端（移动端）：

* 开发人员可以按照优先顺序列出格式
* 原生客户端切换减少了等待时间;只发出一个请求来获取内容
* 让浏览器来选择一种格式更简单、更快，也能也比用用户代理检测来使服务器支持数据库更可靠。
* 制定每个文件源的类型提高了网络性能；该浏览器可以直接选择一个视频源，而无需对先下载一部分视频来“嗅”（识别）一下视频的格式。

使用你的手机浏览器开发者工具，比较一下有type属性和没有用到type属性时的网络活动情况。同时检查一下你浏览器开发者工具的响应标题，确保你的服务器报告了正确的MINE类型；否则视频源的类型检查将无法正常工作。

#### 2.1.3 指定开始和结束时间

节省带宽，并使你的网站反映更灵敏：使用Media Fragments API接口来为视频元素添加开始时间和结束时间。

<video controls="">
    <source src="https://developers.google.com/web/fundamentals/media/video/video/chrome.webm#t=5,10" type="video/webm">
    <source src="https://developers.google.com/web/fundamentals/media/video/video/chrome.mp4#t=5,10" type="video/mp4">
    <p>This browser does not support the video element.</p>
</video>

代码加入到媒体的URL中，举个例子，如果想播放视频的第五秒到第十秒这段内容，只需要：

    <source src="video/chrome.webm#t=5,10" type="video/webm">

你还可以用Media Fragments API来提供对于一个视频的多个图像——就像DVD中的提示点一样——而不用编码或是提供于多个文件。
**记住：**

* Media Fragments API 支持大多数平台，但是不支持IOS平台。
* 确保你的服务器支持Range Requests（范围请求）。Range Requests在默认情况下被大多数服务器所启用，但一些托管服务可能会将其关闭。

用你的浏览器开发者工具，在响应标题中检查
![](http://gtms03.alicdn.com/tps/i3/TB1eEkSFVXXXXbtXVXXX.FD0XXX-2135-1282.png)


#### 2.1.4 包含海报图片

在视频元素中添加一个poster属性，从而你的用户将在这些元素加载时就对视频内容有所了解，而不需要在下载视频或是开始播放之后才知道其内容。
    
    <video poster="poster.jpg" ...>
        ...
    </video>

如果视频的src受损或者所提供的视频格式全部不被支持时，poster也可以是一个备选。poster图像的唯一缺点是会有一个额外的文件请求，这回消耗一定的带宽并且需要渲染。如果想了解更多信息，请参见图像优化这章。
下面是两个并列在一起比较的无海报图片和含有海报图片的视频——我们将海报图像做成灰度图来证明其不是视频。

![](http://gtms04.alicdn.com/tps/i4/TB1Q4w_FVXXXXciXXXXOUv7RFXX-829-626.png)


### 2.2 提供传统平台的替代品

并不是所有平台都支持所有的视频格式，检查一下主流平台所支持的视频格式，并且确保你的视频在这些主流平台中都可以运行。


#### 2.2.1 确认支持的视频格式

使用 canPlayType() 可找出所支持的视频格式。该方法有一个由 mime-type 和可选的解码器组成的字符串变量，返回下面这些值：

<table class="table"><thead><tr><th>Return value</th><th>Description</th></tr></thead><tbody><tr><td data-th="Return value">(empty string)</td><td data-th="Description">The container and/or codec isn't supported.</td></tr><tr><td data-th="Return value"><code>maybe</code></td><td data-th="Description">The container and codec(s) might be supported, but the browser will need to download some video to check.</td></tr><tr><td data-th="Return value"><code>probably</code></td><td data-th="Description">The format appears to be supported.</td></tr></tbody></table>

这里有些范例， canPlayType() 的参数和在Chrome运行时的返回值：

<table class="table"><thead><tr><th>Type</th><th>Response</th></tr></thead><tbody><tr><td data-th="Type"><code>video/xyz</code></td><td data-th="Response">(empty string)</td></tr><tr><td data-th="Type"><code>video/xyz; codecs="avc1.42E01E, mp4a.40.2"</code></td><td data-th="Response">(empty string)</td></tr><tr><td data-th="Type"><code>video/xyz; codecs="nonsense, noise"</code></td><td data-th="Response">(empty string)</td></tr><tr><td data-th="Type"><code>video/mp4; codecs="avc1.42E01E, mp4a.40.2"</code></td><td data-th="Response"><code>probably</code></td></tr><tr><td data-th="Type"><code>video/webm</code></td><td data-th="Response"><code>maybe</code></td></tr><tr><td data-th="Type"><code>video/webm; codecs="vp8, vorbis"</code></td><td data-th="Response"><code>probably</code></td></tr></tbody></table>


#### 2.2.2 生成多种格式的视频

有很多工具可以把同一视频保存为其他格式：

* 桌面工具： [FFmpeg](https://ffmpeg.org/)
* GUI 应用程序：[Miro](https://www.mirovideoconverter.com/)、[HandBrake](https://handbrake.fr/)、[VLC](https://www.videolan.org/)
* 在线编码/转码服务：[Zencoder](https://en.wikipedia.org/wiki/Zencoder)、[Amazon Elastic Encoder](https://aws.amazon.com/elastictranscoder)

#### 2.2.3 检测所使用的视频格式

想知道浏览器实际支持哪些视频格式么？
在 JavaScript 中，使用视频的currentSrc 属性，可返回所使用的源。
想看这个操作的话，可以查看这个示例：Chrome 和 Firefox 选用 chrome.webm（因为它是这两个浏览器所支持的视频格式列表的第一个条目），而 Safari 选用 chrome.mp4。


### 2.3 自定义视频播放器

不同平台播放视频的方式不同。移动平台的解决方案需要考虑设备的方向（横向或者纵向视图）。使用全屏API来控制视频内容的全屏视图。


#### 2.3.1 跨设备的设备方向检测

在台式显示器或者笔记本电脑上很少会考虑设备的方向，但如果要在手机和平板上做网页设计，设备的方向就尤为重要了。
iPhone上的Safari对横竖方向转换的支持就做得很好。

![](http://gtms01.alicdn.com/tps/i1/TB1WmUSFVXXXXcBXVXXaZfs6XXX-652-371.png)

而iPad与Chrome for Android对设备方向的支持则可能会出现问题。比如，在iPad的横向模式上播放无任何配置的视频就会是这个样子：

![](http://gtms04.alicdn.com/tps/i4/TB172JXGXXXXXciXXXX8JnCIVXX-600-450.png)

在CSS上设置视频width:100%或者max-width:100%可以解决大部分的设备横向布局问题。你也可以考虑使用全屏的解决方案。


#### 2.3.2 页内或全屏播放

不同平台播放视频的方式不一样。iPhone上的Safari会在页内显示视频元素，而播放时会进入全屏：\

![](http://gtms02.alicdn.com/tps/i2/TB1qEUYFVXXXXXoaXXX3sk2NVXX-400-600.png)

在安卓上，视频默认在页内播放，用户可以按全屏按钮请求全屏。

![](http://gtms03.alicdn.com/tps/i3/TB1bbU4FVXXXXcSXFXX7oBEJVXX-360-600.png)

iPad上的Safari在页内播放视频：

![](http://gtms04.alicdn.com/tps/i4/TB172JXGXXXXXciXXXX8JnCIVXX-600-450.png)


#### 2.3.3 控制全屏内容

对于不支持全屏播放的平台，可以使用广泛支持的全屏API。用这个API去控制全屏内容或者页面。

要全屏一个元素，比如一个视频：
    
    elem.requestFullScreen();

使整个document对象全屏
    
    document.body.requestFullScreen();

还可以监听全屏状态转换
    
    video.addEventListener("fullscreenchange", handler);
 
或者检测一个元素是否正处于全屏模式
    
    console.log("In full screen mode: ", video.displayingFullscreen);

还可以用CSS伪类 :fullscreen 去改变元素在全屏模式下的样式。在支持全屏API的设备上，可以考虑用缩略图作为视频的占位符。

<video autoplay="" loop="" class="center">
    <source src="https://developers.google.com/web/fundamentals/media/video/video/fullscreen.webm" type="video/webm">
    <source src="https://developers.google.com/web/fundamentals/media/video/video/fullscreen.mp4" type="video/mp4">
    <p>This browser does not support the video element.</p>
</video>

**注意：**requestFullScreen() 当前还处在测试阶段，可能需要额外的代码来实现完整的跨浏览器支持。


### 2.4 合理调整视频尺寸

当事情涉及到保证你的用户开心时，视频的大小就很重要了。

* 使用大尺寸和高质量视频时注意不要超出平台的承受范围。
* 视频应尽可能的短。
* 过长的视频可能会引起下载和加载的中断；有的浏览器会等待视频下载完才开始播放。


#### 2.4.1 检查视频大小

视频真正的编码帧大小有可能与视频元素的大小不一样（就像图片不一定按照它本身的大小显示）。要检测视频编码的大小，可以用视频元素的 videoWidth 和 videoHeight 属性。而 width 和 height 则返回视频元素的大小，这两个值可能已被 CSS 或内联 width 和 height 属性修改了。


#### 2.4.2 确保视频没有溢出容器

当视频元素大小超过窗口时就有可能会溢出容器，此时用户将无法看到完整的内容或使用上面的控件。

![](http://gtms04.alicdn.com/tps/i4/TB1H0.YFVXXXXcMXVXXOy7X4VXX-647-353.png)

你可以通过 JavaScript 或 CSS 控制视频大小。像 FitVids 之类的 JavaScript 库或插件可以方便地保持适当的大小和宽高比，甚至可以用在 YouTube 和其它源的 Flash 视频上。
使用 CSS 媒体查询去指定元素的大小随窗口尺寸变化而变化。max-width: 100% 会是你的好朋友。
**注意：**不要强行改变视频的宽高比。压扁或者拉伸都会很难看。
对于 iframes 中的媒体内容（像 YouTube 视频），可以采用响应式的方法（如John Surdakowski提出的这个）。

**CSS:**

    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 30px;
        height: 0;
        overflow: hidden;
    }

    .video-container iframe,
    .video-container object,
    .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

**HTML:**

    <div class="video-container">
      <iframe src="//www.youtube.com/embed/l-BA9Ee2XuM"
              frameborder="0" width="560" height="315">
      </iframe>
    </div>

<!-- 对比可响应式例子和不可响应的例子 -->

### 2.5 可访问性很重要

可访问性不是一个特性。缺少了字幕和描述，有视力或听力障碍的用户根本无法去了解一个视频。相比糟糕的用户体验，添加此类内容花费的时间不算什么。所以，为所有用户都提供一个基本的用户体验吧。

#### 2.5.1 引入字幕来增加可访问性

利用轨道元素（track element）添加字母或描述来增加媒体在移动设备上的可访问性。
**记住：**Chrome for Android，iOS Safari 和当前所有的桌面浏览器都支持轨道元素，除了火狐。可以用填充物（polyfills）替代，我们推荐 Playr 或者Captionator。
使用了轨道元素后，字幕看起来是这样的：

![](http://gtms01.alicdn.com/tps/i1/TB1IK8XGXXXXXcwXXXX09MwNpXX-819-491.jpg)


#### 2.5.2 添加轨道元素

为视频添加字幕很简单，就是添加一个轨道元素作为视频元素的孩子。
    
    <video controls>
        <source src="chrome.webm" type="video/webm" />
        <source src="chrome.mp4" type="video/mp4" />
      <track src="chrome-subtitles-en.vtt" label="English captions"
             kind="captions" srclang="en" default>
      <p>This browser does not support the video element.</p>
    </video>

轨道元素的 src 属性提供了轨道文件的位置。


#### 2.5.3 在轨道文件中定义字幕

轨道文件使用 WebVTT 格式描述时间的开始

    
    WEBVTT

    00:00.000 --> 00:04.000
    Man sitting on a tree branch, using a laptop.

    00:05.000 --> 00:08.000
    The branch breaks, and he starts to fall.

    ...

### 2.6 快速参考

video元素的属性一览表

#### 2.6.1 视频元素的属性

要查看完整的视频元素属性和定义，参阅W3C的[视频元素](http://www.w3.org/TR/html5/embedded-content-0.html#the-video-element)。

<table class="table"><thead><tr><th>Attribute</th><th>Availability</th><th>Description</th></tr></thead><tbody><tr><td data-th="Attribute"><code>src</code></td><td data-th="Availability">All browsers</td><td data-th="Description">Address (URL) of the video.</td></tr><tr><td data-th="Attribute"><code>poster</code></td><td data-th="Availability">All browsers</td><td data-th="Description">Address (URL) of an image file that the browser can show as soon as the video element is displayed, without downloading video content.</td></tr><tr><td data-th="Attribute"><code>preload</code></td><td data-th="Availability">All mobile browsers ignore preload.</td><td data-th="Description">Hints to the browser that preloading metadata (or some video) in advance of playback is worthwhile. Options are none, metadata, or auto (see Preload section for details).</td></tr><tr><td data-th="Attribute"><code>autoplay</code></td><td data-th="Availability">Not supported on iPhone or Android; supported on all desktop browsers, iPad, Firefox and Opera for Android.</td><td data-th="Description">Start download and playback as soon as possible (see Autoplay section).</td></tr><tr><td data-th="Attribute"><code>loop</code></td><td data-th="Availability">All browsers</td><td data-th="Description">Loop the video.</td></tr><tr><td data-th="Attribute"><code>controls</code></td><td data-th="Availability">All browsers</td><td data-th="Description">Show the default video controls (play, pause, etc.)</td></tr></tbody></table>


**Autoplay**

对于桌面版，autoplay 告诉浏览器尽可能早的开始下载和播放。在 iOS 和 Chrome for Android 上，autoplay 是无效的，用户必须点击屏幕去播放视频。
即使在支持自动播放的平台上，你也要考虑启用它是不是一个好主意：
* 数据流量有可能是昂贵的。
* 不经询问，一开始就下载和播放会不经意的占用带宽和 CPU，延迟了页面的渲染。
* 用户所处的环境可能不适合播放视频和音频。
自动播放行为可以在 Android 网络视图（WebView）通过 WebSettings API 配置。它默认是 true 但一个网络视图应用程序可以选择禁用它。


**Preload**

preload 属性提示浏览器应该预加载多少信息和内容。

<table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td data-th="Value"><code>none</code></td><td data-th="Description">The user may not even watch the video – don't preload anything</td></tr><tr><td data-th="Value"><code>metadata</code></td><td data-th="Description">Metadata (duration, dimensions, text tracks) should be preloaded, but with minimal video.</td></tr><tr><td data-th="Value"><code>auto</code></td><td data-th="Description">Downloading the entire video right away is considered desirable.</td></tr></tbody></table>

preload 属性在不同的平台上有不同的效果。比如，Chrome 的桌面版会缓冲25秒的视频，但 iOS 与 Android 版则不会。这意味着在移动版上会出现桌面版所没有的播放启动延迟。详情参阅 [Steve Souders’test page](https://stevesouders.com/tests/mediaevents.php) 。


#### 2.6.2 JavaScript

[The HTML5 Rocks Video article](https://www.html5rocks.com/en/tutorials/video/basics/#toc-javascript) 很好的总结了控制视频播放的 JavaScript 属性、方法和事件。我们这里已经包括了这些内容，并更新了与移动方面相关的一些内容。

**属性：**
<table class="table"><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td data-th="Property"><code>currentTime</code></td><td data-th="Description">Get or set playback position in seconds.</td></tr><tr><td data-th="Property"><code>volume</code></td><td data-th="Description">Get or set current volume level for the video.</td></tr><tr><td data-th="Property"><code>muted</code></td><td data-th="Description">Get or set audio muting.</td></tr><tr><td data-th="Property"><code>playbackRate</code></td><td data-th="Description">Get or set playback rate; 1 is normal speed forward.</td></tr><tr><td data-th="Property"><code>buffered</code></td><td data-th="Description">Information about how much of the video has been buffered and is ready to play (see <a href="http://people.mozilla.org/~cpearce/buffered-demo.html" title="Demo displaying amount of buffered video in a canvas element">demo</a>).</td></tr><tr><td data-th="Property"><code>currentSrc</code></td><td data-th="Description">The address of the video being played.</td></tr><tr><td data-th="Property"><code>videoWidth</code></td><td data-th="Description">Width of the video in pixels (which may be different from the video element width).</td></tr><tr><td data-th="Property"><code>videoHeight</code></td><td data-th="Description">Height of the video in pixels (which may be different from the video element height).</td></tr></tbody></table>

playbackRate和volume在移动端都不支持

**方法**

<table class="table"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td data-th="Method"><code>load()</code></td><td data-th="Description">Load or reload a video source without initiating playback: for example, when the video src is changed using JavaScript.</td></tr><tr><td data-th="Method"><code>play()</code></td><td data-th="Description">Play the video from its current location.</td></tr><tr><td data-th="Method"><code>pause()</code></td><td data-th="Description">Pause the video at its current location.</td></tr><tr><td data-th="Method"><code>canPlayType('format')</code></td><td data-th="Description">Find out which formats are supported (see Check which formats are supported).</td></tr></tbody></table>

在移动设备上（除了 Opera 和 Android）play() 和 pause() 只有在响应用户动作的时候才有效，比如点击一个按钮（参阅样例）。同样地，对于嵌入 YouTube 视频之类的内容也不能启动播放。

**事件**

这只是可能发射的媒体事件的一个子集。完整的列表请参阅 Mozilla 开发者社群上的[媒体事件](https://developer.mozilla.org/docs/Web/Guide/Events/Media_events)页面。

<table class="table"><thead><tr><th>Event</th><th>Description</th></tr></thead><tbody><tr><td data-th="Event"><code>canplaythrough</code></td><td data-th="Description">Fired when enough data is available that the browser believes it can play the video completely without interruption.</td></tr><tr><td data-th="Event"><code>ended</code></td><td data-th="Description">Fired when video has finished playing.</td></tr><tr><td data-th="Event"><code>error</code></td><td data-th="Description">Fired if an error occurs.</td></tr><tr><td data-th="Event"><code>playing</code></td><td data-th="Description">Fired when video starts playing for the first time, after being paused, or when restarting.</td></tr><tr><td data-th="Event"><code>progress</code></td><td data-th="Description">Fired periodically to indicate download progress.</td></tr><tr><td data-th="Event"><code>waiting</code></td><td data-th="Description">Fired when an action is delayed pending completion of another action.</td></tr><tr><td data-th="Event"><code>loadedmetadata</code></td><td data-th="Description">Fired when browser finishes loading metadata for video: duration, dimensions and text tracks.</td></tr></tbody></table>







