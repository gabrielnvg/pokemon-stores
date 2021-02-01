import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/modules/products';

import MainContainer from './components/MainContainer/MainContainer';


function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <MainContainer>
      <p>{products[0]?.name}</p>
    </MainContainer>
  );
}

export default App;
