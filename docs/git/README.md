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

## Git提交时不需要密码

- 情况一
1. 用SSH克隆(clone)下来的配置好无密码公钥则不需输入密码  
2. 命令行工具输入`ssh-keygen -t rsa -C "邮箱地址"`  
3. 
```sh
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/schacon/.ssh/id_rsa):（公钥文件名称）
Created directory '/home/schacon/.ssh'.
Enter passphrase (empty for no passphrase):(不需密码则回车留空)
Enter same passphrase again:（如上）
Your identification has been saved in /home/schacon/.ssh/id_rsa.
Your public key has been saved in /home/schacon/.ssh/id_rsa.pub.
The key fingerprint is:
d0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 schacon@mylaptop.local
```

- 情况二
1. 用HTTPS克隆(clone)下来的需输入密码，但是可以缓存密码，自动输入
2. 设置`credential helper`  
凭据可以设置为全局，也可以设置当前项目下起作用。  
如果设置全局，则：  
`git config –global credential.helper store –file=git_credentails.`
如果设置当前项目，则进入项目代码目录下，运行：  
`git config credential.helper store –file=.git_credentails.`
上面的–file=.git-credentials表示用户名密码存储的文件位置。  


- 情况三
1. 在本地git库目录终端下，输入以下代码，输出所匹配的远程库。
```sh
git remote -v
```
如果使用的是https替换为ssh方式即可
```sh
git remote set-url origin git@github.com:name/repo
```
2. 在目标终端下，按照如下命令行重新添加私钥
```sh
ssh-add ~/.ssh/id_rsa
```
> ~/.ssh/id_rsa 为bash路径下的.ssh文件夹中的id_rsa文件（id_rsa具体为密钥文件名，需用哪个密钥就改为哪个）
在执行`ssh-add ~/.ssh/id_rsa`时发生Could not open a connection to your authentication agent错误，
执行如下命令`ssh-agent bash`
然后再执行`ssh-add ~/.ssh/id_rsa`即可

3. 添加成功后，重新尝试是否可以push和pull