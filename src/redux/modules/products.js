// import fetchWithTimeout from '../../assets/js/utils/fetchWithTimeout';

// const { endpoint } = process.env.STORE;

const types = {
  SET_FETCH_LOADING: 'products/SET_FETCH_LOADING',
  SET_FETCH_ERROR: 'products/SET_FETCH_ERROR',
  SET_PRODUCTS: 'products/SET_PRODUCTS',
};

const initialState = {
  fetchStatus: {
    isLoading: true,
    hasError: false,
  },
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FETCH_LOADING:
      return {
        ...state,
        fetchStatus: {
          isLoading: action.isLoading,
          hasError: false,
        },
      };
    case types.SET_FETCH_ERROR:
      return {
        ...state,
        fetchStatus: {
          isLoading: false,
          hasError: action.hasError,
        },
      };
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export const setFetchLoading = (isLoading) => ({
  type: types.SET_FETCH_LOADING,
  isLoading,
});

export const setFetchError = (hasError) => ({
  type: types.SET_FETCH_ERROR,
  hasError,
});

export const setProducts = (products) => ({
  type: types.SET_PRODUCTS,
  products,
});

export const fetchProducts = () => (dispatch) => {
  dispatch(
    setProducts([
      {
        name: 'Product Name 1',
        price: 19.45,
        mainImageUrl: 'a',
        thumbImageUrl: 'b'
      },
      {
        name: 'Product Name 2',
        price: 6.23,
        mainImageUrl: 'c',
        thumbImageUrl: 'd'
      },
    ]),
  );

  dispatch(setFetchLoading(false));
};

export default reducer;
