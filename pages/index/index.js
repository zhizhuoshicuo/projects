//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hidden: true,
    city: "通州",
    weather: ""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  /**
   * cyg
   * 测试连接查询天气
   * 2018/10/28
   */
  getInfo: function() {
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now', //仅为示例，并非真实的接口地址
      data: {
        "location": that.data.city,
        "key": "59fc72abb82044ca99f99518d0c3fc91"
      },
      header: {
        'GET': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log(res.data)
      },
      complete(res) {
        if (res.data.HeWeather6[0].status != 'ok') {
          wx.showToast({
            title: '未找到该地点',
            duration: 3000,
            mask: true,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
        }
        that.setData({
          hidden: false,
          weather: res.data.HeWeather6[0].status == 'ok' ? res.data.HeWeather6[0].now.cond_txt : ''
        })
        //console.log(res.data.HeWeather6[0].now.cond_txt)
      }
    })
  },

  /**
   * cyg
   * 获取input中的值
   * 2018/10/28
   */
  getInputInfo: function(e) {
    this.setData({
      city: e.detail.value
    })
  }
})