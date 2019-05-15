# vue提高大型数据列表的性能
通常我们在应用中会请求一些列表数据，比如说用户列表、商品列表、文章列表等等……

而且有时候，我们并不会去修改这些请求回来的列表数据，而只是单纯地去展示它们，或者是把它们保存在全局状态管理器里面（又称之为 Vuex）。请求数据列表的示意代码如下所示：


```js
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = users;
  }
};
```

Vue 在默认情况下，会将数组 this.users 中的，所有对象的第一层属性设置为响应式数据。

这对于大型的对象数组来说，性能成本非常的高。没错，的确有时候列表数据是有分页的，但总会有一些情况下，是没有进行分页，继而在前端展示的。

一个实际的例子就是谷歌地图的标记点 markers 列表数据，这就是一个拥有很多对象的大型数组。

所以，在一些特定的情况下，如果我们能够阻止 Vue 将这些列表数据设置为响应式的，那么我们就可以为项目带来一些性能上的提升。实际上我们就是可以做到的，通过用 Object.freeze 方法，将获取到的列表数据在赋值给组件之前，进行冻结：


```js
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  }
};
```

记住，同样地可以应用到 Vuex 实践中：


```js
const mutations = {
  setUsers(state, users) {
    state.users = Object.freeze(users);
  }
};
```

顺便说一下，如果你确实有需要去修改请求得到的列表数据，那么你仍然可以通过创建一个新的数组来实现。举个例子，给原列表数据添加一个同类型元素，可以这么操作：


```js
state.users = Object.freeze([...state.users, user]);
```

我们可以通过 Chrome 浏览器的 DevTools 工具中的 Performance 标签页，来完成我们想要的测量工作。为了能够获得准确的数据，我们需要在 Vue 应用中开启「性能追踪」模式。

我们可以在 main.js 文件中进行全局配置，或者在 Nuxt 的场景下，于插件中进行设置：


```js
Vue.config.performance = true;
```

又或者你的环境变量 NODE_NEV 是保持设置准确的话，也可以使用它在非生产环境来开启「性能追踪」模式：

```js
const isDev = process.env.NODE_ENV !== "production";
Vue.config.performance = isDev;
```

以上操作会让 Vue 内部启用 User Timing API 来对组件进行性能追踪。