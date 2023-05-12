export class LoopReq {
  constructor(timeLimit = 5, timeGap = 1) {
    this._curReqCount = 0;
    this.timeLimit = timeLimit;
    this.timeGap = timeGap;
  }

  async send(successCallback, errorCallback, timeoutCallback) {
    if (this._curReqCount > Math.ceil(this.timeLimit / this.timeGap)) {
      timeoutCallback();
      return;
    }
    try {
      this._curReqCount += 1;
      const response = await window.axios.get("/user?ID=12345");
      console.log(response);
      let { code, data, msg } = response.data;
      if (code === 0) {
        if (data.state !== "pending") {
          //获取状态成功，成功或失败
          successCallback(data);
        } else {
          //如果状态还是待确认，timeGap秒后再次请求(递归)
          setTimeout(() => {
            this.send(successCallback, errorCallback, timeoutCallback);
          }, this.timeGap * 1000);
        }
      } else {
        //接口业务逻辑异常，提示出错
        errorCallback(new Error(msg));
      }
    } catch (e) {
      //请求异常，提示错误(一般是网络异常/接口404、500等)
      errorCallback(e);
    }
  }
}
