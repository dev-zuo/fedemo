const express = require('express');
const fs=require("fs");
const app = express();

app.use('*', function(req, res) {
  console.log('接收到请求')
  console.log(req.baseUrl)

  // res.sendfile('0_从零开始简单的路由.html')
  res.sendfile('4_嵌套路由.html')
})

app.listen(3000, function() {  
    console.log("server start at 127.0.0.1:3000");
});
