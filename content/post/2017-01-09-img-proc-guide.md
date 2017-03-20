+++
title = "前端图像处理指南"
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

计算机图像处理是一门很成熟的技术，任何一门可操作系统接口的语言都能很轻易的实现各种处理操作。但是前端限于浏览器环境和接口限制，处理起来会有诸多不便，这里所说的前端图像处理，是真的指**不借助任何后端服务**纯前端实现的图像处理。本文会介绍canvas位图处理，SVG矢量图和CSS3图像处理，重点是canvas，并且最后会附上一个[TrimPNG小应用](http://quanfeng.tech/trimpng/)。

<!--more-->

# canvas位图处理
HTML5 canvas为我们提供了一块画布，让前端也有了操作位图的功能：图片旋转、缩放、滤镜、压缩等都可以通过JS来实现。
### 图像基本处理
通过设置drawImage参数可以实现图片绘制、缩放、拉伸和裁剪等操作(`注意canvas无法绘制体积过大图片，否则会卡甚至崩掉，大图可以分块读取绘制`)：

![图片描述][1]

> 详细用法参考 [drawImage()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)，DEMO源码戳这里 [JS Bin](http://jsbin.com/nuqojowayi/edit?html,output). 

只需要drawImage一个方法，就可以实现基本图形处理功能，再结合鼠标或滚轮事件，就可以实现更复杂的局部放大预览，缩放等功能了。

### 图像滤镜处理
现在的朋友圈发个图都要用滤镜美一下，复古清纯胶片LOMO各种风格应有尽有。canvas提供了getImageData方法来获取图像上每一个像素点的RGBA信息，这样我们就能对图片进行像素级处理了。通过特定算法来重写imageData中的像素信息，然后用setImageData方法把新的数据重新绘制在canvas上，这样就可以实现图像滤镜打码加特效等一系列功能。

比如我们现在要实现一个复古滤镜:
```javascript
// 复古滤镜处理算法：获取每个像素的RGB信息，并按特定权重返回其加权平均值
let sepiaFilter = function(imgData) {
  let d = imgData.data
  for (let i = 0; i < d.length; i += 4) {
    let r = d[i]
    let g = d[i + 1]
    let b = d[i + 2]
    d[i] = (r * 0.393) + (g * 0.769) + (b * 0.189) // red
    d[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168) // green
    d[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131) // blue
  }
  return imgData
}
//图像地址必须和当前页面同域，否则会报cross-origin错误 
img.src = '/img/logo@2x.png' 
img.onload = () => {
  ctx.drawImage(img, 0, 0) // 绘制原图
  let imgData = ctx.getImageData(0, 0, img.width, img.height) // 获取图片信息
  ctx.putImageData(sepiaFilter(imgData), 100, 0) // 绘制处理后图片
}
```
![图片描述][2]

> 详细用法参考 [getImageData()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getImageData) 和  [putImageData()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData)，DEMO源码戳这里 [JSFiddle](https://jsfiddle.net/vghszt61/2/).

滤镜处理关键在于滤镜算法，要想写出更高级的特效需要有计算机图形学基础，对卷积矩阵、拉普拉斯变换、傅里叶变换等数学知识也要了解，这个坑很大我就不挖了。

### 图像base64存储
加完特效后如果我们想把图像保存下来，就可以用toDataURL方法来对图片进行格式转换、压缩存储了。
```javascript
// 支持三种文件类型：image/png(默认) | image/jpeg | image/webp(仅Chrome)
canvas.toDataURL() // 默认存储为png
// 仅jpeg/webp支持质量参数(0~1,默认0.92)
canvas.toDataURL("image/jpeg", 0.1) // 存储为质量为0.1的jpeg
```
由于存储形式是base64编码，原来图片的每三个字节都会被扩展成4字节，所以整体上编码后数据会比原来多约1/3。以下是通过toDataURL存储后的图片和原图大小相关对比数据(`数据仅供参考，不具通用性`)：

![图片描述][3]

可见存储后图片体积并不是原来的4/3，实际上处理后的图片都会比原图大好几倍，并且不同的图片增大的体积也是不确定的。如果是要上传图片到服务器，可以把base64转化成Blob二进制数据压缩上传；如果要直接在前端显示或供用户下载，jpg还好可以设置质量参数，要是png就没法压缩了。

只是用toDataURL还不够，用户需要通过`手动点击图片-右键图片存储为`来保存图片，如果要实现点击下载按钮自动下载图片还需要修改图片类型为octet-stream，然后利用HTML5的download属性强制让浏览器下载。

>详细用法参考[toDataURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL). 自动下载图片DEMO源码快戳我 [JSFiddle](https://jsfiddle.net/0326/vghszt61/4/#).

### 程序员的备胎
有了以上基础，再结合成熟的图形处理算法，我们可以完成日常工作中大部分图像处理需求，以下列出了一些相关轮子可做备胎。备胎这种东西多多益善，万一以后用到了呢？

`注意：本人很专一。`

#### [html2canvas](http://html2canvas.hertzen.com/documentation.html)
将web页面通过canvas来实现截屏，其原理就是遍历DOM结构和样式，然后在canvas中绘制出来，通过toDataURL输出图片。但由于canvas图片的同源策略限制，如果图片和网站不同源的话会截取不出来的。另外在微信中测试时，即使用同源的图片截取出来的图片也有问题，所以要想将其用于生产环境，还是得看场景，有很多坑要踩。

#### [code-to-image](https://github.com/akira-cn/code-to-image)
代码转图片工具。有时候你在不同的平台写文章贴代码，由于不同平台代码格式化规范不一，所以经常会出现代码排版问题，通过这个工具将代码转成图片就可以避免排版问题了。

#### [Cropper](https://fengyuanchen.github.io/cropper/)
一个专门用来做图片裁剪的应用。

#### [tracking.js](https://github.com/eduardolundgren/tracking.js/)
这是一个专业的计算机视觉处理JS库，包含了大量图形处理算法，可用来做人脸识别，色彩追踪等酷炫功能。

#### [qrcode2](https://github.com/nicolaszhao/qrcode2)
用JS动态生成二维码，这个库还是很实用的，原理就是qrcode算法+canvas绘图，不支持canvas的用table兼容。

#### [AlloyImage](https://github.com/AlloyTeam/AlloyImage)
腾讯出的基于HTML5的专业级图像处理开源引擎，功能很强大，简直就是Web版的PS。

![](https://img.alicdn.com/tps/TB1qqF.PXXXXXXFXXXXXXXXXXXX-1381-597.png)

以上列举部分，更多备胎在此： <https://github.com/0326/canvas>

# SVG矢量图处理
讲完位图再说矢量图。矢量图在绘制图标、商业LOGO、动画元素上应用非常广范。Web最开始支持的矢量图形并不是现在的SVG，而是微软主推的VML，所以在低版本IE下面只支持VML而不支持SVG，直到后来SVG成为W3C标准并被普及，微软才在IE9中支持SVG。

SVG遵循XML规范，可以很好的集成在HTML里面，同时支持JS脚本控制，还有基于SMIL标准的动态内容支持，做起动画来也是非常方便。目前基于SVG的JS图形库轮子也是非常多，如[svg.js](https://github.com/svgdotjs/svg.js), [Snap.svg](http://snapsvg.io/), [Velocity.js](http://velocityjs.org/), [D3.js](https://d3js.org)等等，目前暂无SVG应用需求，等用的时候再翻牌子吧。


# CSS图像处理
如果你的图像特效只是用来给用户展示，并不需要存储的话，可以直接用CSS处理，基本的调整图片大小、拉伸、旋转、裁切等操作直接几个CSS属性width/height/skew/rotate/clip-path等就能搞定了。如果想加特效，使用CSS滤镜Duang的一下就出来了，不需要任何图形学基础和数学知识：

![](https://img.alicdn.com/tps/TB19.p3PXXXXXc0XXXXXXXXXXXX-989-957.jpg)

> 详细说明见 [CSS filter - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter), [DEMO 源码见JS Bin](http://jsbin.com/cejifa/edit?html,output).

# 总结
最后介绍个小工具[TrimPNG](http://quanfeng.tech/trimpng/)。大家都知道[TinyPNG](https://tinypng.com/)可以压缩PNG, [TrimPNG](http://quanfeng.tech/trimpng/)顾名思义就是去除图片空白和白边的，实现了自动抠图和切图的功能（logo我是直接抄的TinyPNG，都是熊猫，应该不要紧😝）

![图片描述][4]

用到的技术点上面都说到了，裁切实现原理就是横向纵向分别扫描两次像素点阵，找出上下左右最外面的非透明点，然后定位出有效图像区域。<del>去除白边算法目前还比较傻逼，只要是接近白色的点都被我干掉了，后面再完善好了</del> 去白边算法优化了一下，采用标记清除策略（听着耳熟吧，其实就是从GC受的启发...），先扫描一遍标记出可疑白点，然后再扫描一遍，凡是与透明区域相邻的可疑白点就清除，当然这个算法也比较死，如果有更专业更智能的请务必告诉我。

体验地址：http://quanfeng.tech/trimpng/

> 本文只抛砖，作为工作时技能储备，如有任何补充欢迎留言交流：）


  [1]: http://7xp4vm.com1.z0.glb.clouddn.com/canvas_drawImage_DEMO_-_JS_Bin.png-q80
  [2]: http://segmentfault.com/img/bVHTYo
  [3]: http://7xp4vm.com1.z0.glb.clouddn.com/yy.jpg
  [4]: http://segmentfault.com/img/bVHV0v