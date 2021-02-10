import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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

import breakpoints from '../../../../../assets/makeStyles/breakpoints';

import {
  changeProductQuantity,
  removeProductFromShoppingCart,
} from '../../../../../redux/modules/shoppingCart';

import placeholderImage from './assets/images/placeholder.png';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    padding: 2,
    backgroundColor: process.env.STORE.colorLight,
    '& img': {
      height: '100%',
    },
  },
  productInfo: {
    width: 70,
    paddingRight: 2,
    lineHeight: 1.3,
    [theme.breakpoints.up(breakpoints.xxs)]: {
      width: 130,
    },
    [theme.breakpoints.up(breakpoints.xs)]: {
      width: 150,
    },
  },
  productName: {
    textTransform: 'capitalize',
    overflowX: 'hidden',
    whiteSpace: 'pre-wrap',
    textOverflow: 'ellipsis',
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
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar
          className={classes.avatarContainer}
          alt={shoppingCartProduct.name}
          src={shoppingCartProduct.thumbImageUrl}
        >
          <img
            src={placeholderImage}
            alt={shoppingCartProduct.name}
            title={shoppingCartProduct.name}
          />
        </Avatar>
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
          onClick={() =>
            dispatch(
              changeProductQuantity({
                productId: shoppingCartProduct.id,
                productPrice: shoppingCartProduct.price,
                isAdd: false,
              }),
            )
          }
        >
          <RemoveIcon />
        </IconButton>

        <div className={classes.productQuantityValue}>
          {shoppingCartProduct.quantity}
        </div>

        <IconButton
          color="primary"
          onClick={() =>
            dispatch(
              changeProductQuantity({
                productId: shoppingCartProduct.id,
                productPrice: shoppingCartProduct.price,
                isAdd: true,
              }),
            )
          }
        >
          <AddIcon />
        </IconButton>
      </div>

      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() =>
            dispatch(removeProductFromShoppingCart(shoppingCartProduct))
          }
        >
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
