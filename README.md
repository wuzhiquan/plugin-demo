## 安装
```
npm i wisefly-pc-ui --save
```
## 快速上手

###### 整体引入

main.js
```
  import wfpcui from 'wisefly-pc-ui';
  import 'wisefly-pc-ui/lib/wisefly.css';
  Vue.use(wfpcui);
```

###### 按需引入

>第一种方式：main.js加载注册方法，组件内加载组件

main.js
```
  import { install } from 'wisefly-pc-ui';
  import 'wisefly-pc-ui/lib/wisefly.css'
  Vue.use(install);
```
组件内
```
<template>
  <Layout/>
</template>

<script>
import { Layout } from 'wisefly-pc-ui';

export default {
  components: {
    Layout,
  },
};
</script>

```

>第二种方式：main.js加载注册方法及项目中使用到的组件

main.js
```
  import { install, Layout } from 'wisefly-pc-ui';
  import 'wisefly-pc-ui/lib/wisefly.css';
  Vue.use(install);
  Vue.use(Layout); 
```
组件内
```
<template>
  <Layout/>
</template>

```