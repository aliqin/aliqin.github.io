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

# 新建页面
```
所有本地工作完成后，就可以发布了。我们使用public文件夹下的静态内容作为站点，第一次提交需要将gh-pages分支关联到public文件夹下：
```bash
cd public && git init
git git add remote 0326 git@github.com:0326/aliqin.github.io.git
git fetch 0326 gh-pages && git checkout gh-pages
```
之后回到根目录执行`hugo`命令生成静态网站并提交：
```bash
cd .. && hugo && cd public
git add . && git commit -m 'add new post'
git push 0326 gh-pages
```

