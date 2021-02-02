const generateRandomPrice = () =>
  ((Math.floor(Math.random() * 9999) + 0) / 100).toFixed(2);

export default generateRandomPrice;
