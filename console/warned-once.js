const wrapWarnedOnce = (func, messages) => {
  let warnedOnce = false;
  return (...args) => {
    if (!warnedOnce) {
      console.warn(messages.concat(["\n"]).join("\n"));
      warnedOnce = true;
    }
    return func(...args);
  };
};

export { wrapWarnedOnce };
