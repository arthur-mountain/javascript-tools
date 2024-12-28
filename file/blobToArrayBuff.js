function blobToArrayBuff(blob) {
  const reader = new FileReader();
  reader.readAsArrayBuffer(blob);
  let loadFileSuccess;
  let loadFileFailure;

  return new Promise((resolve, reject) => {
    loadFileSuccess = (e) => {
      if (e.target.result) {
        resolve(e.target.result);
      } else {
        reject(
          new Error("transform done, but could not find the transform result"),
        );
      }
    };
    loadFileFailure = (e) => {
      reject(new Error("tranform blob to arraybuffer fail"));
    };

    reader.addEventListener("load", loadFileSuccess);
    reader.addEventListener("error", loadFileFailure);
  }).finally(() => {
    reader.removeEventListener("load", loadFileSuccess);
    reader.removeEventListener("error", loadFileFailure);
  });
}

export { blobToArrayBuff };

