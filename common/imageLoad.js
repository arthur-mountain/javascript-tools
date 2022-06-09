/**
 * @param {string} imgUrl image url
 * @description load single image
 * @return {Promise} return image promise
 */
export function imageLoad(imgUrl) {
  const img = new Image();
  img.src = imgUrl;

  return new Promise((resolve, reject) => {
    if (img.complete) {
      resolve(img);
    } else {
      img.onload = (result) => resolve(result)
      img.onerror = (error) => reject(error)
    }
  })
}

/**
 * @param {Array} imgUrls image url array
 * @description load muitiple image
 * @return {Promise} return all promise image array
 */
export function imagesLoad(imgUrls) {
  const imgPromises = imgUrls.map(url => loadImage(url))

  return Promise.all(imgPromises)
  // return new Promise((resolve, reject) => {
  //   Promise
  //     .all(imgPromises)
  //     .then(imgs => resolve(imgs))
  //     .catch(error => reject(error))
  // })
}