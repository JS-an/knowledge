
## GitHub部署VuePress
> [引用VuePress官网](https://vuepress.vuejs.org/zh/guide/deploy.html)

1. 下述的指南基于以下条件：
- 文档放置在项目的 docs 目录中；
- 使用的是默认的构建输出位置；
- VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的 npm scripts:
```json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```
2. 在 `docs/.vuepress/config.js` 中设置正确的 base。

   如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 `base` 默认即是 `"/"`。

   如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base` 设置为 `"/<REPO>/"`。

3. 在你的项目中，创建一个如下的 `deploy.sh` 文件（请自行判断需要的注释）:
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

## 第二

1. 1212
2. 1212
3. 1212
4. 1212
5. 1212
6. 1212
7. 1212
8. 1212
9. 1212
10. 1212

## 第三

1. 1212
2. 1212
3. 1212
4. 1212
5. 1212
6. 1212
7. 1212
8. 1212
9. 1212
10. 1212

## 第四

1. 1212
2. 1212
3. 1212
4. 1212
5. 1212
6. 1212
7. 1212
8. 1212
9. 1212
10. 1212