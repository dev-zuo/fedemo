import MessageInfo from "./src/index.vue";
import MessageInfoCore from "./src/MessageInfo.js";

MessageInfo.install = function(Vue) {
  // 注册全局组件 message-vue
  Vue.component(MessageInfo.name, MessageInfo);

  // 绑定实例属性
  Vue.prototype.$showMsg = MessageInfoCore.showMsg;
  Vue.prototype.$closeMsg = MessageInfoCore.closeMsg;
};

export default MessageInfo;
