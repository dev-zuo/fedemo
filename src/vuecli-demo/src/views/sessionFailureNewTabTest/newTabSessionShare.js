class NewTabSessionShare {
  constructor() {}

  static init(cb) {
    let tempFields = "TEST_tempEmit";

    window.addEventListener("storage", event => {
      console.log(event);
      // 由于每个页面都会触发该事件，我们需要判断当前页是新开的tab页，还是旧的
      // 如果是新开的tab页，负责接收localStorage.getItem('sessionStorage') 并删除
      // 如果是旧的tab页，负责写入localStorage.setItem('sessionStorage')

      // 旧的tab页接收到事件时，key会是tempFields
      if (event.key === tempFields) {
        console.log("接收到新tab页打开时触发的消息");
        // 触发新tab页的storage事件，传递当前页的sessioinStorage事件
        localStorage.setItem("sessionStorage", JSON.stringify(sessionStorage));
        // 清除localStorage
        localStorage.removeItem("sessionStorage");
        // 这里会触发两次新tab页的storage事件
        // 1. newValue: "{"TEST_alreadyCheck":"true"}"  oldValue: null
        // 2. newValue: null oldValue: "{"TEST_alreadyCheck":"true"}"
      } else if (event.key === "sessionStorage") {
        console.log(
          "新tab页接收到老tab页，设置的localStorage，接收并删除",
          localStorage.getItem("sessionStorage")
        );
        // 新打开窗口如果newValue的值不为null，那就是旧tab页将其sessionStorage传递到了当前页
        // 然后，将传过来的数据原封不动的设置到当前页
        if (event.newValue !== null) {
          let data = JSON.parse(event.newValue);
          for (let key in data) {
            sessionStorage.setItem(key, data[key]);
          }
          typeof cb === "function" && cb();
        }
      }
    });

    // 如果是新开的tab页，那么sessoinStorage为空
    if (!sessionStorage.length) {
      // 通过触发其他页面的storage事件，来读取之前页面的sessionStorage并传递到当前页
      localStorage.setItem(tempFields, Date.now());
    }
  }
}

export default NewTabSessionShare;
