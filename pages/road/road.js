Page({
  data: {
    thumb: '../../static/head.jpg',
  },
  onCouponClick(e) {
    if (e.currentTarget.dataset.used) {
      return false;
    } else {
      my.alert({
        content: '整条被点击',
      });
    }
  },
  onButtonTap() {
    my.alert({
      content: '按钮被点击',
    });
  },
});
