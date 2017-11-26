// pages/shop/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      headImg:[
          {
              imgUrl:'http://on3kfaqzn.bkt.clouddn.com/1024&&BF734FDDC8C44CE18BE5A26D38D17E28.png?imageView2/1/w/1024/h/1024'
          },
          {
              imgUrl: 'http://on3kfaqzn.bkt.clouddn.com/1024&&BF734FDDC8C44CE18BE5A26D38D17E28.png?imageView2/1/w/1024/h/1024'
          },
          {
              imgUrl: 'http://on3kfaqzn.bkt.clouddn.com/1024&&BF734FDDC8C44CE18BE5A26D38D17E28.png?imageView2/1/w/1024/h/1024'
          }
      ]
  
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
  /**
   * 去店铺页面
   */
  gotoShop:function(e){
      wx.navigateTo({
          url: '../shopcenter/shopcenter',
      })
  },
  /**
   * 立即购买点击
   */
  buynow:function(){
      wx.navigateTo({
          url: '/pages/pay/createorder/createorder',
      })
  },
  /**
   * 去购物车
   */
  gotoCart:function(){
      wx.navigateTo({
          url: '../cart/cart',
      })
  }
})