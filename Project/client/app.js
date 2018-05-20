//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    login(userinfo, callback) {
      wx.login({}) // 现在，调用 wx.login 是一个可选项了。只有当你需要使用微信登录鉴别用户，才需要用到它，用来获取用户的匿名识别符
      if (userinfo.detail.errMsg == 'getUserInfo:ok') {
        wx.request({}) // 将用户信息、匿名识别符发送给服务器，调用成功时执行 callback(null, res)
      }
      else if (userinfo.detail.errMsg == 'getUserInfo:fail auth deny') { // 当用户点击拒绝时
        wx.showModal({}) // 提示用户，需要授权才能登录
        callback('fail to modify scope', null)
      }
    }

})