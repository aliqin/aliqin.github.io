+++
title = "导航和行为模式"
date = "2014-05-16T00:18:34+08:00"
author = "shenlm203"
tags = ["响应式Web"]
comments = true
draft = false
share = true
menu = ""
image = ""
+++

# 1 应用栏
多年使用互联网的经验告诉用户所有桌面站点都应该有一个页头（page header），但是在移动端，你需要的就是应用栏（APP Bar）。

<!--more-->

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

## 1.1 按钮在左边还是右边
如果在菜单上你想要添加滑动，那么菜单最好是要放在左边或者右边。
页面的左上角应该算是UI设计中最重要的一个位置，但如果是单手持机，这也是最难触碰到的位置。而将菜单放在右上角会突出这个图标，显示它的重要性，但是单手持机的时候，这个位置又容易被误碰。
<img src="http://gtms02.alicdn.com/tps/i2/TB1D.kYFVXXXXaXXFXXWgIpNFXX-608-360.png" alt="" width="50%"><img src="http://gtms01.alicdn.com/tps/i1/TB1mRM3FVXXXXaxXpXXWgIpNFXX-608-360.png" alt="" width="50%">

## 1.2 设计指南
应用栏是一个你需要将一系列主要内容放在上面的东西，用户可以通过它估计到一些与站点有关的信息，在应用栏上你可以玩各种有趣的花样：更改栏目、按钮的样式，还有交互上也能表现新意。
<img src="http://gtms02.alicdn.com/tps/i2/TB1.U.TFVXXXXchXFXXWgIpNFXX-608-360.png" alt="" width="50%"><img src="http://gtms02.alicdn.com/tps/i2/TB12w3YFVXXXXXKXFXXWgIpNFXX-608-360.png" alt="" width="50%">


# 2 Tab Bar

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


# 3 Navigation Drawer

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

# 4 底栏
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


