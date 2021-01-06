Page({
  data: {
    haveDevice: false,
    devicePos: [{
      longitude: '106.221032',
      latitude: '38.517746',
      name: '宁夏电力投资集团大楼',
      address: '亲水北大街东侧阅海中央商务区\n设备ID：94494654565616',
    },
    {
      longitude: '106.230584',
      latitude: '38.485247',
      name: '人民广场',
      address: '北京中路与人民广场东街交叉处西侧\n设备ID：53484654565616',
    }],

  },
  onReady() {
    var that = this
    // 判断有没有设备
    if (that.data.devicePos.length > 0) {
      that.setData({
        haveDevice: true
      })
    }
    else {
      that.setData({
        haveDevice: false
      })
    }
    console.log(that.data.haveDevice)

  },
  onTapLookIOT(e) {
    let deviceIndex = e.currentTarget.dataset.number;
    my.openLocation({
      longitude: this.data.devicePos[deviceIndex].longitude,
      latitude: this.data.devicePos[deviceIndex].latitude,
      name: this.data.devicePos[deviceIndex].name,
      address: this.data.devicePos[deviceIndex].address,
    })
  }
});
