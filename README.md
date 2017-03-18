# aliqin 官方技术博客
#### [http://aliqin.github.io](http://aliqin.github.io)

## 贡献博客
基于 [Hugo](https://gohugo.io/) 静态站点生成器，主题源于 [Casper](http://themes.gohugo.io/casper/).
```bash
# install Hugo: https://gohugo.io/overview/installing/
brew update && brew install hugo

# clone this repo
git clone repo && cd repo

# server and visit: http://localhost:1313/
hugo server
```
常用操作：
```bash
# 新建博客文章,统一使用date-article-name.md命名格式,如20170101-ES6-in-depth.md
hugo new post/your-article.md
```
所有本地工作完成后，就可以发布了。我们使用public文件夹下的静态内容作为站点，第一次提交需要将master分支关联到public文件夹下：
```bash
cd public && git init
git git add remote origin git@github.com:aliqin/aliqin.github.io.git
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

# 实时监听静态css/js文件修改
npm run server

# 启动hugo 服务，实时预览页面
hugo server
```
完成开发后执行`npm run build && hugo`，之后将public文件夹push到master即可。


