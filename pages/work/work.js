Page({
  data: {
    tabs: [
      {
        title: 'IOT用户',
      },
      {
        title: '非IOT用户',
      }
    ],
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
});
