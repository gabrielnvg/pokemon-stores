const types = {
  ADD_PRODUCT: 'products/ADD_PRODUCT',
  // REMOVE_PRODUCT: 'products/REMOVE_PRODUCT',
  // ADD_PRODUCT_QUANTITY: 'products/ADD_PRODUCT_QUANTITY',
  // REMOVE_PRODUCT_QUANTITY: 'products/REMOVE_PRODUCT_QUANTITY',
  // REMOVE_ALL_PRODUCTS: 'products/REMOVE_ALL_PRODUCTS',
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
    default:
      return state;
  }
};

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product,
});

export const addPruductToShoppingCart = (productId) => (dispatch, getState) => {
  const { products } = getState().products;
  const parsedProductId = parseInt(productId, 10);

  const selectedProduct = products.find(
    (product) => product.id === parsedProductId,
  );

  const isProductInShoppingCart = Boolean(
    getState().shoppingCart.find((product) => product.id === parsedProductId),
  );

  if (isProductInShoppingCart) {
    //
  } else {
    dispatch(addProduct(selectedProduct));
  }
};

export default reducer;
