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
   > 我使用的是 I10n（带有大写字母 I）而不是 l10n（带有小写字母 l）。它发生在我得知 l10n 代表本地化时。
   > 所以我将 I10n.yaml 和 I10n 文件夹的名称从大写的“i”更改为小写的“L”，然后代码生成器就可以工作了。我觉得自己好傻 xD
   > 我还想指出，我现在什至不需要在任何地方进行导入，只需添加对 pubspec.yaml 的依赖和 'generate: true' 标志，并定义 l10n.yaml 和 l10n 文件夹，足以让代码生成器正常工作。
   > 谢谢您的帮助。我只是希望有一个注释可以帮助解决这个问题，因为现在到处都是，大写 I 的写法与小写 L 完全相同。

### 页面缓存（keeplive）

> 必须实现以下注释

```dart
// 该 MePage 组件必须用特定控件包裹，例如：PageView，TabBarView

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

## Flutter 应用问题

### Flutter App 升级功能流程 
>应用程序升级功能是App的基础功能之一，如果没有此功能会造成用户无法升级，应用程序的bug或者新功能老用户无法触达，甚至损失这部分用户。

#### 升级方式

**从平台方面来说：**
- IOS平台，应用程序升级功能只能通过跳转到app store进行升级。
- Android平台，既可以通过跳转到应用市场进行升级，也可以下载apk包升级。

**从强制性来说可以分别强制升级和非强制升级：**
- 强制升级：就是用户必须升级才能继续使用App，如果不是非常必要不建议使用如此强硬的方式，会造成用户的反感。
- 非强制升级就是允许用户点击“取消”，继续使用App。

#### 升级流程

**IOS升级流程**
- IOS升级流程如下：
![](./app_upgrade_1.png)

- 流程说明：
1. 通常我们会访问后台接口获取是否有新的版本，如果有新的版本则弹出提示框，判断当前版本是否为“强制升级”，如果是则只提供用户一个“升级”的按钮，否则提供用户“升级”和“取消”按钮。
2. 弹出提示框后用户选择是否升级，如果选择“取消”，提示框消失，如果选择“升级”，跳转到app store进行升级。


**Android 升级流程**
- 相比ios的升级过程，Android就稍显复杂了，流程图如下：
![](./app_upgrade_2.png)

- 流程说明：

1. 访问后台接口获取是否有新的版本，这里和IOS是一样的，有则弹出升级提示框，判断当前版本是否为“强制升级”，如果是则只提供用户一个“升级”的按钮，否则提供用户“升级”和“取消”按钮。
2. 弹出提示框后有用户选择是否升级，如果选择“取消”，提示框消失，如果选择“升级”，判断是跳转到应用市场进行升级还是通过下载apk升级。
3. 如果下载apk升级，则开始下载apk，下载完成后跳转到apk安装引导界面。
4. 如果跳转到应用市场升级，判断是否指定了应用市场，比如只在华为应用市场上架了，那么此时需要指定跳转到华为应用市场，即使你在很多应用市场都上架了，也应该根据用户手机安装的应用市场指定一个应用市场，让用户选择应用市场不是一个好的体验，而且用户也不知道应该去哪个市场更新，如果用户选择了一个你没有上架的应用市场，那就更尴尬了。
5. 指定应用市场后直接跳转到指定的应用市场的更新界面。

#### 增量更新
> Apple不允许不经过App Store更新应用；在App Store上的更新apple自动做了增量计算，增量更新；12306不是更新应用，而是更新应用本地的资源文件。