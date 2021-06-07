## 元素与浏览器的距离

### client offset scroll

![](./pic.png)

### getBoundingClientRect()

> `getBoundingClientRect`是 DOM 元素到浏览器可视范围的距离(不包含文档卷起的部分);该函数返回一个`Object`对象，该对象有 6 个属性：`top,lef,right,bottom,width,height`(`width、height`是元素自身的宽高)；

```js
getBoundingClientRect().top; // 元素上边距离页面可视范围上边的距离
getBoundingClientRect().right; // 元素右边距离页面可视范围左边的距离
getBoundingClientRect().bottom; // 元素下边距离页面可视范围上边的距离
getBoundingClientRect().left; // 元素左边距离页面可视范围左边的距离
```

## elementUI 暂写在此

### 表格

当使用 rowKey 时: 表格数据如有 children 属性则会成为特殊属性,被自动使用;

## 解决 ios audio / video 无法自动播放、循环播放的问题

```js
// 解决ios audio无法自动播放、循环播放的问题
var music = document.getElementById("video");
var state = 0;

document.addEventListener(
  "touchstart",
  function() {
    if (state == 0) {
      music.play();
      state = 1;
    }
  },
  false
);

document.addEventListener(
  "WeixinJSBridgeReady",
  function() {
    music.play();
  },
  false
);

//循环播放
music.onended = function() {
  music.load();
  music.play();
};
```

## 解析 URL get 参数

```js
const q = {};
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
console.log(q);
```

## 解析 a 标签连接 url

```js
// 创建a标签
const aEle = document.createElement("a");
// 给a标签赋值href路径
aEle.href = "/test.html";
// 访问aEle中的属性
aEle.protocol; // 获取协议
aEle.pathname; // 获取path
aEle.origin;
aEle.host;
aEle.search;
```
