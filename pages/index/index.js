
const longitude = 106.221032;
const latitude = 38.517746;
const includePoints = [{
  latitude: 38.517746,
  longitude: 106.221032,
}];

Page({
  data: {
    scale: 14,
    longitude,
    latitude,
    includePoints,
  },
  onReady() {
    this.mapCtx = my.createMapContext('map');
    this.demoPolyline();
  },

  demoPolyline() {
    this.setData({
      scale: 16,
      longitude,
      latitude,
      polyline: [{
        points: [{
          latitude: 38.519746,
          longitude: 106.221032,
        }, {
          latitude: 38.517746,
          longitude: 106.221032,
        }],
        color: '#FF0000DD',
        width: 10,
        dottedLine: false,
        iconPath: "",
        iconWidth: 10,
      }],
    });
  },
  markertap(e) {
    console.log(e)
  }
});
