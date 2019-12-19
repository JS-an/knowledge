## CSS

1. someting

## 边框重叠
> 第一个子元素margin-top时，父元素也会加上margin-top

5种解决方法：  

1. 给父元素加border。
2. 给父元素加padding。
3. 给父元素加overflow:hidden。
4. (推荐使用) 给父元素加前置内容生成。
例： 
```css
#parent:before{
  content:" ";
  display:table;
}
```
5. 给第一个元素使用translate达到margin效果。  
