 
import React, { Component } from "react";
import ReactDom from "react-dom";
class App extends Component {
  render() {
    return <div>hello world hehe</div>;
  }
}
ReactDom.render(<App />, document.getElementById("app"));

// 把公共库抽离出去，形成一个单一模块，因为业务代码要经常变动，公共库不会
