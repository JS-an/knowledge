##理解 Typescript 配置文件

TS 使用 tsconfig.json 作为其配置文件，它主要包含两块内容：

1. 指定待编译的文件
2. 定义编译选项

> 另外，一般来说，tsconfig.json 文件所处的路径就是当前 TS 项目的根路径。

###基本用法
TS 的编译命令为 tsc ，当我们在命令行中直接输入 tsc 时，会打印出如下的使用说明：
```shell
$ tsc
Version 2.7.2
Syntax:   tsc [options] [file ...]
Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt

Options:
-h, --help                                         Print this message.
--all                                              Show all compiler options.
-v, --version                                      Print the compiler's version.
...
```
如果仅仅是编译少量的文件，我们可以直接使用 tsc ，通过其选项来设置编译配置，如：

```shell
tsc --outFile file.js --target es3 --module commonjs file.ts
```
但如果是编译整个项目的话，最推荐的做法是使用 tsconfig.json 文件，这样就不用每次编译时都还得手动敲配置，而且也便于团队协作。

以下是让 tsc 使用 tsconfig.json 的两种方式：

1. 不显式指定 tsconfig.json ，此时，编译器会从当前路径开始寻找 tsconfig.json 文件，如果没有找到，则继续往上级路径逐步寻找，直到找到为止
2. 通过 --project （或缩写 -p ）指定一个包含 tsconfig.json 的路径，或者包含配置信息的 .json 文件路径

>注意，tsc 的命令行选项具有优先级，会覆盖 tsconfig.json 中的同名选项。

###使用示例
下面是一个简单的配置示例：
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "app.ts",
    "foo.ts",
  ]
}
```
其中，compilerOptions 用来配置编译选项，files 用来指定待编译文件。
这里的待编译文件是指入口文件，任何被入口文件依赖的文件，比如 foo.ts 依赖 bar.ts ，那这里并不需要写上 bar.ts ，编译器会自动把所有的依赖文件纳为编译对象。

也可以使用 include 和 exclude 来指定和排除待编译文件：
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```
所以，总结一下，指定待编译文件有两种方式：

1. 使用 files 属性
2. 使用 include 和 exclude 属性

> 开发者可以按照自己的喜好使用其中任意一种。但它们不是互斥的，在某些情况下两者搭配起来使用效果更佳。

###配置说明
####文件指定
- files 属性是一个数组，数组元素可以是相对文件路径和绝对文件路径。

- include 和 exclude 属性也是一个数组，但数组元素是类似 glob 的文件模式。它支持的 glob 通配符包括：

> \* ：匹配 0 或多个字符（注意：不含路径分隔符）
? ：匹配任意单个字符（注意：不含路径分隔符）
\*\*/ ：递归匹配任何子路径

- 在继续说明之前，有必要先了解下在编译器眼里什么样的文件才算是 TS 文件。
1. TS 文件指拓展名为 .ts、.tsx 或 .d.ts 的文件。如果开启了 allowJs 选项，那 .js 和 .jsx 文件也属于 TS 文件。

2. 如果仅仅包含一个 * 或者 .* ，那么只有TS 文件才会被包含。

3. 如果 files 和 include 都未设置，那么除了 exclude 排除的文件，编译器会默认包含路径下的所有 TS 文件。

4. 如果同时设置 files 和 include ，那么编译器会把两者指定的文件都引入。

5. 如果未设置 exclude ，那其默认值为 node_modules 、bower_components、jspm_packages 和编译选项 outDir 指定的路径。

6. exclude 只对 include 有效，对 files 无效。即 files 指定的文件如果同时被 exclude 排除，那么该文件仍然会被编译器引入。

- 前面提到，任何被 files 或 include 引入的文件的依赖会被自动引入。
反过来，如果 B.ts 被 A.ts 依赖，那么 B.ts 不能被 exclude 排除，除非 A.ts 也被排除了。

- 有一点要注意的是，编译器不会引入疑似为输出的文件。比如，如果引入的文件中包含 index.ts ，那么 index.d.ts 和 index.js 就会被排除。通常来说，只有拓展名不一样的文件命名法是不推荐的。

- tsconfig.json 也可以为空文件，这种情况下会使用默认的编译选项来编译所有默认引入的文件。

