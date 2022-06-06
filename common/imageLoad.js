/**
 * @param {string} imgUrl image url
 * @description load single image
 * @return {Promise} return image promise
 */
function imageLoad(imgUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = (target) => {
      resolve(target);
    }

    img.onerror = function () {
      reject(`this image url is error: ${src}`);
    }

    img.src = imgUrl;
  })
}

/**
 * @param {Array} imgUrls image url array
 * @description load muitiple image
 * @return {Promise} return image array
 */
function imagesLoad(imgUrls) {
  const imgPromises = imgUrls.map(url => loadImage(url))

  return Promise.all(imgPromises)
}