import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FadeIn from 'react-fade-in';
import { fetchProducts } from './redux/modules/products';
import { setShoppingCartFromStorage } from './redux/modules/shoppingCart';
import { closeDialog } from './redux/modules/purchaseConfirmationDialog';

import MainContainer from './components/MainContainer/MainContainer';
import FetchError from './components/FetchError/FetchError';
import FetchLoading from './components/FetchLoading/FetchLoading';
import ProductsCatalog from './components/MainContainer/ProductsCatalog/ProductsCatalog';
import EmptySearch from './components/EmptySearch/EmptySearch';
import DialogContainer from './components/DialogContainer/DialogContainer';

function App() {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const { catalogProducts } = productsState;
  const purchaseConfirmationDialogState = useSelector(
    (state) => state.purchaseConfirmationDialog,
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(setShoppingCartFromStorage());
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

      <DialogContainer
        dialogState={purchaseConfirmationDialogState}
        handleCloseDialog={() => dispatch(closeDialog())}
      />
    </MainContainer>
  );
}

export default App;
