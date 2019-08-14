//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 全局变量数据
  globalData: {
    userInfo: null,
    'article_list': [
      {
        'picture':'/image/hero1.jpg',
        'title':'鸣人',
        'description':'十多年前第四代火影拼尽全力，以自己的生命为代价将“九尾妖狐”封印在了刚 出生的鸣人身上。',
        'time':'2019-1-1'

      },
      {
        'picture': '/image/hero2.jpg',
        'title': '佐助',
        'description': '火之国木叶隐村宇智波一族的天才忍者，六道仙人长子因陀罗的转世者。',
        'time': '2019-1-1'

      },
      {
        'picture': '/image/hero3.jpg',
        'title': '卡卡西',
        'description': '火之国木叶隐村的精英上忍，原木叶暗部成员，四代目火影波风水门的弟子，第七班队长，漩涡鸣人、宇智波佐助、春野樱的老师。',
        'time': '2019-1-1'

      },
      {
        'picture': '/image/hero4.jpg',
        'title': '我爱罗',
        'description': '小时候由于体内封印着一尾守鹤而被村人害怕，又因为至亲之人的背叛而导致性格变得冷酷无情、喜好杀戮。',
        'time': '2019-1-1'

      },
    ]
  }
})