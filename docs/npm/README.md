## npm 别名(使用别名同时安装两个版本)

```shell
npm install echarts2@npm:echarts@^2.2.7
npm install echarts4@npm:echarts@^4.7.0
```

and

```js
import { xxx } from "echarts2";
import { xxx } from "echarts4";
```
