const debounce = (fn, milliseconds) => {
  let timer = 0;
  return (...params) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...params), milliseconds);
  };
};

export default debounce;
