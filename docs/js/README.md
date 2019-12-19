## 元素与浏览器的距离

### client offset scroll
![](./pic.png)

### getBoundingClientRect()
> `getBoundingClientRect`是DOM元素到浏览器可视范围的距离(不包含文档卷起的部分);该函数返回一个`Object`对象，该对象有6个属性：`top,lef,right,bottom,width,height`(`width、height`是元素自身的宽高)；
```js
getBoundingClientRect().top // 元素上边距离页面可视范围上边的距离
getBoundingClientRect().right // 元素右边距离页面可视范围左边的距离
getBoundingClientRect().bottom // 元素下边距离页面可视范围上边的距离
getBoundingClientRect().left // 元素左边距离页面可视范围左边的距离
```
