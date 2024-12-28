import { wrapWarnedOnce } from "./warned-once";

const wrapDeprecated = <Args extends any[], R>(
  func: (...args: Args) => R,
  errorMessages: string[],
) => {
  return wrapWarnedOnce(func, [
    `[DEPRECATED]: This temporary wrap will be removed in future versions.`,
    "",
    ...errorMessages,
  ]);
};

export { wrapDeprecated };
