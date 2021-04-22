(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{375:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[s._v("#")]),s._v(" pm2")]),s._v(" "),a("ol",[a("li",[s._v("安装 pm2\n"),a("code",[s._v("npm install pm2 -g //全局安装")])]),s._v(" "),a("li",[s._v("启动 nodejs 项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 start ./bin/www  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Express 项目启动")]),s._v("\n\npm2 start app.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定nodejs 项目入口文件启动")]),s._v("\n\npm2 start ./bin/www -i "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" --name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 制定启动4个进程 --name 指定项目名字，重启/关闭时可以使用")]),s._v("\n\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查看已经启动项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 list "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#完整")]),s._v("\npm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#简化")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("重启 pm2 管理的项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id/name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动制定项目 id或name")]),s._v("\npm2 restart all "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动所有项目")]),s._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("停止 pm2 管理的项目")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id/name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动制定项目 id或name")]),s._v("\npm2 stop all "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新启动所有项目")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("Windows 用户注意\n如果出现 启动项目成功，但是执行 pm2 list 后没有任何项目 说明你可能是没有将 pm2 加入 windows 服务中\n执行如下代码安装")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g pm2-windows-service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#首选安装 pm2-windows-service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将pm2-service-install加入windows服务中，之后可以设置开机启动什么的，pm2-service-uninstall可以卸载服务")]),s._v("\npm2-service-install\n\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("常用命令")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" pm2 start app.js --name my-api "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命名进程")]),s._v("\n pm2 start app.js -i max  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据有效CPU数目启动最大进程数目")]),s._v("\n pm2 start app.js -i "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动3个进程")]),s._v("\n pm2 start app.js -x        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用fork模式启动 app.js 而不是使用 cluster")]),s._v("\n pm2 start app.js -x -- -a "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用fork模式启动 app.js 并且传递参数 (-a 23)")]),s._v("\n pm2 start app.js --name serverone  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动一个进程并把它命名为 serverone")]),s._v("\n pm2 stop serverone       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 serverone 进程")]),s._v("\n pm2 start app.json        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动进程, 在 app.json里设置选项")]),s._v("\n pm2 start app.js -i max -- -a "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在--之后给 app.js 传递参数")]),s._v("\n pm2 start app.js -i max -e err.log -o out.log  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 并 生成一个配置文件，你也可以执行用其他语言编写的app  ( fork 模式):")]),s._v("\n pm2 start my-bash-script.sh    -x --interpreter "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n pm2 start my-python-script.py -x --interpreter python\n\n pm2 list               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有进程状态")]),s._v("\n pm2 monit              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监视所有进程")]),s._v("\n pm2 logs               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  显示所有进程日志")]),s._v("\n pm2 stop all           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止所有进程")]),s._v("\n pm2 restart all        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启所有进程")]),s._v("\n pm2 reload all         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0秒停机重载进程 (用于 NETWORKED 进程)")]),s._v("\n pm2 stop "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止指定的进程")]),s._v("\n pm2 restart "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启指定的进程")]),s._v("\n pm2 startup            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 产生 init 脚本 保持进程活着")]),s._v("\n pm2 web                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行健壮的 computer API endpoint (http://localhost:9615)")]),s._v("\n pm2 delete "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死指定的进程")]),s._v("\n pm2 delete all         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死全部进程")]),s._v("\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("配置 pm2 启动文件\n在项目根目录添加一个 processes.json：\n内容如下:")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"apps"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mywork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/srv/node-app/current"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/www"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_date_format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YYYY-MM-DD HH:mm Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/node-app/node-app.stderr.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"out_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log/node-app.stdout.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pid_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pids/node-geo-api.pid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"instances"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_uptime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_restarts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max_memory_restart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1M"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cron_restart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 0 * * *"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"merge_logs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec_interpreter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec_mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"autorestart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vizion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("说明:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("apps:json 结构，apps 是一个数组，每一个数组成员就是对应一个 pm2 中运行的应用")])]),s._v(" "),a("li",[a("p",[s._v("name:应用程序名称")])]),s._v(" "),a("li",[a("p",[s._v("cwd:应用程序所在的目录")])]),s._v(" "),a("li",[a("p",[s._v("script:应用程序的脚本路径")])]),s._v(" "),a("li",[a("p",[s._v("log_date_format:")])]),s._v(" "),a("li",[a("p",[s._v("error_file:自定义应用程序的错误日志文件")])]),s._v(" "),a("li",[a("p",[s._v("out_file:自定义应用程序日志文件")])]),s._v(" "),a("li",[a("p",[s._v("pid_file:自定义应用程序的 pid 文件")])]),s._v(" "),a("li",[a("p",[s._v("instances: 实例数")])]),s._v(" "),a("li",[a("p",[s._v("min_uptime:最小运行时间，这里设置的是 60s 即如果应用程序在 60s 内退出，pm2 会认为程序异常退出，此时触发重启 max_restarts 设置数量")])]),s._v(" "),a("li",[a("p",[s._v("max_restarts:设置应用程序异常退出重启的次数，默认 15 次（从 0 开始计数）")])]),s._v(" "),a("li",[a("p",[s._v("cron_restart:定时启动，解决重启能解决的问题")])]),s._v(" "),a("li",[a("p",[s._v("watch:是否启用监控模式，默认是 false。如果设置成 true，当应用程序变动时，pm2 会自动重载。这里也可以设置你要监控的文件。")])]),s._v(" "),a("li",[a("p",[s._v("merge_logs: 合并日志")])]),s._v(" "),a("li",[a("p",[s._v("exec_interpreter:应用程序的脚本类型，这里使用的 shell，默认是 nodejs")])]),s._v(" "),a("li",[a("p",[s._v("exec_mode:应用程序启动模式，这里设置的是 cluster_mode（集群），默认是 fork")])]),s._v(" "),a("li",[a("p",[s._v("autorestart:启用/禁用应用程序崩溃或退出时自动重启")])]),s._v(" "),a("li",[a("p",[s._v("vizion:启用/禁用 vizion 特性(版本控制)")]),s._v(" "),a("p",[s._v("可以通过 pm2 start processes.json 来启动。\n也可以把命令写在 package.json 里。如下:")])])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pm2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2 start processes.json"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);