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
    realStartTime: null,
    realEndTime: null,
    approveTime: null,
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
  // 开工时间
  onFocusStart(e) {
    var that = this
    my.datePicker({
      currentDate: util.getCurDate(),
      startDate: '1800-01-01',
      endDate: '2200-01-01',
      success: (res) => {
        that.setData({
          realStartTime: res.date,
        });
      },
      fail: (err) => {

      }
    });
  },
  // 完工时间
  onFocusEnd(e) {
    var that = this
    my.datePicker({
      currentDate: util.getCurDate(),
      startDate: '1800-01-01',
      endDate: '2200-01-01',
      success: (res) => {
        that.setData({
          realEndTime: res.date,
        });
      },
      fail: (err) => {

      }
    });
  },
  // 审批时间
  onApproveTime(e) {
    var that = this
    my.optionsSelect({
      title: "审批时间",
      optionsOne: ["一个工作日", "三个工作日", "七个工作日", "三十个工作日", "一百五十个工作日", "三百六十个工作日"],
      selectedOneIndex: 3,
      success(res) {
        console.log(res)
        that.setData({
          approveTime: res.selectedOneOption,
        });
      }
    });
  }
});
