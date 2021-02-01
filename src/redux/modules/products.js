import fetchWithTimeout from '../../assets/js/utils/fetchWithTimeout';
import generateRandomPrice from '../../assets/js/utils/generateRandomPrice';
import getLastUrlPath from '../../assets/js/utils/getLastUrlPath';

const { endpoint } = process.env.STORE;

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
  fetchWithTimeout({
    url: endpoint,
    timeout: 10000,
  })
    .then((response) => response.json())
    .then((json) => {
      const products = json.pokemon;

      dispatch(
        setProducts(
          products.map((product) => {
            const { pokemon } = product;
            const pokemonId = getLastUrlPath(pokemon.url);

            return {
              name: pokemon.name,
              price: generateRandomPrice(),
              mainImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
              thumbImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
            };
          }),
        ),
      );

      dispatch(setFetchLoading(false));
    })
    .catch(() => {
      dispatch(setFetchError(true));
    });
};

export default reducer;
