import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/modules/products';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.STORE.name}</p>
        <p>{products[0]?.name}</p>
      </header>
    </div>
  );
}

export default App;
