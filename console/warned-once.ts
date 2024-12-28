const wrapWarnedOnce = <Args extends any[], R>(
  func: (...args: Args) => R,
  errorMessages: string[],
) => {
  let warnedOnce = false;
  return (...args: Args): R => {
    if (!warnedOnce) {
      console.warn(errorMessages.concat(["\n"]).join("\n"));
      warnedOnce = true;
    }
    return func(...args);
  };
};

const wrapDeprecatedConsole = <Args extends any[], R>(
  func: (...args: Args) => R,
  errorMessages: string[],
) => {
  return wrapWarnedOnce(func, [
    `[DEPRECATED]: This temporary wrap will be removed in future versions.`,
    "",
    ...errorMessages,
  ]);
};

export { wrapWarnedOnce, wrapDeprecatedConsole };
