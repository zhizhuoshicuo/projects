// pages/wxml/index.wxml.js
var load = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    name: '程',
    gender: '男',
    w: 'W',
    W: 'w',
    length: 5,
    array: [{
      num: 1
    }, {
      num: 2
    }, {
      num: 3
    }],
    objectArray: [{
        id: 5,
        unique: 'unique_5'
      },
      {
        id: 4,
        unique: 'unique_4'
      },
      {
        id: 3,
        unique: 'unique_3'
      },
      {
        id: 2,
        unique: 'unique_2'
      },
      {
        id: 1,
        unique: 'unique_1'
      },
      {
        id: 0,
        unique: 'unique_0'
      },
    ],
    numberArray: [1, 2, 3, 4],
    show: true,
    loading: false
  },

  /**
   * cyg
   * 点击switch后循环交换多对数据
   * 2018/10/13
   */
  SwitchAction: function(e) {
    const length = this.data.objectArray.length;
    for (let i = 0; i < length; i++) { //这个循环仅仅用作改变多对switch，取消每次只改变一对。
      const x = Math.floor(Math.random() * length);
      const y = Math.floor(Math.random() * length);
      const temp = this.data.objectArray[x];
      this.data.objectArray[x] = this.data.objectArray[y];
      this.data.objectArray[y] = temp;
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },


  /**
   * cyg
   * 点击addtofront按钮后，在当前页面按顺序继续生成switch开关
   * 2018/10/13
   */
  AddToFront: function(e) {
    const length = this.data.objectArray.length;
    this.data.objectArray = [{
      id: length,
      unique: 'unique_' + length
    }].concat(this.data.objectArray);
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  /**
   * cyg
   * 点击addnumbertofront按钮后，在当前页面按顺序继续生成switch开关
   * 2018/10/13
   */
  AddNumberToFront: function(e) {
    let length = this.data.numberArray.length;
    this.data.numberArray = [length + 1].concat(this.data.numberArray);
    length = this.data.numberArray.length;
    const temp = this.data.numberArray[0];
    for (let i = 1; i < length; i++) { //整体左移，以达到新增内容出现在最后的效果
      this.data.numberArray[i - 1] = this.data.numberArray[i];
    }
    this.data.numberArray[length - 1] = temp;
    this.setData({
      numberArray: this.data.numberArray
    })
  },


  /**
   * cyg
   * wx.getSystemInfoSync
   * 测试wx.getSystemInfoSync()的内容
   * 2018/10/18
   */
  getInfo: function(e) {
    this.setData({
      model: wx.getSystemInfoSync().model,
      system: wx.getSystemInfoSync().system,
      show: false
    })
    console.log('调用getInfo函数')
  },


  /**
   * cyg
   * 测试loading动画和toast效果
   * 2018/10/18
   */
  taploading: function(e) {
    let that = this;
    that.setData({
      loading: true
    })
    setTimeout(function() {
      that.setData({
        loading: false
      })
    }, 900);
    wx.showToast({ // 显示Toast

      title: '已发送',

      icon: 'success',

      duration: 3000

    })
    console.log('toast')
  },

  /**
   * cyg
   * 测试模态对话框
   * 2018/10/19
   */
  tapAbutton: function(e) {
    //console.log(e)
    wx.showModal({
      title: 'testA',
      content: '测试showModal函数',
      confirmText: 'bingo',
      cancelText: 'no',
      success: function(res) {
        if (res.confirm) {
          console.log('bingo')
        } else if (res.cancel) {
          console.log('no')
        }
      }
    })
  },


  /**
   * cyg
   * 测试wx.request请求
   * 2018/10/19
   */
  tap: function() {
    let that = this
    if (load) {
      return
    }
    load = true
    wx.showLoading()
    wx.request({
      url: 'http://127.0.0.1/test.json',
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        if (res.statusCode === 200) {//因为json文件格式问题，导致检查以下代码1h。
          //let js=JSON.parse(res.data)
          that.setData({
            testArray: res.data.testArray,
            testName: res.data.testName
          })
          //console.log(JSON.parse(res.data)['testArray'])
          //console.log(js)
          console.log(res.data)
        }
      },
      fail: function(res) {
        wx.showToast({
          title: 'error',
        })
      },
      complete: function(res) {
        wx.hideLoading()
        load = false
      }
    })
  },

  /**
   * cyg
   * 添加按钮后的排序，让新增数字出现在后面，之前数字位置不变
   * 2018/10/13
   */
  sortnum: function(ar) {
    //弃用，写在了addnumbertofront中
  },
  
  /**
   * cyg
   * 点击跳转
   * 2018/10/19
   */
  tapTo:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },

  /**
   * switch监听开关日志
   */
  listennerSwitch: function(e) {
    console.log("switch开关状态：", e.detail.value)
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})