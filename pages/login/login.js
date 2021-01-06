Page({
  data: {
    tabs: [
      {
        title: '验证码登录',
      },
      {
        title: '账号登录',
      }
    ],
    longPassword: '',
  },
  onReady() {
    console.log("-----------准备登陆------------")
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
  // 登录
  onLogin() {
    my.switchTab({ url: '../work/work' });
  },
  // 注册
  onRegister() {
    my.navigateTo({ url: '../register/register' })
  },

});
