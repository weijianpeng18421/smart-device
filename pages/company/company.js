var maxUploadCount = 4//最大上传四张照片 为了控制不出界
Page({
  data: {
    imagesList: [
      'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg'],
  },
  // 选择照片
  chooseImage(e) {
    var that = this
    my.chooseImage({
      sourceType: ['camera', 'album'],
      count: 4,
      success: (res) => {
        that.data.imagesList = that.data.imagesList.concat(res.tempFilePaths)
        // 控制图片最多只能选择四张
        let imageListLength = that.data.imagesList.length
        if (imageListLength > maxUploadCount) {
          that.data.imagesList.splice(maxUploadCount, imageListLength);
        }

        that.setData({
          imagesList: that.data.imagesList
        })
        my.showToast({
          content: '上传成功',
        });
      },
      fail: () => {
        my.showToast({
          content: '选择失败',
        });
      }
    })
  },
  // 删除照片
  deleteImage(e) {
    var that = this
    let delteIndex = e.currentTarget.dataset.index;
    that.data.imagesList.splice(delteIndex, 1);
    that.setData({
      imagesList: that.data.imagesList
    })
  },

});
