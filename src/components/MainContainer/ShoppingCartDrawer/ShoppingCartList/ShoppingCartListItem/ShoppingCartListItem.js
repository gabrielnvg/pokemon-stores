import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
  avatarContainer: {
    padding: 2,
    backgroundColor: process.env.STORE.colorLight,
  },
  productInfo: {
    width: '100%',
  },
  productName: {
    textTransform: 'capitalize',
  },
  productDescription: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}));

function ShoppingCartListItem({ shoppingCartProduct }) {
  const classes = useStyles();

  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar
          className={classes.avatarContainer}
          alt={shoppingCartProduct.name}
          src={shoppingCartProduct.thumbImageUrl}
        />
      </ListItemAvatar>

      <div className={classes.productInfo}>
        <ListItemText
          primary={
            <div className={classes.productName}>
              {shoppingCartProduct.name}
            </div>
          }
        />

        <div className={classes.productDescription}>
          <div className={classes.productQuantity}>
            {/* Plus and minus buttons with the product quantity here */}
          </div>
          <div className={classes.productPrice}>
            {/* Product price multiplied by its quantity here */}
          </div>
        </div>
      </div>
    </ListItem>
  );
}

ShoppingCartListItem.propTypes = {
  shoppingCartProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mainImageUrl: PropTypes.string.isRequired,
    thumbImageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingCartListItem;
