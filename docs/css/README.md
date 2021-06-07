## CSS

### 一行文本超出隐藏

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

### 多行文本溢出隐藏

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

### IOS 手机容器滚动条滑动不顺畅

```css
overflow: auto;
-webkit-overflow-scrolling: touch;
```

### 修改滚动条样式

```css
div::-webkit-scrollbar {
  display: none;
}
```

### 去除图片底边 3 像素的问题

```css
img {
  vertical-align: middle;
}
```

## 边框重叠

> 第一个子元素 margin-top 时，父元素也会加上 margin-top

5 种解决方法：

1. 给父元素加 border。
2. 给父元素加 padding。
3. 给父元素加 overflow:hidden。
4. (推荐使用) 给父元素加前置内容生成。
   例：

```css
#parent:before {
  content: " ";
  display: table;
}
```

5. 给第一个元素使用 translate 达到 margin 效果。