####编译选项
#####常用选项
|选项字段|类型|默认值|说明|
|----|----|----|----|
|allowJs|boolean|false|允许编译 JS 文件|
|checkJs|boolean|false|报告 JS 文件中存在的类型错误需要配合 allowJs 使用|
|declaration|boolean|false	生成对应的 .d.ts 文件|
|declarationDir|string|-|生成的 .d.ts 文件存放路径默认与 .ts 文件相同|
|experimentalDecorators|boolean|false|启用实验功能-ES 装饰器|
|jsx|string|Preserve|在 .tsx 中支持 JSX ：React 或 Preserve ，详细说明|
|jsxFactory|string|React.createElement|jsx 设置为 React 时使用的创建函数|
|lib|string[]|-|编译时引入的 ES 功能库，包括：es5 、es6、es7、dom 等。如果未设置，则默认为： target 为 es5 时: ["dom", "es5", "scripthost"] target 为 es6 时: ["dom", "es6", "dom.iterable", "scripthost"]|
|module|string|target === "es3" or "es5" ?"commonjs" : "es6"|生成的模块形式：none、commonjs、amd、system、umd、es6、es2015 或 esnext 只有 amd 和 system 能和 outFile 一起使用 target 为 es5 或更低时可用 es6 和 es2015|
|moduleResolution|string|module === "amd" or "system" or "es6" ? "classic" : "node"|模块解析方式，详细说明|
|noImplicitAny|boolean|false|存在隐式 any 时抛错|
|noImplicitReturns|boolean|false|不存在 return 时抛错|
|noImplicitThis|boolean|false|this 可能为 any 时抛错|
|outDir|string|-|编译生成的文件存放路径默认与 .ts 文件相同|
|sourceMap|boolean|false|生成 .map 文件|
|target|string|es3|生成 .js 文件版本|
附：[官方完整的编译选项列表](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
####类型相关
- 类型相关的选项包括 typeRoots 和 types 。

有一个普遍的误解，以为这两个选项适用于所有的类型声明文件，包括用户自定义的声明文件。其实不然。
这两个选项只对通过 npm 安装的声明模块有效，用户自定义的类型声明文件与它们没有任何关系。

声明模块通常会包含一个 index.d.ts 文件，或者其 package.json 设置了 types 字段。

默认的，所有位于 node_modules/@types 路径下的模块都会引入到编译器。
具体来说是，./node_modules/@types 、../node_modules/@types、../../node_modules/@types 等等。

- typeRoots 用来指定默认的类型声明文件查找路径，默认为 node_modules/@types 。比如:

```json
{
  "compilerOptions": {
    "typeRoots": ["./typings"]
  }
}
```
上面的配置会自动引入 ./typings 下的所有 TS 类型声明模块，而不是 ./node_modules/@types 下的模块。

- 如果不希望自动引入 typeRoots 指定路径下的所有声明模块，那可以使用 types 指定自动引入哪些模块。比如：

```json
{
  "compilerOptions": {
    "types" : ["node", "lodash", "express"]
  }
}
```
只会引入 node 、 lodash 和 express 三个声明模块，其它的声明模块则不会被自动引入。
如果 types 被设置为 [] ，那么将不会自动引入任何声明模块。此时，如果想使用声明模块，只能在代码中手动引入了。

> 请记住，自动引入只对包含全局声明的模块有效。比如 jQuery ，我们不用手动 import 或者 ///<reference/> 即可在任何文件中使用 $ 的类型。再比如，对于 import 'foo' ，编译器会分别在 node_modules 和 node_modules/@types 文件下查找 foo 模块和声明模块。

基于此，如果想让自定义声明的类型不需要手动引入就可以在任何地方使用，可以将其声明为全局声明 global ，然后让 files 或者 include 包含即可。

比如：
```ts
declare global {
  const graphql: (query: TemplateStringsArray) => void;
  namespace Gatsby {
    interface ComponentProps {
      children: () => React.ReactNode,
      data: RootQueryType
    }
  }
}
```
这样的话，就可以在任何地方直接使用 graphql 和 Gatsby 对应的类型了。

####配置复用
可以使用 extends 来实现配置复用，即一个配置文件可以继承另一个文件的配置属性。

比如，建立一个基础的配置文件 configs/base.json ：
```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```
然后，tsconfig.json 就可以引用这个文件的配置了：
```json
{
  "extends": "./configs/base",
  "files": [
    "main.ts",
    "supplemental.ts"
  ]
}
```
这种继承有两种特点：

1. 继承者中的同名配置会覆盖被继承者
2. 所有相对路径都被解析为其所在文件的路径