import React from 'react';
import { useSelector } from 'react-redux';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import ShoppingCartListItem from './ShoppingCartListItem/ShoppingCartListItem';

function ShoppingCartList() {
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const { shoppingCartProducts } = shoppingCartState;

  return (
    <List>
      {shoppingCartProducts.map((shoppingCartProduct, i) => (
        <div key={`shopping-cart-product-${shoppingCartProduct.id}`}>
          <ShoppingCartListItem shoppingCartProduct={shoppingCartProduct} />

          {shoppingCartProduct.length !== i + 1 && (
            <Divider variant="inset" component="li" />
          )}
        </div>
      ))}
    </List>
  );
}

export default ShoppingCartList;
