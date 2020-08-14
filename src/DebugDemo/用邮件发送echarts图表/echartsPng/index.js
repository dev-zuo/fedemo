const NodeCharts = require('node-charts');

function getEchartsPng(options) {
  return new Promise((resolve, reject) => {
    let nc = new NodeCharts();
    //监听全局异常事件
    nc.on('error', (err) => {
      reject(err)
    });
    nc.render(options, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    }, {
      type: 'echarts'
    })
  })
}

module.exports = getEchartsPng