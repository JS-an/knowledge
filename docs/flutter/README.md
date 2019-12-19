## Flutter开发问题

### 软键盘弹起导致布局overflow

> 原因：在flutter中，键盘弹起时会缩小Scaffold的高度并重建
>> 1.当布局高度固定时，例如设置为屏幕高度，这时候键盘弹起页面上会出现布局overflow的提示
>> 2.软键盘弹起后遮挡输入框

- 方法一

1. 将`Scaffold`组件的`resizeToAvoidBottomInset`属性设置为`false`，这样在键盘弹出时布局将不会重建
2. 把固定的高度改为 `原高度 - MediaQuery.of(context).viewInsets.bottom`，键盘弹出时布局将重建，而这个`MediaQuery.of(context).viewInsets.bottom`变量在键盘弹出前是0，键盘弹起后的就是键盘的高度

- 方法二

1. 布局放入可滚动的`Widget`中即可，当输入框获取焦点后，系统会自动将它滑动到可视区域
