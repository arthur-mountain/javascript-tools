import { sleep } from "./sleep";

const STATUS = {
  ERROR: 0,
  PROGRESSING: 1,
  SUCCESS: 2,
} as const;

type ErrorMessage = string;
type Status = (typeof STATUS)[keyof typeof STATUS];
type RetryParams = {
  func: (status: Status) => void | Promise<ErrorMessage> | Error;
  options?: { maxRetries: number; retryDelay: number };
};
const retryWithBackoff = async ({
  func,
  options: { maxRetries, retryDelay } = { maxRetries: 5, retryDelay: 500 },
}: RetryParams): Promise<Status> => {
  let status: Status = STATUS.PROGRESSING;
  let currentRetry = 1;
  while (currentRetry < maxRetries) {
    try {
      await func(status);
      status = STATUS.SUCCESS;
      break;
    } catch (e) {
      await sleep(retryDelay * 2 ** currentRetry);
      currentRetry++;
    }
  }
  return status === STATUS.SUCCESS ? status : STATUS.ERROR;
};

export type { RetryParams, Status };
export { retryWithBackoff, STATUS };
