## 安装多版本Vue-Cli

1. 已安装一个全局版本直接下一步
2. 在随意位置局部安装另一版本Vue-Cli
```sh
npm i @vue/cli@版本号
```
3. 进入node_modules/.bin更改vue名称(因为vue被之前的全局版本占用了，可改为vue2、vue3等等)
4. 在环境变量的系统变量中添加一个变量(变量名随意，变量路径为.bin的路径。例如：D:\vue2\node_modules\.bin)
5. 再在path里添加一个路径`%变量名%`(前后必须用百分号)
6. 这样就大功告成了


## Vue项目静态文件之图片的引用

一、前提
工程文件目录
 |- mock
 |- node_modules
 |- public
 |- src
  |-- api
  |-- assets
  |-- components
  |-- router
  |-- store
  |-- style
    |-- test1.scss
    |-- test1_main.scss
  |-- utils
  |-- views
    |-- static_test
      |-- test1.scss
  |-- App.vue
  |-- main.js

二、背景图的引用
背景图样式直接写在element的style属性里
直接在html模板里，在dom对象的style里加背景图，不起效果，代码如下：
```html
<div style="height:100px; background:url('../../assets/img/bg.png') center top no-repeat">
 不起效果。。。
</div>
```
背景样式class写在vue文件的style标签里
写法：
background: url('图片相对当前的路径') center top no-repeat
```html
<el-card class="box-card sudoku_item">
  <div slot="header" class="clearfix">
    <span>背景图写在css里</span>
  </div>
  <div class='testBackground'>
    起效果。。。
  </div>
</el-card>
<style lang="scss" scoped>
  .testBackground {
    height: 100px;
    background: url('../../assets/img/bg.png') center top no-repeat
  }
</style>
```
编译后的css：
```css
.testBackground[data-v-eb2b930e] {
    height: 100px;
    background: url(../img/bg.187d48cd.png) top no-repeat;
}
```
背景样式class写在样式文件里，在vue文件里引入样式文件
样式写法：

background: url('图片相对当前vue文件的路径') center top no-repeat  
这个图片路径很重要，url是图片相对于当前vue文件的路径，而不是图片相对于样式文件的路径。

html写法， /views/static_test/test1.vue:
```html
  <el-card class="box-card sudoku_item">
    <div slot="header" class="clearfix">
      <span>背景图写在style file里</span>
    </div>
    <div class='testBackground_file'>
      起效果。。。
    </div>
  </el-card>
```
<!-- 样式写法， `/style/test1.scss：`

  .testBackground_file {
    height: 100px;
    background: url('../../assets/img/bg.png') center top no-repeat
  }
/views/static_test/test1.vue，引入样式文件写法：

  <style lang="scss" scoped>
  @import "../../style/test1.scss";
  </style>
编译后：

.testBackground_file[data-v-eb2b930e] {
    height: 100px;
    background: url(../img/bg.187d48cd.png) top no-repeat;
}
背景样式class写在样式文件里，在main.js里引入样式文件
html写法， /views/static_test/test1.vue:

  <el-card class="box-card sudoku_item">
    <div slot="header" class="clearfix">
      <span>背景图写在style file里</span>
    </div>
    <div class='testBackground_file_main'>
      起效果。。。
    </div>
  </el-card>
样式写法, /style/test1_main.scss：

  .testBackground_file_main {
    height: 100px;
    background: url('../assets/img/bg.png') center top no-repeat
  }
请注意，url是main.js相对于图片文件的路径。

引入样式文件方法，main.js：

// style
import './style/test1_main.scss'
引进来的样式做为系统公共样式。

编译后：

.testBackground_file_main {
    height: 100px;
    background: url(../img/bg.187d48cd.png) top no-repeat;
}
三、图片的显示
图片引入直接写在html里
html写法：

 <img src='../../assets/img/dog.jpg'>
编译后：

<img data-v-eb2b930e="" src="/img/dog.146655c9.jpg">
图片url在js的data里定义
html写法：

  <span><img :src='imgUrl'>直接写url是不起效果的</span>
  <span><img :src='imgUrl_require'>需要用require</span>
js写法：

  data () {
    return {
      imgUrl: '../../assets/img/up.jpg',
      imgUrl_require: require('../../assets/img/up.jpg')
    };
  },
直接定义路径链接是不起效果的，需要在链接外面加上require。

编译后：

