const imageCompress = (
  url: string,
  maxWidth: number,
  {
    quality,
    mimeType,
  }: { quality: number; mimeType: string /* FIXME: constraint value */ },
) => {
  const canvas = document.createElement("canvas");
  const img = document.createElement("img");
  img.crossOrigin = "anonymous";
  img.src = url;

  return new Promise((resolve, reject) => {
    img.onload = () => {
      let targetWidth = img.width,
        targetHeight = img.height;

      if (img.width > maxWidth) {
        targetWidth = maxWidth;
        targetHeight = (img.height * maxWidth) / img.width;
      }

      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, targetWidth, targetHeight);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL(mimeType, quality / 100));
      } else {
        reject("Canvas context is null");
      }
    };
  });
};

export { imageCompress };
