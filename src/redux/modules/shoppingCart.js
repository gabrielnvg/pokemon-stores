const types = {
  ADD_PRODUCT: 'shoppingCart/ADD_PRODUCT',
  // REMOVE_PRODUCT: 'shoppingCart/REMOVE_PRODUCT',
  ADD_PRODUCT_QUANTITY: 'shoppingCart/ADD_PRODUCT_QUANTITY',
  // REMOVE_PRODUCT_QUANTITY: 'shoppingCart/REMOVE_PRODUCT_QUANTITY',
  // REMOVE_ALL_PRODUCTS: 'shoppingCart/REMOVE_ALL_PRODUCTS',
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return [
        ...state,
        {
          ...action.product,
          quantity: 1,
        },
      ];
    case types.ADD_PRODUCT_QUANTITY:
      return action.products;
    default:
      return state;
  }
};

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product,
});

export const addProductQuantity = (products) => ({
  type: types.ADD_PRODUCT_QUANTITY,
  products,
});

export const addPruductToShoppingCart = (productId) => (dispatch, getState) => {
  const { catalogProducts } = getState().products;
  const shoppingCartProducts = getState().shoppingCart;
  const parsedProductId = parseInt(productId, 10);

  const selectedProduct = catalogProducts.find(
    (product) => product.id === parsedProductId,
  );

  const isProductInShoppingCart = Boolean(
    shoppingCartProducts.find((product) => product.id === parsedProductId),
  );

  if (isProductInShoppingCart) {
    const modifiedProducts = shoppingCartProducts.map((product) => {
      if (product.id === parsedProductId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    dispatch(addProductQuantity(modifiedProducts));
  } else {
    dispatch(addProduct(selectedProduct));
  }
};

export default reducer;
