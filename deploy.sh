#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

git add -A
git commit -m 'deploy'
git push

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git config user.email "987425154@qq.com"
git config user.name "Allen"
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/JS-an/page.git master:gh-pages
git push -f git@github.com:JS-an/page.git master:gh-pages

echo 按任意键继续
read -n 1
echo 继续运行

cd -