const types = {
  ADD_PRODUCT: 'shoppingCart/ADD_PRODUCT',
  // REMOVE_PRODUCT: 'shoppingCart/REMOVE_PRODUCT',
  ADD_PRODUCT_QUANTITY: 'shoppingCart/ADD_PRODUCT_QUANTITY',
  // REMOVE_PRODUCT_QUANTITY: 'shoppingCart/REMOVE_PRODUCT_QUANTITY',
  // REMOVE_ALL_PRODUCTS: 'shoppingCart/REMOVE_ALL_PRODUCTS',
  SET_TOTAL_PRODUCTS_QUANTITY: 'shoppingCart/SET_TOTAL_PRODUCTS_QUANTITY',
  // SET_TOTAL_PRODUCTS_PRICE: 'shoppingCart/SET_TOTAL_PRODUCTS_PRICE',
};

const initialState = {
  shoppingCartProducts: [],
  totalProductsQuantity: 0,
  totalProductsPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return {
        ...state,
        shoppingCartProducts: [
          ...state.shoppingCartProducts,
          {
            ...action.product,
            quantity: 1,
          },
        ],
      };
    case types.ADD_PRODUCT_QUANTITY:
      return {
        ...state,
        shoppingCartProducts: action.products,
      };
    case types.SET_TOTAL_PRODUCTS_QUANTITY:
      return {
        ...state,
        totalProductsQuantity: state.totalProductsQuantity + 1,
      };
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

export const setTotalProductsQuantity = () => ({
  type: types.SET_TOTAL_PRODUCTS_QUANTITY,
});

export const addPruductToShoppingCart = (productId) => (dispatch, getState) => {
  const { catalogProducts } = getState().products;
  const { shoppingCartProducts } = getState().shoppingCart;
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

  dispatch(setTotalProductsQuantity());
};

export default reducer;
