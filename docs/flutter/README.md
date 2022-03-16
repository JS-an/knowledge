## Flutter 开发问题

### 软键盘弹起导致布局 overflow

> 原因：在 flutter 中，键盘弹起时会缩小 Scaffold 的高度并重建
>
> > 1.当布局高度固定时，例如设置为屏幕高度，这时候键盘弹起页面上会出现布局 overflow 的提示 2.软键盘弹起后遮挡输入框

- 方法一

1. 将`Scaffold`组件的`resizeToAvoidBottomInset`属性设置为`false`，这样在键盘弹出时布局将不会重建
2. 把固定的高度改为 `原高度 - MediaQuery.of(context).viewInsets.bottom`，键盘弹出时布局将重建，而这个`MediaQuery.of(context).viewInsets.bottom`变量在键盘弹出前是 0，键盘弹起后的就是键盘的高度

- 方法二

1. 布局放入可滚动的`Widget`中即可，当输入框获取焦点后，系统会自动将它滑动到可视区域

### 国际化问题

1. 文件名"l10n"为小写的 L
   > > 我使用的是 I10n（带有大写字母 I）而不是 l10n（带有小写字母 l）。它发生在我得知 l10n 代表本地化时。
   > > 所以我将 I10n.yaml 和 I10n 文件夹的名称从大写的“i”更改为小写的“L”，然后代码生成器就可以工作了。我觉得自己好傻 xD
   > > 我还想指出，我现在什至不需要在任何地方进行导入，只需添加对 pubspec.yaml 的依赖和 'generate: true' 标志，并定义 l10n.yaml 和 l10n 文件夹，足以让代码生成器正常工作。
   > > 谢谢您的帮助。我只是希望有一个注释可以帮助解决这个问题，因为现在到处都是，大写 I 的写法与小写 L 完全相同。

### 页面缓存（keeplive）
>> 必须实现以下注释
```dart
// 1.必须是 StatefulWidget 组件
class MePage extends StatefulWidget {
  const MePage({Key? key}) : super(key: key);

  @override
  State<MePage> createState() => _MePageState();
}
// 2.混入 AutomaticKeepAliveClientMixin
class _MePageState extends State<MePage> with AutomaticKeepAliveClientMixin{

  // 3.重写 wantKeepAlive
  @override
  bool get wantKeepAlive => true;

  Widget build(BuildContext context) {
    super.build(context); // 4.调用父类 build
  }
}
```
