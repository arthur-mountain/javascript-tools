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

export { wrapWarnedOnce };