<img data-v-eb2b930e="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAQDAwMDAwQDAwQFBAMEBQcFBAQFBwgGBgcGBggKCAgICAgICggKCgsKCggNDQ4ODQ0SEhISEhQUFBQUFBQUFBT/2wBDAQUFBQgHCA8KCg8SDwwPEhYVFRUVFhYUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAgABwDAREAAhEBAxEB/8QAGwAAAQQDAAAAAAAAAAAAAAAACAADBgcBAgX/xAApEAABAwMDAwMFAQAAAAAAAAABAgMFAAQGERIhBxMxCEFhIiMyQnGR/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQQABQYCA//EAB8RAAIDAAIDAQEAAAAAAAAAAAABAgMRBAUSITETYf/aAAwDAQACEQMRAD8APvXioQqPqL19xrApNmJ7IkrtSgLgId2dpJ99QhzWkLuwhXLCr5Pawol4/Sw8YyeJyyJYl4d5L1s+kK0B5Tr7EeRTVdiktQ9TdG2Oo7Wtep7YUd6geq8hgtkiDhG3BLyDAWi5Gv20rK0gpI/bVuq7nchx9IqO05UqliA7yWAyO1et5DIAtN1KK3IL3Czv5Cuf7WetrlusytsJv3L6yf4NlWadF5qzF2lxcJJaLUxz2nEk7d6fGpHtTnGsnS1vxjvGus40l/Q5YSTRNQ0fMMpUhq/tWrpCFfkEvICwD8jdWjUtRsK5bHRqXxqDnHGXZWxYunGDq2p1CVkeeOQeOaFlMZnM6IWe2Cj6pbItZXDFpsJttzaG9vHgJGnxVNz6n5LDO9vB/pHxQRWL4vDS+IwgmbBi5fYZSUF1CVlP1a8Eg8VZU0xlBaXVFMJVrSbNMtW7TbDKQ2y2kIbQngBKeAAKbSwdWR9DtQJqUA+R/tBpMDWi0NEJnbUOfE//2Q==">
图片url由js动态设置
html写法：

  <el-card class="box-card sudoku_item">
    <div slot="header" class="clearfix">
      <span>图片url由js动态设置</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="setImageUrl1">down</el-button>
      <el-button style="float: right; padding: 3px 0" type="text" @click="setImageUrl2">up</el-button>
    </div>
    <div class='testBackground_file'>
      <img :src='imgUrl2'>
    </div>
  </el-card>
js写法：

  data () {
    return {
      imgUrl2: require('../../assets/img/up.jpg')
    };
  },
  methods: {
    setImageUrl1 () {
      this.imgUrl2 = require('../../assets/img/down.jpg')
    },
    setImageUrl2 () {
      this.imgUrl2 = require('../../assets/img/up.jpg')
    }
  }
在js定义的路径都需要加上require。

编译后：

<img data-v-eb2b930e="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAQDAwMDAwQDAwQFBAMEBQcFBAQFBwgGBgcGBggKCAgICAgICggKCgsKCggNDQ4ODQ0SEhISEhQUFBQUFBQUFBT/2wBDAQUFBQgHCA8KCg8SDwwPEhYVFRUVFhYUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAfAB4DAREAAhEBAxEB/8QAGwAAAQQDAAAAAAAAAAAAAAAACAEFBgcAAgP/xAArEAABAwQBAgMJAQAAAAAAAAABAgMRAAQFBgcSQRMhMxUiIzE1QmGBgpH/xAAbAQACAgMBAAAAAAAAAAAAAAAABQMEAgYHAf/EACURAAEDAwMDBQAAAAAAAAAAAAEAAwQCERIFBhMhMTIiQVFScf/aAAwDAQACEQMRAD8APuf8oQq55d3vLaNh0XuHQwu5WoD46StMT+FJqpMfLVNwtl23o7eoO4uXH4nPjPbL7cNaYyuSbaRdrA8TwgUokifIEqrOM7yUXVTXdNohSMKOymYqwEluq95gvdqx+sm71b1W1FVyQJUG+n7R386qy6qhT0WwbbajOSMXvdDntfJl1tmrt4rMA+1bdQClxHVCqTOyc6MSuoaZoNMORyNeBXfDcpZXDaxa61rYUMgrpC3QJM/LpAjvWTcoijGlRTdvNuyC+94onuP3s8/rVq7sf1FY6v4IETTtonEE91yjWKGRIIa8QpO40h1BbcSFIUIKamNillJxNwh35X4RceeVmtTt5WtUvWbae57gAUolwvquk7c3aKBxSD0+U98R8NM4RtvN7CyF5M+8yy4PT/RgzUsSEKBc91Q3JugyDxNH0K70p6RApitEJuto869QkihCyKEJaEL/2Q==">
四、打包后生成的图片路径分析
打包后生成的文件目录
  不管发布到根目录，还是发布到子目录，打包后生成的文件层次结构是一样的，如下：

 |- dist
  |-- css
  |-- fonts
  |-- img
  |-- js
  |-- favicon.ico
  |-- index.html

