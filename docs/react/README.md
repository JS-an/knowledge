## React 相关资料

- [React 新文档](https://beta.reactjs.org/)
- [React 新文档中文版](https://reactjs.bootcss.com/)
- [React 文档](https://reactjs.org/)
- [React 文档中文版](https://react.docschina.org/)

## React 缓存实现

- [react-activation](https://github.com/CJY0208/react-activation)
- [umi-plugin-keep-alive -- Umi 实现](https://github.com/alitajs/umi-plugin-keep-alive)

### 缓存实现后的影响

1. 更新 state 后跳转路由; (Modal,Tooltip 等不关闭)

- 用 setTimeout(不是很建议,但最简单)
- 针对最后执行的 state 或组件完全渲染后再进行跳转(较为建议,但比较复杂)
