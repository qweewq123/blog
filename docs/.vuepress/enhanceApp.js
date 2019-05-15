import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router
  }) => {
    Vue.use(Element),
    Vue.prototype.$http = axios
  }