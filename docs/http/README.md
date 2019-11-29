## URL传参带加号“+”被转换为空格

- 当我们在url中传递的参数带有加号+，会被浏览器转换成空格，这样会导致后台获取到无效的参数，例如：
```js
let name = 'a+b'
let url = `http://test?name=${name}`
```
- 页面跳转后在浏览器中就会变为
```js
http://test?name=a b
```
- 这时我们可以使用encodeURIComponent方法先转码
```js
let name = 'a+b'
let url = `http://test?name=${encodeURIComponent(name)}`
```
- 这时的name值就是“a+b”
```js
http://test?name=a+b
```


## 第二

1. 1212
2. 1212
3. 1212
4. 1212
5. 1212
6. 1212
7. 1212
8. 1212
9. 1212
10. 1212

## 第三

1. 1212
2. 1212
3. 1212
4. 1212
5. 1212
6. 1212
7. 1212
8. 1212
9. 1212
10. 1212

## 第四

1. 1212
2. 1212
3. 1212
4. 1212
5. 1212
6. 1212
7. 1212
8. 1212
9. 1212
10. 1212