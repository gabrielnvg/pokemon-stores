import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  avatarContainer: {
    padding: 2,
    backgroundColor: process.env.STORE.colorLight,
  },
  productInfo: {
    width: '100%',
    paddingRight: 2,
    lineHeight: 1.3,
  },
  productName: {
    textTransform: 'capitalize',
  },
  productQuantityContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productQuantityValue: {
    padding: '0 2px',
  },
  productPrice: {
    fontSize: 16,
  },
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

        <div className={classes.productPrice}>
          <strong>
            $
            {(shoppingCartProduct.price * shoppingCartProduct.quantity).toFixed(
              2,
            )}
          </strong>
        </div>
      </div>

      <div className={classes.productQuantityContainer}>
        <IconButton
          color="secondary"
          disabled={shoppingCartProduct.quantity <= 1}
        >
          <RemoveIcon />
        </IconButton>

        <div className={classes.productQuantityValue}>
          {shoppingCartProduct.quantity}
        </div>

        <IconButton color="primary">
          <AddIcon />
        </IconButton>
      </div>

      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
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
