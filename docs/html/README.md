## 输入建议(autocomplete)

1. 自动填充功能的问题,在输入中添加`autocomplete="off"`,禁用该功能

```html
<input type="text" autocomplete="off" />
```

Microsoft Edge 禁用了`autocomplete="off"`属性,可以用如下方法解决;
这会让Edge查找一个autocompleteOff不存在的数据查找列表,达到效果;

```html
<input type="text" autocomplete="off" list="autocompleteOff" />
```
