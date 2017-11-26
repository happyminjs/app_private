// pages/pay/createorder/createorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      showTwoBtn:false, // 是否展示双按钮弹窗
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  createOrder:function(){
      this.setData({
          showTwoBtn:true
      })
  },
  cancleOrder:function(){
      this.setData({
          showTwoBtn: false
      })
  }, 
  confirmOrder:function(){
      // todo 请求生成订单的接口
      this.cancleOrder();
      wx.navigateBack({
          
      })
  }
})