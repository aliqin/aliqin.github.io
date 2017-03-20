# aliqin 官方技术博客
#### [http://aliqin.github.io](http://aliqin.github.io)

## 贡献博客
基于 [Hugo](https://gohugo.io/) 静态站点生成器，主题源于 [Casper](http://themes.gohugo.io/casper/).
```bash
# install Hugo: https://gohugo.io/overview/installing/
brew update && brew install hugo

# clone this repo
git clone git@github.com:aliqin/aliqin.github.io.git && cd aliqin.github.io

# clone casper themes, and remote the .git info
cd themes
git clone https://github.com/vjeantet/hugo-theme-casper casper
rm -fr casper/.git

# return root and server, then visit http://localhost:1313/
cd .. && hugo server
```
### 新建博客文章
```bash
# 统一使用date-article-name.md命名格式,如20170101-ES6-in-depth.md
hugo new post/your-article.md
```
此时会在content/post下面新建一篇文章，内容以及含义如下：
```
+++
# 必填，文章日期，自动生成
date = "2017-03-19T10:41:35+08:00"
# 必填，作者信息，会自动匹配data/authors下面作者信息，文件名即author名，如果你没找到自己请自行加上
author = "aliqin"
# 文章标签，可不填，控制在4个以内                    
tags = []
# 文章标题
title = "文章标题"
# 是否允许分享
share = true
# 是否允许评论
comments = true
# 是否有封面图片
image = ""
# 是否为草稿，如果为true则不会发布到网站
draft = false

+++

文章概要，这段文本将显示在文章列表里面。

<!--more-->

这里是文章正文。
```

所有本地工作完成后，就可以发布了。我们使用public文件夹下的静态内容作为站点，第一次提交需要将master分支关联到public文件夹下：
```bash
cd public && git init
git add remote origin git@github.com:aliqin/aliqin.github.io.git
git pull origin master
```
之后回到根目录执行`hugo`命令生成静态网站并提交：
```bash
cd .. && hugo && cd public
git add . && git commit -m 'add new post'
git push origin master
```

## 网站开发
网站开发分为两块，一块是css/js/img 静态文件，工作目录为src/文件夹，一块是html模板文件，工作目录为layouts/文件夹。

```bash
# 安装依赖
npm install

# 启动hugo 服务，实时预览页面, 并且实时监听静态css/js文件修改
npm run dev
```
Hugo的基本思路是默认使用themes/casper下面的文件，如果在项目根目录下有同名文件，则会有限使用根目录下文件。
比如可以用根目录下的`layouts/`文件夹中内容覆盖`themes/casper/layouts`中内容，`static/css/screen.css`覆盖`themes/casper/static/css/screen.css`中内容。

> 不要直接修改static/中文件，修改src/下文件然后`npm run build`生成在public/中。

完成开发后执行`npm run build`，之后将public文件夹push到master即可。


