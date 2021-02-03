const types = {
  ADD_PRODUCT: 'shoppingCart/ADD_PRODUCT',
  // REMOVE_PRODUCT: 'shoppingCart/REMOVE_PRODUCT',
  SET_PRODUCT_QUANTITY: 'shoppingCart/SET_PRODUCT_QUANTITY',
  // REMOVE_ALL_PRODUCTS: 'shoppingCart/REMOVE_ALL_PRODUCTS',
  SET_TOTAL_PRODUCTS_QUANTITY: 'shoppingCart/SET_TOTAL_PRODUCTS_QUANTITY',
  SET_TOTAL_PRODUCTS_PRICE: 'shoppingCart/SET_TOTAL_PRODUCTS_PRICE',
  SET_IS_DRAWER_OPEN: 'shoppingCart/SET_IS_DRAWER_OPEN',
};

const initialState = {
  shoppingCartProducts: [],
  totalProductsQuantity: 0,
  totalProductsPrice: 0,
  isDrawerOpen: false,
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
    case types.SET_PRODUCT_QUANTITY:
      return {
        ...state,
        shoppingCartProducts: action.products,
      };
    case types.SET_TOTAL_PRODUCTS_QUANTITY:
      return {
        ...state,
        totalProductsQuantity: action.isAdd
          ? state.totalProductsQuantity + 1
          : state.totalProductsQuantity - 1,
      };
    case types.SET_TOTAL_PRODUCTS_PRICE:
      return {
        ...state,
        totalProductsPrice:
          Math.ceil(
            (action.isAdd
              ? state.totalProductsPrice + action.currentProductPrice
              : state.totalProductsPrice - action.currentProductPrice) * 100,
          ) / 100,
      };
    case types.SET_IS_DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen,
      };
    default:
      return state;
  }
};

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product,
});

export const setProductQuantity = (products) => ({
  type: types.SET_PRODUCT_QUANTITY,
  products,
});

export const setTotalProductsQuantity = ({ isAdd }) => ({
  type: types.SET_TOTAL_PRODUCTS_QUANTITY,
  isAdd,
});

export const setTotalProductsPrice = ({ currentProductPrice, isAdd }) => ({
  type: types.SET_TOTAL_PRODUCTS_PRICE,
  currentProductPrice,
  isAdd,
});

export const setIsDrawerOpen = (isDrawerOpen) => ({
  type: types.SET_IS_DRAWER_OPEN,
  isDrawerOpen,
});

export const changeProductQuantity = ({ productId, productPrice, isAdd }) => (
  dispatch,
  getState,
) => {
  const { shoppingCartProducts } = getState().shoppingCart;

  const modifiedProducts = shoppingCartProducts.map((product) => {
    if (product.id === productId) {
      return {
        ...product,
        quantity: isAdd ? product.quantity + 1 : product.quantity - 1,
      };
    }
    return product;
  });

  dispatch(setProductQuantity(modifiedProducts));
  dispatch(setTotalProductsQuantity({ isAdd }));
  dispatch(setTotalProductsPrice({ currentProductPrice: productPrice, isAdd }));
};

export const addProductToShoppingCart = (productId) => (dispatch, getState) => {
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
    dispatch(
      changeProductQuantity({
        productId: parsedProductId,
        productPrice: selectedProduct.price,
        isAdd: true,
      }),
    );
  } else {
    dispatch(addProduct(selectedProduct));
    dispatch(setTotalProductsQuantity({ isAdd: true }));
    dispatch(
      setTotalProductsPrice({
        currentProductPrice: selectedProduct.price,
        isAdd: true,
      }),
    );
  }

  dispatch(setIsDrawerOpen(true));
};

export const toggleShoppingCartDrawer = (isOpen, event) => (dispatch) => {
  if (
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  dispatch(setIsDrawerOpen(isOpen));
};

export default reducer;
