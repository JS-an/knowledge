## 输入建议(autocomplete)

1. 自动填充功能的问题,在输入中添加`autocomplete="off"`,禁用该功能

```html
<input type="text" autocomplete="off" />
```

Microsoft Edge 禁用了`autocomplete="off"`属性,可以用如下方法解决;
这会让 Edge 查找一个 autocompleteOff 不存在的数据查找列表,达到效果;

```html
<input type="text" autocomplete="off" list="autocompleteOff" />
```

## 第三方图片不能加载

> 例：微信图片在其他源网站使用会出现不能引用提示

1. 请求时的 host 不是图片源地址（有些网站就不会返回正确的图片）

```html
<!-- 在 HTML 添加下面代码，会让图片进行预加载，请求时的 host 就会变成图片源地址 -->
<meta name="referrer" content="never" />
```

## HTML 提示：使用小写属性

> 属性和属性值对大小写不敏感。(驼峰写法会影响传值,主流用连号写法,例: label-value)

1. Vue和React等框架能用驼峰写法是因为构建工具进行了编译转化
2. 如无构建工具时,写HTML传值还是需要传统写法
