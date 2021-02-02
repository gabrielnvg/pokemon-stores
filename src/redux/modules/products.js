import fetchWithTimeout from '../../assets/js/utils/fetchWithTimeout';
import generateRandomPrice from '../../assets/js/utils/generateRandomPrice';
import getLastUrlPath from '../../assets/js/utils/getLastUrlPath';

const { endpoint } = process.env.STORE;

const types = {
  SET_FETCH_LOADING: 'products/SET_FETCH_LOADING',
  SET_FETCH_ERROR: 'products/SET_FETCH_ERROR',
  SET_PRISTINE_PRODUCTS: 'products/SET_PRISTINE_PRODUCTS',
  SET_CATALOG_PRODUCTS: 'products/SET_CATALOG_PRODUCTS',
};

const initialState = {
  fetchStatus: {
    isLoading: true,
    hasError: false,
  },
  pristineProducts: [],
  catalogProducts: [],
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
    case types.SET_PRISTINE_PRODUCTS:
      return {
        ...state,
        pristineProducts: action.pristineProducts,
      };
    case types.SET_CATALOG_PRODUCTS:
      return {
        ...state,
        catalogProducts: action.catalogProducts,
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

export const setPristineProducts = (pristineProducts) => ({
  type: types.SET_PRISTINE_PRODUCTS,
  pristineProducts,
});

export const setCatalogProducts = (catalogProducts) => ({
  type: types.SET_CATALOG_PRODUCTS,
  catalogProducts,
});

export const fetchProducts = () => (dispatch) => {
  fetchWithTimeout({
    url: endpoint,
    timeout: 10000,
  })
    .then((response) => response.json())
    .then((json) => {
      const products = json.pokemon.map((product) => {
        const { pokemon } = product;
        const pokemonId = getLastUrlPath(pokemon.url);

        return {
          id: parseInt(pokemonId, 10),
          name: pokemon.name,
          price: generateRandomPrice(),
          mainImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
          thumbImageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        };
      });

      dispatch(setPristineProducts(products));
      dispatch(setCatalogProducts(products));
      dispatch(setFetchLoading(false));
    })
    .catch(() => {
      dispatch(setFetchError(true));
    });
};

export const filterProducts = (searchBarValue) => (dispatch, getState) => {
  const { pristineProducts } = getState().products;

  const filteredProducts = pristineProducts.filter((_, i) =>
    pristineProducts[i].name.includes(searchBarValue.toLowerCase()),
  );

  dispatch(setCatalogProducts(filteredProducts));
};

export default reducer;
