Page({
  data: {
    longPassword: '',
    againPassword: '',
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

  // 输入密码
  onInputPassword(e) {
    this.setData({
      longPassword: e.detail.value,
    });
  },
  // 清除密码
  onClearPassword() {
    this.setData({
      longPassword: '',
    });
  },
  // 再次输入密码
  onAgainInputPassword(e) {
    this.setData({
      againPassword: e.detail.value,
    });
  },
  // 再次清除密码
  onAgainClearPassword() {
    this.setData({
      againPassword: '',
    });
  },
  // 下一步
  onTapNext() {
    my.navigateTo({ url: '../company/company' })
  },

});
