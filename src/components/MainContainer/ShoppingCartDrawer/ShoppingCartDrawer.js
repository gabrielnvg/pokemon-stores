import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

import { toggleShoppingCartDrawer } from '../../../redux/modules/shoppingCart';

import ShoppingCartList from './ShoppingCartList/ShoppingCartList';

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    backgroundColor: process.env.STORE.color,
    fontSize: '1.25rem',
    fontWeight: 500,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'initial',
      lineHeight: 'initial',
      fontWeight: 'initial',
    },
  },
  drawerHeaderIcon: {
    color: '#ffffff',
  },
  list: {
    width: 250,
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },
}));

function ShoppingCartDrawer() {
  const dispatch = useDispatch();
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const { isDrawerOpen, totalProductsQuantity } = shoppingCartState;
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={(event) => {
        dispatch(toggleShoppingCartDrawer(false, event));
      }}
    >
      <div className={classes.list} role="presentation">
        <div className={classes.drawerHeader}>
          <span className={classes.headerTitleText}>
            Shopping Cart{' '}
            <span>
              (
              {totalProductsQuantity
                ? `${totalProductsQuantity} Pokémon`
                : 'empty'}
              )
            </span>
          </span>
          <IconButton
            onClick={(event) => {
              dispatch(toggleShoppingCartDrawer(false, event));
            }}
          >
            <ChevronRightIcon className={classes.drawerHeaderIcon} />
          </IconButton>
        </div>

        <Divider />

        <ShoppingCartList />

        <Divider />

        <div>Total products price here</div>
      </div>
    </Drawer>
  );
}

export default ShoppingCartDrawer;
