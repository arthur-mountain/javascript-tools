import cloneObj from "./object/cloneObj";
import { imageLoad, imagesLoad } from "./common/imageLoad";
import { typeOf, simepleTypeOf } from "./common/typeOf";
import { sleep } from "./common/sleep";
import { retryWithBackoff } from "./common/retry";
import { blobToArrayBuff } from "./file/blobToArrayBuff";
import { fileToBase64 } from "./file/fileToBase64";
import { saveFile } from "./file/saveFile";
import { wrapDeprecated } from "./console/deprecated";
import { wrapWarnedOnce } from "./console/warned-once";

export default {
  cloneObj,
  imageLoad,
  imagesLoad,
  typeOf,
  sleep,
  retryWithBackoff,
  simepleTypeOf,
  blobToArrayBuff,
  fileToBase64,
  saveFile,
  wrapDeprecated,
  wrapWarnedOnce,
};
