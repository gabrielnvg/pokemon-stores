const isImplemented = typeof localStorage !== 'undefined';

const isKeyStored = (key) =>
  Boolean(isImplemented && localStorage.getItem(key));

const storage = {
  set: (key, value) =>
    isImplemented && localStorage.setItem(key, JSON.stringify(value)),

  remove: (key) => isImplemented && localStorage.removeItem(key),

  has: (key) => isKeyStored(key),

  get: (key) => {
    if (isKeyStored(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return null;
  },
};

export const storageKeys = {
  shoppingCart: 'shopping-cart',
};

export default storage;
