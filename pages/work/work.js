const util = require('../../utils/util.js')
Page({
  data: {
    tabs: [
      {
        title: '非IOT用户',
      },
      {
        title: 'IOT用户',
      }
    ],
    periodShow: false,
    periodTime: null,
    addressName: null,
  },

  // 切换tab
  handleTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handleTabChange({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },


  // 验证码输入
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  // 验证码清除
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
  },
  // 验证码发送
  onSend() {
    my.alert({
      title: '验证码发送成功',
    });
  },
  //施工时间段点击
  onPeriodTap(e) {
    var that = this
    that.setData({
      periodShow: true
    })
  },
  // 关闭弹窗
  onPopupClose(e) {
    var that = this
    that.setData({
      periodShow: false,
      addressShow: false,
    })
  },
  // 时间段选择
  onPeriodSelect(e) {
    var that = this
    let startTime = null;
    let endTime = null;
    if (e[0] && e[1]) {
      startTime = util.dateFormat(e[0]);
      endTime = util.dateFormat(e[1]);
      that.setData({
        periodTime: startTime + ' 至 ' + endTime
      })
    }
    else {
      my.showToast({
        content: '选择失败',
      });
    }
  },
  // 地址选择
  onAddressTap(e) {
    var that = this
    my.chooseLocation({
      success: (res) => {
        that.setData({
          addressName: res.address,
        })
      },
      fail: (error) => {
        my.showToast({
          content: '调用失败：' + JSON.stringify(error)
        });
      },
    });
  },
});
