Page({
  data: {

  },
  exitLogin() {
    my.redirectTo({ url: '../login/login' })
  },
  enterRoad() {
    my.navigateTo({
      url: '../road/road'
    });
  },
  enterDevice() {
    my.navigateTo({
      url: '../device/device'
    });
  }
});

