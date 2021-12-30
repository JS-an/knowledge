## Git 命令官网

- [文档地址](https://www.git-scm.com/book/zh/v2)

## GitHub 部署 VuePress

> [引用 VuePress 官网](https://vuepress.vuejs.org/zh/guide/deploy.html)

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

## Git 报错

### setting certificate verify locations

- 修改正确路径

```bash
git config --system http.sslcainfo "C:\Program Files (x86)\git\bin\curl-ca-bundle.crt"
```

或

- 忽略 SSL 验证

```bash
git config --system http.sslverify false
```

## Git 配置多个账号

- 配置多个 Git 账号的原因

比如已经配置 GitHub 账号，在 Gitee 有另一个账号，将代码发布到 Gitee 上会报错，因此需要配置多个 git 账号。

- 配置多个 Git 账号的方法

1. `git config --list` 查看全局配置
2. 移除 Git 全局配置

```bash
# 移除全局账户
git config --global --unset user.name
# 移除全局邮箱
git config --global --unset user.email
# 移除全局密码
git config --global --unset user.password
```

3. 生成 SSH KEY：`ssh-keygen -t rsa -C "邮箱地址"`
4. 登录代码平台，进入 Settings - SSH and GPG keys，将 pub 里的密钥配置进去
5. 查看密钥是否生效: 例如 git 平台`ssh -T git@github.com`
   > 多个账号重复 3，4，5 步骤
6. 在.ssh 下新建 config 文件，进行配置

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

- ps:如果原来使用 HTTPS，则需修改远程仓库地址

```bash
git remote rm origin
git remote add origin git@user.github.com:用户名/仓库名.git
```

## Git 提交时不需要密码

- 情况一

1. 用 SSH 克隆(clone)下来的配置好无密码公钥则不需输入密码
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

1. 用 HTTPS 克隆(clone)下来的需输入密码，但是可以缓存密码，自动输入
2. 设置`credential helper`  
   凭据可以设置为全局，也可以设置当前项目下起作用。  
   如果设置全局，则：  
   `git config –global credential.helper store –file=git_credentails.`
   如果设置当前项目，则进入项目代码目录下，运行：  
   `git config credential.helper store –file=.git_credentails.`
   上面的–file=.git-credentials 表示用户名密码存储的文件位置。

- 情况三

1. 在本地 git 库目录终端下，输入以下代码，输出所匹配的远程库。

```sh
git remote -v
```

如果使用的是 https 替换为 ssh 方式即可

```sh
git remote set-url origin git@github.com:name/repo
```

2. 在目标终端下，按照如下命令行重新添加私钥

```sh
ssh-add ~/.ssh/id_rsa
```

> ~/.ssh/id_rsa 为 bash 路径下的.ssh 文件夹中的 id_rsa 文件（id_rsa 具体为密钥文件名，需用哪个密钥就改为哪个）
> 在执行`ssh-add ~/.ssh/id_rsa`时发生 Could not open a connection to your authentication agent 错误，
> 执行如下命令`ssh-agent bash`
> 然后再执行`ssh-add ~/.ssh/id_rsa`即可

3. 添加成功后，重新尝试是否可以 push 和 pull

## Git 提交 PR

1. fork 别人的仓库：不可能直接在别人的代码仓库中直接修改代码，你也没有这个权限，因此你可以 fork 一份（相当于单独复制一个分叉出来）到你自己名下的一个仓库中

2. 将代码 clone 到本地：代码通常是在开发者本地修改和调试的不可能直接在远程的仓库上开发，因此需要将你 fork 的代码下载到本地。这里的术语是 git clone（复制一份）到本地

3. 设置 remote : `git remote add upstream https://xxx.com/xxx/xxx.git`

   > 如果你这是一次性，并且很快就提交了，可以忽略此步，但不建议

4. 建立一个分支,修改代码：在本地可以修改你的代码(最好是在分支上修改代码,方便主支拉取最新源码,执行变基,PR 不会造成冲突)

   > 任何时候在提交 PR 前，其他 PR 在一段时间没有被接受时都应该：
   >
   > 1. git fetch 源码仓库
   > 2. git rebase 源码仓库/master
   > 3. 如果不冲突，就直接 git push; 如果冲突，就解决冲突，然后 git push
   > 4. 此时的 PR 代码可以直接被合并，现在去提交 PR，也不会冲突了。

5. 提交代码到你自己的仓库：将修改好的代码先提交到你自己的仓库中

6. 提交 PR：在你自己的仓库中，将改动的那部分内容，向原项目仓库中提交一个请求（PR），申请将这部分改动合并到主仓库中如果顺利的话，原仓库的维护者会接收你的 PR 的，但是通常不会那么顺利（原因有很多种）

7. 合并之后: 拉取最新的源码,自己的分支可删可不删.(如果 PR merge 后，会给出一个删除你项目中分支的操作，可直接点击。)

## Git 变基与合并

1. 合并就是将两个 commit 合并成一个新的 commit,即 A + B = C

2. 变基是将 B 基于 A1 主支的分支变成基于 A2 主支的分支
