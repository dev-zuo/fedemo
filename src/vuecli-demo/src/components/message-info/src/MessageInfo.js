import Bus from "./EventBus";

class MessageInfo {
  static showMsg(...args) {
    Bus.$emit("showMsg", ...args);
  }

  static closeMsg(...args) {
    Bus.$emit("closeMsg", ...args);
  }
}

export default MessageInfo;
