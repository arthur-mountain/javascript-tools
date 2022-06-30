function fileToBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve, reject) => {
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject
  })
};

export default fileToBase64;