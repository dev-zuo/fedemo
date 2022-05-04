import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// 3s 后触发 unhandledrejection 错误
setTimeout(() => {
  Promise.reject("foo");
}, 3000);

// `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
Vue.config.errorHandler = (err, vm, info) => {
  // info: v-on handler、vm: VueComponent、err.message, err.stack
  console.log(
    "vue config errorHandler",
    err,
    vm,
    info,
    `
      message: ${err.message},
      name: ${err.name},
      fileName: ${err.fileName},
      lineNumber: ${err.lineNumber},
      columnNumber: ${err.columnNumber},
      stack: ${err.stack},
    `
  );
  console.error(err);

  // 可以将错误暴露到 window error event
  // 这种情况，window error event 需要特殊处理 err.detail
  let detail = { err, vm, info, type: "vueError" };
  try {
    let event = new CustomEvent("error", {
      detail,
    });
    window.dispatchEvent(event);
  } catch (e) {
    // not support IE handler, IE 9+
    let event = document.createEvent("CustomEvent");
    event.initCustomEvent("error", true, true, detail);
    window.dispatchEvent(event);
  }
};

// 冒泡阶段
window.addEventListener("error", (err) => {
  console.log("window error", err);
});

// 捕获阶段，img、link、script、src 加载 error
window.addEventListener(
  "error",
  (err) => {
    // 过滤js error
    let target = err.target || err.srcElement;
    let isElementTarget =
      target instanceof HTMLScriptElement ||
      target instanceof HTMLLinkElement ||
      target instanceof HTMLImageElement;
    if (!isElementTarget) return false;
    // 上报资源地址
    let url = target.src || target.href;
    console.log("window load error", url, err);
  },
  true
);

// https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event
window.addEventListener(
  "unhandledrejection",
  (err) => {
    // err PromiseRejectionEvent、type: "unhandledrejection"
    console.log("window unhandledrejection", err, err.reason, err.type);
  },
  true
);

// 参考: 一篇文章教你如何捕获前端错误
// https://mp.weixin.qq.com/s/E51lKQOojsvhHvACIyXwhw
