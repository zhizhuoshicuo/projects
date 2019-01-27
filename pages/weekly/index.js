// pages/weekly/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisWeekMovie:{
      name:"刺客信条",
      decribe:"育碧BUG游戏（滑稽脸）",
      url:"/images/test.jpg",
      isHihglyRecommended:true,
      id:0
    },
    WeeklyMovieList:[
      {
        name: "铁血战士",
        decribe: "铁血战士点评",
        url: "https://img3.doubanio.com/view/photo/raw/public/p2537399580.jpg",
        isHihglyRecommended: false,
        id:1
      },
      {
        name: "无双",
        decribe: "无双描述点评",
        url: "https://img3.doubanio.com/view/photo/raw/public/p2535096871.jpg",
        isHihglyRecommended: true,
        id:2
      },
      {
        name: "黑暗迷宫",
        decribe: "黑暗迷宫点评",
        url: "https://img3.doubanio.com/view/photo/raw/public/p2537871355.jpg",
        isHihglyRecommended: false,
        id:3
      }
    ],
    index:0
  },


  /**
   * cyg
   * 获取前台图片index来加载数据
   * 2018/10/31
   */
  onSlideChangeEnd:function(e){
    var that = this;
    that.setData({
      index:e.detail.current
    })
    console.log(e.detail)
  },


  /**
   * cyg
   * 点击影片进入详情页，根据传入的id进行展示
   * 2018/11/1
   */
  detail:function(e){
    console.log(e.currentTarget)
    var movieid = e.currentTarget.dataset.movieId
    var moviename = e.currentTarget.dataset.movieName
    console.log(movieid)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+movieid+'&name='+moviename,
    })
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