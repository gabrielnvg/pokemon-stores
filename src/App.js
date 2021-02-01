import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/modules/products';

import MainContainer from './components/MainContainer/MainContainer';
import FetchError from './components/FetchError/FetchError';
import FetchLoading from './components/FetchLoading/FetchLoading';

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);
  const { products } = store;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <MainContainer>
      {store.fetchStatus.hasError && <FetchError />}

      {store.fetchStatus.isLoading && !store.fetchStatus.hasError && (
        <FetchLoading />
      )}

      {!store.fetchStatus.isLoading && !store.fetchStatus.hasError && (
        <p>{products[0].name}</p>
      )}
    </MainContainer>
  );
}

export default App;
