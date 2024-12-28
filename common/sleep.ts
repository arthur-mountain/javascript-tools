const sleep = (ms: number) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve("ok");
    }, ms);
  });
};

export { sleep };
