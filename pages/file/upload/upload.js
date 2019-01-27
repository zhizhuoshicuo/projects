// pages/file/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:''
  },

  /**
   * cyg
   * 上传文件,摸索后发现无查看本地文件接口可以使用，自己不会写。。换一种思路，用前台写的方式
   * 2018/11/3
   */
  upload_file:function(e){
  
      
    // wx.chooseImage({
    //   success: function(res) {
    //     const tempFilePaths = res.tempFilePaths
    //     wx.uploadFile({
    //       url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
    //       filePath: tempFilePaths[0],
    //       name: 'file',
    //       formData: {
    //         'user': 'test'
    //       },
    //       success(res) {
    //         const data = res.data
    //         //do something
    //       }
    //     })
    //   },
    // })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})