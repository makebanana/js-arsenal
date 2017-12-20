/**
 * [getImgNaturalSize 获取图片真实尺寸]
 * @param  { Dom } img            [图片对象]
 * @param  { Function } callback  [获取尺寸之后的处理]
 * @param  { Number } timeout     [我能够等它多久]
 * callback (width, height)
 */
function getImgNaturalSize (img, callback, timeout) {
	if (img.naturalWidth !== undefined && img.naturalWidth > 0) {
		callback(img.naturalWidth, img.naturalHeight);

	} else {
		var image = new Image();
		image.src = img.src;
		image.onload = function() {
			callback(image.width, image.height);
		};
    setTimeout( function removeOnload () {
      image.onload = function () {}
      callback()
    }, timeout || 2000)
	}
};

module.exports = getImgNaturalSize
