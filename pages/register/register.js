Page({
  data: {
  },

  onCouponClick(e) {
    if (e.currentTarget.dataset.used) {
      return false;
    } else {
      my.alert({
        content: '可用票券，票券点击事件',
      });
    }
  },
  onButtonTap() {
    my.alert({
      content: '胶囊按钮点击事件',
    });
  },
  onTapNext() {
    my.navigateTo({
      url: '../company/company'
    });
  }

});
