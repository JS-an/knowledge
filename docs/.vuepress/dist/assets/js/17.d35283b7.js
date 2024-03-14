(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{373:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"nvm-管理node版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm-管理node版本"}},[s._v("#")]),s._v(" nvm(管理node版本)")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("安装"),a("code",[s._v("nvm")]),s._v("（在Windows上则为"),a("code",[s._v("nvm-windows")]),s._v("）：")])])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux/Mac"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("安装nvm之前最好先卸载掉之前的nodejs，可以在应用和程序里卸载，再删除相关的环境变量")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[a("strong",[s._v("安装多个Node.js版本：")]),s._v("\n你需要为两个项目安装不同的Node.js版本。假设A项目需要16.x.x版本，B项目需要18.x.x版本，你可以这样安装：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.13")]),s._v(".2  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装16.x.x版本，这里以16.13.2为例")]),s._v("\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.18")]),s._v(".2   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装18.x.x版本，这里以18.18.2为例")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("为每个项目切换Node.js版本：")])]),s._v(" "),a("p",[s._v("当你准备工作于A项目时，在命令行中导航到A项目的目录，然后运行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.13")]),s._v(".2\n")])])]),a("p",[s._v("这会将当前Shell（命令行界面）中使用的Node.js版本切换到16.13.2。此时，你可以运行A项目了。")]),s._v(" "),a("p",[s._v("同理，当你需要切换到B项目并使用Node.js的18.18.2版本时，在命令行中先导航到B项目的目录，然后执行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.18")]),s._v(".2\n")])])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("自动化版本切换（可选）：")])]),s._v(" "),a("p",[s._v("如果觉得每次都手动切换版本比较麻烦，你可以在每个项目的根目录下创建一个"),a("code",[s._v(".nvmrc")]),s._v("文件，其中指定该项目所需的Node.js版本。例如，A项目的"),a("code",[s._v(".nvmrc")]),s._v("文件内容为"),a("code",[s._v("16.13.2")]),s._v("，而B项目的"),a("code",[s._v(".nvmrc")]),s._v("文件内容为"),a("code",[s._v("18.18.2")]),s._v("。")]),s._v(" "),a("p",[s._v("然后，当你在项目目录中时，只需要运行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm use\n")])])]),a("p",[a("code",[s._v("nvm")]),s._v("会自动读取"),a("code",[s._v(".nvmrc")]),s._v("文件中指定的版本号，并尝试切换到该版本。")])])]),s._v(" "),a("blockquote",[a("p",[s._v("FQA")]),s._v(" "),a("ol",[a("li",[s._v("如果我先 nvm use 16.13.2 然后把A项目跑起来，再nvm use 18.18.2，把B项目也跑起来，这时会影响到正在跑的A项目吗\n当你使用"),a("code",[s._v("nvm use 16.13.0")]),s._v("设置Node.js的版本后，启动A项目，然后在同一个命令行会话中切换到另一个版本"),a("code",[s._v("nvm use 18.0.0")]),s._v("并启动B项目时，"),a("strong",[s._v("不会")]),s._v("影响已经运行的A项目。\n这是因为每次你用"),a("code",[s._v("nvm use <version>")]),s._v("命令切换Node.js版本时，实际上是改变了当前命令行会话中的环境变量来指向不同版本的Node.js。一旦某个Node.js应用已经启动，它就会使用当时有效的Node.js版本继续运行，即便之后在相同的或不同的命令行会话中改变了Node.js的版本。\n简而言之，对于已经启动的Node.js应用程序，它们所依赖的Node.js版本和环境已经被加载到内存中，随后的版本切换操作不会对它们造成影响。但是，要注意的是，这里指的是在不同的命令行会话中进行操作；如果你尝试在同一个命令行窗口中更改版本并重新启动同一个应用，那么新启动的应用将会使用最新切换的Node.js版本。\n为了避免混淆，建议对于不同的Node.js版本需求，使用不同的命令行会话窗口（例如，一个终端窗口用于运行A项目，另一个用于运行B项目），或者使用特定的版本管理文件（如"),a("code",[s._v(".nvmrc")]),s._v("文件）在项目目录中自动指定所需的Node.js版本。\n你还可以把"),a("code",[s._v("nvm use version")]),s._v("添加到"),a("code",[s._v("package.json")]),s._v("的"),a("code",[s._v("script")]),s._v("上，运行项目的时候可以自动切换")])])]),s._v(" "),a("h2",{attrs:{id:"pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[s._v("#")]),s._v(" pm2")]),s._v(" "),a("ol",[a("li",[s._v("安装 pm2\n"),a("code",[s._v("npm install pm2 -g //全局安装")])]),s._v(" "),a("li",[s._v("启动 nodejs 项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 start ./bin/www  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Express 项目启动")]),s._v("\n\npm2 start app.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定nodejs 项目入口文件启动")]),s._v("\n\npm2 start ./bin/www -i "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" --name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 制定启动4个进程 --name 指定项目名字，重启/关闭时可以使用")]),s._v("\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查看已经启动项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 list "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#完整")]),s._v("\npm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#简化")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("重启 pm2 管理的项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id/name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动制定项目 id或name")]),s._v("\npm2 restart all "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动所有项目")]),s._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("停止 pm2 管理的项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id/name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动制定项目 id或name")]),s._v("\npm2 stop all "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动所有项目")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("Windows 用户注意\n如果出现 启动项目成功，但是执行 pm2 list 后没有任何项目 说明你可能是没有将 pm2 加入 windows 服务中\n执行如下代码安装")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g pm2-windows-service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#首选安装 pm2-windows-service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将pm2-service-install加入windows服务中，之后可以设置开机启动什么的，pm2-service-uninstall可以卸载服务")]),s._v("\npm2-service-install\n\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("常用命令")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" pm2 start app.js --name my-api "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名进程")]),s._v("\n pm2 start app.js -i max  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据有效CPU数目启动最大进程数目")]),s._v("\n pm2 start app.js -i "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动3个进程")]),s._v("\n pm2 start app.js -x        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用fork模式启动 app.js 而不是使用 cluster")]),s._v("\n pm2 start app.js -x -- -a "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用fork模式启动 app.js 并且传递参数 (-a 23)")]),s._v("\n pm2 start app.js --name serverone  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个进程并把它命名为 serverone")]),s._v("\n pm2 stop serverone       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 serverone 进程")]),s._v("\n pm2 start app.json        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动进程, 在 app.json里设置选项")]),s._v("\n pm2 start app.js -i max -- -a "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在--之后给 app.js 传递参数")]),s._v("\n pm2 start app.js -i max -e err.log -o out.log  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 并 生成一个配置文件，你也可以执行用其他语言编写的app  ( fork 模式):")]),s._v("\n pm2 start my-bash-script.sh    -x --interpreter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n pm2 start my-python-script.py -x --interpreter python\n\n pm2 list               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有进程状态")]),s._v("\n pm2 monit              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监视所有进程")]),s._v("\n pm2 logs               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  显示所有进程日志")]),s._v("\n pm2 stop all           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止所有进程")]),s._v("\n pm2 restart all        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启所有进程")]),s._v("\n pm2 reload all         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0秒停机重载进程 (用于 NETWORKED 进程)")]),s._v("\n pm2 stop "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止指定的进程")]),s._v("\n pm2 restart "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启指定的进程")]),s._v("\n pm2 startup            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 产生 init 脚本 保持进程活着")]),s._v("\n pm2 web                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行健壮的 computer API endpoint (http://localhost:9615)")]),s._v("\n pm2 delete "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死指定的进程")]),s._v("\n pm2 delete all         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死全部进程")]),s._v("\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("配置 pm2 启动文件\n在项目根目录添加一个 processes.json：\n内容如下:")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"apps"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mywork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/srv/node-app/current"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/www"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_date_format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YYYY-MM-DD HH:mm Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/node-app/node-app.stderr.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"out_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log/node-app.stdout.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pid_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pids/node-geo-api.pid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"instances"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_uptime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_restarts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_memory_restart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1M"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cron_restart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 0 * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"merge_logs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec_interpreter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec_mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"autorestart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vizion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("说明:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("apps:json 结构，apps 是一个数组，每一个数组成员就是对应一个 pm2 中运行的应用")])]),s._v(" "),a("li",[a("p",[s._v("name:应用程序名称")])]),s._v(" "),a("li",[a("p",[s._v("cwd:应用程序所在的目录")])]),s._v(" "),a("li",[a("p",[s._v("script:应用程序的脚本路径")])]),s._v(" "),a("li",[a("p",[s._v("log_date_format:")])]),s._v(" "),a("li",[a("p",[s._v("error_file:自定义应用程序的错误日志文件")])]),s._v(" "),a("li",[a("p",[s._v("out_file:自定义应用程序日志文件")])]),s._v(" "),a("li",[a("p",[s._v("pid_file:自定义应用程序的 pid 文件")])]),s._v(" "),a("li",[a("p",[s._v("instances: 实例数")])]),s._v(" "),a("li",[a("p",[s._v("min_uptime:最小运行时间，这里设置的是 60s 即如果应用程序在 60s 内退出，pm2 会认为程序异常退出，此时触发重启 max_restarts 设置数量")])]),s._v(" "),a("li",[a("p",[s._v("max_restarts:设置应用程序异常退出重启的次数，默认 15 次（从 0 开始计数）")])]),s._v(" "),a("li",[a("p",[s._v("cron_restart:定时启动，解决重启能解决的问题")])]),s._v(" "),a("li",[a("p",[s._v("watch:是否启用监控模式，默认是 false。如果设置成 true，当应用程序变动时，pm2 会自动重载。这里也可以设置你要监控的文件。")])]),s._v(" "),a("li",[a("p",[s._v("merge_logs: 合并日志")])]),s._v(" "),a("li",[a("p",[s._v("exec_interpreter:应用程序的脚本类型，这里使用的 shell，默认是 nodejs")])]),s._v(" "),a("li",[a("p",[s._v("exec_mode:应用程序启动模式，这里设置的是 cluster_mode（集群），默认是 fork")])]),s._v(" "),a("li",[a("p",[s._v("autorestart:启用/禁用应用程序崩溃或退出时自动重启")])]),s._v(" "),a("li",[a("p",[s._v("vizion:启用/禁用 vizion 特性(版本控制)")]),s._v(" "),a("p",[s._v("可以通过 pm2 start processes.json 来启动。\n也可以把命令写在 package.json 里。如下:")])])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pm2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2 start processes.json"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);