import axios from "axios";

//封装成一个类，功能内鬃
export class LoopReq {
  _timer: any;
  _isComplete: boolean;
  timeLimit: number;
  timeGap: number;

  constructor(timeLimit = 5, timeGap = 1) {
    this._timer = undefined;
    this._isComplete = false;
    this.timeLimit = timeLimit;
    this.timeGap = timeGap;
  }

  send(successCallback: any, errorCallback: any, timeoutCallback: any) {
    let count = 1; //当前i除次数
    this._requestApi(successCallback, errorCallback);
    this._timer = setInterval(() => {
      if (count > Math.ceil(this.timeLimit / this.timeGap)) {
        this.terminalLoop(); // 轮询终止
        timeoutCallback(); // 5s超0寸，没有获取到结果，逻辑处理
        return;
      }
      count += 1;
      this._requestApi(successCallback, errorCallback);
    }, this.timeGap * 1000);
  }

  terminalLoop() {
    this._timer && clearInterval(this._timer);
    this._isComplete = true;
  }

  async _requestApi(successCallback: any, errorCallback: any) {
    if (this._isComplete) {
      this.terminalLoop();
      return;
    }
    try {
      const response: any = await axios.get("/user?ID=12345");
      console.log(response);
      const { code, data, msg } = response.data;
      if (code == 0) {
        if (data.state !== "pending") {
          //获取彳耗成功，成功或失败
          successCallback(data);
          this.terminalLoop();
        }
      } else {
        //后台接口异常，提示出错
        errorCallback(new Error(msg));
        this.terminalLoop();
      }
    } catch (e: any) {
      // 请求异常，提示错误(一般是网络异常等)
      errorCallback(e);
      this.terminalLoop();
    }
  }
}
