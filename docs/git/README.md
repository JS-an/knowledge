## Git命令官网

- [文档地址](https://www.git-scm.com/book/zh/v2)

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

## Git报错

### setting certificate verify locations
- 修改正确路径
```bash
git config --system http.sslcainfo "C:\Program Files (x86)\git\bin\curl-ca-bundle.crt"
```
或
- 忽略SSL验证
```bash
git config --system http.sslverify false
```

## Git配置多个账号

- 配置多个Git账号的原因

比如已经配置GitHub账号，在Gitee有另一个账号，将代码发布到Gitee上会报错，因此需要配置多个git账号。

- 配置多个Git账号的方法
1. `git config --list` 查看全局配置
2. 移除Git全局配置
```bash
# 移除全局账户
git config --global --unset user.name
# 移除全局邮箱
git config --global --unset user.email
# 移除全局密码
git config --global --unset user.password
```
3. 生成SSH KEY：`ssh-keygen -t rsa -C "邮箱地址"`
4. 登录代码平台，进入Settings - SSH and GPG keys，将pub里的密钥配置进去
5. 查看密钥是否生效: 例如git平台`ssh -T git@github.com`
> 多个账号重复3，4，5步骤
6. 在.ssh下新建config文件，进行配置
```bash
# 配置说明
# Host    　　主机别名
# HostName　　服务器真实地址
# PreferredAuthentications　　认证方式
# IdentityFile　　私钥路径
# User　　用户名

# 配置gitee
  Host gitee.com
  HostName gitee.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_allen1
  User allen1
        
# 配置github
  Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa_allen2
  User allen2
```
7. 为各仓库单独配置用户名和邮箱
```bash
git config user.name "用户名"
git config user.email "邮箱"
```
- ps:如果原来使用HTTPS，则需修改远程仓库地址
```bash
git remote rm origin
git remote add origin git@user.github.com:用户名/仓库名.git
```