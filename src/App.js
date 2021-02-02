import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FadeIn from 'react-fade-in';
import { fetchProducts } from './redux/modules/products';

import MainContainer from './components/MainContainer/MainContainer';
import FetchError from './components/FetchError/FetchError';
import FetchLoading from './components/FetchLoading/FetchLoading';
import ProductsCatalog from './components/ProductsCatalog/ProductsCatalog';
import EmptySearch from './components/EmptySearch/EmptySearch';

function App() {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const { catalogProducts } = productsState;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <MainContainer>
      {productsState.fetchStatus.hasError && (
        <FadeIn>
          <FetchError />
        </FadeIn>
      )}

      {productsState.fetchStatus.isLoading &&
        !productsState.fetchStatus.hasError && <FetchLoading />}

      {!productsState.fetchStatus.isLoading &&
        !productsState.fetchStatus.hasError &&
        (catalogProducts.length ? (
          <ProductsCatalog products={catalogProducts} />
        ) : (
          <FadeIn>
            <EmptySearch />
          </FadeIn>
        ))}
    </MainContainer>
  );
}

export default App;
