// pages/home/home.js

// getApp() 获取App()产生的示例对象
// const app = getApp()

// const name = app.globalData.name
// const age = app.globalData.age

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'shenhj',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'james', age: 28},
      {id: 112, name: 'curry', age: 32},
      {id: 113, name: 'why', age: 18},
    ],
    counter: 0,
    list: []
  },

  // 获取用户信息的第二种方式
  handleGetUserInfo(event){
    console.log(event)
  },

  handleAddaction(){
    // 1. 错误做法：界面不会刷新
    // this.data.counter +=1
    // console.log(this.data.counter)

    // 2.this.setData
    this.setData({
      counter: this.data.counter + 1
    })
  },

  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: res => {
    //     console.log(res)
    //     const data = res.data.data.list;
    //     this.setData({
    //       list: data
    //     })
    //   }
    // })

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
    console.log("下拉刷新")
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

  },

  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  }
})