打包后引用图片的路径
  编译后所有非require引入的图片都被编译到/dist/img/目录下面，并且重命名，引用路径亦已改变，路径随图片文件位置和引用图片的文件的位置而调整了。
  而require引入的图片则生成了图片base64编码，图片路径就是图片base64编码。

1、背景图路径
   编译打包后生成的背景图路径格式为: ../img/##.png，
   编译打包后所有的样式代码在css目录的文件中，引用图片的文件是样式文件，引用图片的路径是样式文件相对于图片位置的路径，所以由'../img'开头。

2、图片路径
   编译后的<img>引用路径格式是: /img/##.png，和背景图的引用路径不一样。
   引用图片的文件是html，html文件在根目录，所以引用路径由'/img'开头。

3、图片base64编码
   使用require引入的图片，经编译后直接生成了图片base64编码。

打包后生成的index.html文件
发布到根目录的情况
.env.production，环境变量配置

VUE_APP_CURRENTMODE = 'production'
outputDir = 'dist'
vue.config.js配置

outputDir: process.env.outputDir,
assetsDir: '',
publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
生成的index.html

<!DOCTYPE html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <link rel=icon href=/favicon.ico>
    <title>vue-simple</title>
    <link rel=stylesheet href=https://unpkg.com/leaflet@1.3.1/dist/leaflet.css>
    <script src=https://unpkg.com/leaflet@1.3.1/dist/leaflet.js></script>
    <link href=/css/chunk-1f9b94c5.d8e73c38.css rel=prefetch>
    <link href=/css/chunk-3c9c611f.7ff185d6.css rel=prefetch>
    <link href=/css/chunk-56343cd2.d37b5fd0.css rel=prefetch>
    <link href=/js/chunk-1f9b94c5.96c7cd36.js rel=prefetch>
    <link href=/js/chunk-3c9c611f.3070ee4d.js rel=prefetch>
    <link href=/js/chunk-56343cd2.722cd6e6.js rel=prefetch>
    <link href=/css/app.9e145aa4.css rel=preload as=style>
    <link href=/css/chunk-vendors.c5637d35.css rel=preload as=style>
    <link href=/js/app.d24b3ba9.js rel=preload as=script>
    <link href=/js/chunk-vendors.9e634535.js rel=preload as=script>
    <link href=/css/chunk-vendors.c5637d35.css rel=stylesheet>
    <link href=/css/app.9e145aa4.css rel=stylesheet>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but vue-simple doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id=app></div>
    <script src=/js/chunk-vendors.9e634535.js></script>
    <script src=/js/app.d24b3ba9.js></script>
  </body>
</html>
发布到子目录的情况
.env.production，环境变量配置

VUE_APP_CURRENTMODE = 'production'
outputDir = 'dist'
vue.config.js配置

outputDir: process.env.outputDir,
assetsDir: '',
publicPath: process.env.NODE_ENV === 'production' ? '/vue-demo' : '/',
生成的index.html


<!DOCTYPE html><html lang=en>
  <head><meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <link rel=icon href=/vue-demo/favicon.ico>
    <title>vue-simple</title>
    <link rel=stylesheet href=https://unpkg.com/leaflet@1.3.1/dist/leaflet.css>
    <script src=https://unpkg.com/leaflet@1.3.1/dist/leaflet.js></script>
    <link href=/vue-demo/css/chunk-1f9b94c5.d8e73c38.css rel=prefetch>
    <link href=/vue-demo/css/chunk-3c9c611f.7ff185d6.css rel=prefetch>
    <link href=/vue-demo/css/chunk-56343cd2.d37b5fd0.css rel=prefetch>
    <link href=/vue-demo/js/chunk-1f9b94c5.96c7cd36.js rel=prefetch>
    <link href=/vue-demo/js/chunk-3c9c611f.3070ee4d.js rel=prefetch>
    <link href=/vue-demo/js/chunk-56343cd2.722cd6e6.js rel=prefetch>
    <link href=/vue-demo/css/app.9e145aa4.css rel=preload as=style>
    <link href=/vue-demo/css/chunk-vendors.c5637d35.css rel=preload as=style>
    <link href=/vue-demo/js/app.1da8b7e5.js rel=preload as=script>
    <link href=/vue-demo/js/chunk-vendors.9e634535.js rel=preload as=script>
    <link href=/vue-demo/css/chunk-vendors.c5637d35.css rel=stylesheet>
    <link href=/vue-demo/css/app.9e145aa4.css rel=stylesheet>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but vue-simple doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id=app></div>
    <script src=/vue-demo/js/chunk-vendors.9e634535.js></script>
    <script src=/vue-demo/js/app.1da8b7e5.js></script>
  </body>  
</html> -->