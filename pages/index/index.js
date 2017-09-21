//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgalist: [
      'http://a1.qpic.cn/psb?/V11PabkX0Jag4S/HAZjBw1pQqtgZ35M2YStFwNh70L.YefjoUZlVW.FMLg!/b/dHUAAAAAAAAA&bo=gAJyBAAAAAARB8Q!&rf=viewer_4',
      'http://a2.qpic.cn/psb?/V11PabkX0Jag4S/Si.m3t855GqKvC3Y*yjf4rKuyGKADb9rPs9u2jfhQAw!/b/dGwBAAAAAAAA&bo=gAKAAgAAAAARBzA!&rf=viewer_4',
      'http://a3.qpic.cn/psb?/V11PabkX0Jag4S/VuDox5Ff0PTOHYp7.y66z0L5EGvpqxFeR6B8YsyTftg!/b/dI4BAAAAAAAA&bo=gAJyBAAAAAARB8Q!&rf=viewer_4'
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18871489324',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  openMap: function () {
    wx.openLocation({
      latitude: 30.370714, // 纬度，范围为-90~90，负数表示南纬
      longitude: 114.339185, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例          
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '发现附近好玩的小程序哦',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },



  clickPhoto:function(res){
    // var cur = res.target.dataset.src;  
    wx.previewImage({
      current: this.data.imgalist[0], // 当前显示图片的http链接
      urls: this.data.imgalist
    })
  },
  clickPhoto2: function (res) {
    wx.previewImage({
      current: this.data.imgalist[1], // 当前显示图片的http链接
      urls: this.data.imgalist
    })
  },
  clickPhoto3: function (res) {
    wx.previewImage({
      current: this.data.imgalist[2], // 当前显示图片的http链接
      urls: this.data.imgalist
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  }
})
