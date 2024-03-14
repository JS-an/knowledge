## nvm(管理node版本)
1. **安装`nvm`（在Windows上则为`nvm-windows`）：**
  - [Windows](https://github.com/coreybutler/nvm-windows/releases)
  - [Linux/Mac](https://github.com/nvm-sh/nvm)
> 安装nvm之前最好先卸载掉之前的nodejs，可以在应用和程序里卸载，再删除相关的环境变量

2. **安装多个Node.js版本：**
   你需要为两个项目安装不同的Node.js版本。假设A项目需要16.x.x版本，B项目需要18.x.x版本，你可以这样安装：

   ```bash
   nvm install 16.13.2  # 安装16.x.x版本，这里以16.13.2为例
   nvm install 18.18.2   # 安装18.x.x版本，这里以18.18.2为例
   ```

3. **为每个项目切换Node.js版本：**
   
   当你准备工作于A项目时，在命令行中导航到A项目的目录，然后运行：

   ```bash
   nvm use 16.13.2
   ```

   这会将当前Shell（命令行界面）中使用的Node.js版本切换到16.13.2。此时，你可以运行A项目了。

   同理，当你需要切换到B项目并使用Node.js的18.18.2版本时，在命令行中先导航到B项目的目录，然后执行：

   ```bash
   nvm use 18.18.2
   ```

4. **自动化版本切换（可选）：**

   如果觉得每次都手动切换版本比较麻烦，你可以在每个项目的根目录下创建一个`.nvmrc`文件，其中指定该项目所需的Node.js版本。例如，A项目的`.nvmrc`文件内容为`16.13.2`，而B项目的`.nvmrc`文件内容为`18.18.2`。

   然后，当你在项目目录中时，只需要运行：

   ```bash
   nvm use
   ```

   `nvm`会自动读取`.nvmrc`文件中指定的版本号，并尝试切换到该版本。

> FQA
>1. 如果我先 nvm use 16.13.2 然后把A项目跑起来，再nvm use 18.18.2，把B项目也跑起来，这时会影响到正在跑的A项目吗

>当你使用`nvm use 16.13.0`设置Node.js的版本后，启动A项目，然后在同一个命令行会话中切换到另一个版本`nvm use 18.0.0`并启动B项目时，**不会**影响已经运行的A项目。

>这是因为每次你用`nvm use <version>`命令切换Node.js版本时，实际上是改变了当前命令行会话中的环境变量来指向不同版本的Node.js。一旦某个Node.js应用已经启动，它就会使用当时有效的Node.js版本继续运行，即便之后在相同的或不同的命令行会话中改变了Node.js的版本。

>简而言之，对于已经启动的Node.js应用程序，它们所依赖的Node.js版本和环境已经被加载到内存中，随后的版本切换操作不会对它们造成影响。但是，要注意的是，这里指的是在不同的命令行会话中进行操作；如果你尝试在同一个命令行窗口中更改版本并重新启动同一个应用，那么新启动的应用将会使用最新切换的Node.js版本。

>为了避免混淆，建议对于不同的Node.js版本需求，使用不同的命令行会话窗口（例如，一个终端窗口用于运行A项目，另一个用于运行B项目），或者使用特定的版本管理文件（如`.nvmrc`文件）在项目目录中自动指定所需的Node.js版本。

>你还可以把`nvm use version`添加到`package.json`的`script`上，运行项目的时候可以自动切换

## pm2

1. 安装 pm2
   ` npm install pm2 -g //全局安装`
2. 启动 nodejs 项目

```sh
pm2 start ./bin/www  #Express 项目启动

pm2 start app.js #指定nodejs 项目入口文件启动

pm2 start ./bin/www -i 4 --name "test" # -i 制定启动4个进程 --name 指定项目名字，重启/关闭时可以使用

```

3. 查看已经启动项目

```sh
pm2 list #完整
pm2 ls #简化
```

4. 重启 pm2 管理的项目

```sh
pm2 restart [id/name] #重新启动制定项目 id或name
pm2 restart all #重新启动所有项目
```

5. 停止 pm2 管理的项目

```sh
pm2 stop [id/name] #重新启动制定项目 id或name
pm2 stop all #重新启动所有项目
```

> Windows 用户注意
> 如果出现 启动项目成功，但是执行 pm2 list 后没有任何项目 说明你可能是没有将 pm2 加入 windows 服务中
> 执行如下代码安装

```sh
npm i -g pm2-windows-service #首选安装 pm2-windows-service
# 将pm2-service-install加入windows服务中，之后可以设置开机启动什么的，pm2-service-uninstall可以卸载服务
pm2-service-install

```

6. 常用命令

```sh
 pm2 start app.js --name my-api # 命名进程
 pm2 start app.js -i max  # 根据有效CPU数目启动最大进程数目
 pm2 start app.js -i 3      # 启动3个进程
 pm2 start app.js -x        #用fork模式启动 app.js 而不是使用 cluster
 pm2 start app.js -x -- -a 23   # 用fork模式启动 app.js 并且传递参数 (-a 23)
 pm2 start app.js --name serverone  # 启动一个进程并把它命名为 serverone
 pm2 stop serverone       # 停止 serverone 进程
 pm2 start app.json        # 启动进程, 在 app.json里设置选项
 pm2 start app.js -i max -- -a 23                   #在--之后给 app.js 传递参数
 pm2 start app.js -i max -e err.log -o out.log  # 启动 并 生成一个配置文件，你也可以执行用其他语言编写的app  ( fork 模式):
 pm2 start my-bash-script.sh    -x --interpreter bash
 pm2 start my-python-script.py -x --interpreter python

 pm2 list               # 显示所有进程状态
 pm2 monit              # 监视所有进程
 pm2 logs               #  显示所有进程日志
 pm2 stop all           # 停止所有进程
 pm2 restart all        # 重启所有进程
 pm2 reload all         # 0秒停机重载进程 (用于 NETWORKED 进程)
 pm2 stop 0             # 停止指定的进程
 pm2 restart 0          # 重启指定的进程
 pm2 startup            # 产生 init 脚本 保持进程活着
 pm2 web                # 运行健壮的 computer API endpoint (http://localhost:9615)
 pm2 delete 0           # 杀死指定的进程
 pm2 delete all         # 杀死全部进程
```

7. 配置 pm2 启动文件
   在项目根目录添加一个 processes.json：
   内容如下:

```json
{
  "apps": [
    {
      "name": "mywork",
      "cwd": "/srv/node-app/current",
      "script": "bin/www",
      "log_date_format": "YYYY-MM-DD HH:mm Z",
      "error_file": "/var/log/node-app/node-app.stderr.log",
      "out_file": "log/node-app.stdout.log",
      "pid_file": "pids/node-geo-api.pid",
      "instances": 6,
      "min_uptime": "200s",
      "max_restarts": 10,
      "max_memory_restart": "1M",
      "cron_restart": "1 0 * * *",
      "watch": false,
      "merge_logs": true,
      "exec_interpreter": "node",
      "exec_mode": "fork",
      "autorestart": false,
      "vizion": false
    }
  ]
}
```

说明:

- apps:json 结构，apps 是一个数组，每一个数组成员就是对应一个 pm2 中运行的应用
- name:应用程序名称
- cwd:应用程序所在的目录
- script:应用程序的脚本路径
- log_date_format:
- error_file:自定义应用程序的错误日志文件
- out_file:自定义应用程序日志文件
- pid_file:自定义应用程序的 pid 文件
- instances: 实例数
- min_uptime:最小运行时间，这里设置的是 60s 即如果应用程序在 60s 内退出，pm2 会认为程序异常退出，此时触发重启 max_restarts 设置数量
- max_restarts:设置应用程序异常退出重启的次数，默认 15 次（从 0 开始计数）
- cron_restart:定时启动，解决重启能解决的问题
- watch:是否启用监控模式，默认是 false。如果设置成 true，当应用程序变动时，pm2 会自动重载。这里也可以设置你要监控的文件。
- merge_logs: 合并日志
- exec_interpreter:应用程序的脚本类型，这里使用的 shell，默认是 nodejs
- exec_mode:应用程序启动模式，这里设置的是 cluster_mode（集群），默认是 fork
- autorestart:启用/禁用应用程序崩溃或退出时自动重启
- vizion:启用/禁用 vizion 特性(版本控制)

  可以通过 pm2 start processes.json 来启动。
  也可以把命令写在 package.json 里。如下:

```json
"scripts": {
  "pm2": "pm2 start processes.json"
}
```
