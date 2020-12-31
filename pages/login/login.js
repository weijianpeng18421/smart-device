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

  },

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

});
