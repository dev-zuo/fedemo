var EventUtil = {
    // 添加处理函数
    addHandler: function(element, type, handler) {
      if (element.addEventListener) { // 如果支持DOM2级
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) { // IE10及以下版本
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    },
    // 移除处理函数
    removeHandler: function(element, type, handler) {
      if (element.removeEventListener) { // 如果支持DOM2级
       element.removeEventListener(type, handler, false);
      } else if (element.detachEvent) { // IE10及以下版本
       element.detachEvent("on" + type, handler);
      } else {
       element["on" + type] = null;
      }
    },
    // 获取事件对象 event
    getEvent: function (event) {
      return event ? event : window.event;
    },
    // 获取事件目标 target
    getTarget: function (event) {
      return event.target || event.srcElement;
    },
    // 阻止默认事件执行
    preventDefault: function(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    // 阻止冒泡
    stopPropagation: function(event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    // 获取event.button
   getButton: function(event) {
    if (document.implementation.hasFeature('MouseEvents', '2.0')) {
      return event.button;
    } else {
      switch (event) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
           return 0;
        case 2:
        case 6:
           return 2;
        case 4:
           return 1;
      }
    }
  }
};