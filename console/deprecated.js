import { wrapWarnedOnce } from "./warned-once";

const wrapDeprecated = (func, messages) => {
  return wrapWarnedOnce(func, [
    `[DEPRECATED]: This temporary wrap will be removed in future versions.`,
    "",
    ...messages,
  ]);
};

export { wrapDeprecated };
