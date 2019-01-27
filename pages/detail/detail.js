// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieid:null,
    moviename:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      movieid:options.id,
      moviename:options.name
    }),
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      method:'GET',
      header:{
        "Content-Type":""
      },
      success: function(res){
        console.log(res)
        wx.setNavigationBarTitle({
          title: options.name,
        })
        wx.hideNavigationBarLoading()
      }
    })
    wx.showNavigationBarLoading()
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