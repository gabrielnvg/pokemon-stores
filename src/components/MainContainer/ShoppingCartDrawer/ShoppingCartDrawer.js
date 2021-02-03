import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { toggleShoppingCartDrawer } from '../../../redux/modules/shoppingCart';

import ShoppingCartList from './ShoppingCartList/ShoppingCartList';

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    position: 'relative',
    width: 270,
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
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
      padding: theme.spacing(0, 1),
      fontSize: 'initial',
      lineHeight: 'initial',
      fontWeight: 'initial',
    },
  },
  drawerHeaderIcon: {
    color: '#ffffff',
  },
  drawerFooter: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  drawerFooterContainer: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.25rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  button: {
    width: '100%',
    textAlign: 'center',
    borderRadius: 0,
    color: '#ffffff',
    backgroundColor: process.env.STORE.color,
    '&:hover': {
      backgroundColor: process.env.STORE.colorDark,
    },
  },
}));

function ShoppingCartDrawer() {
  const dispatch = useDispatch();
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const {
    isDrawerOpen,
    totalProductsQuantity,
    totalProductsPrice,
  } = shoppingCartState;
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={(event) => {
        dispatch(toggleShoppingCartDrawer(false, event));
      }}
    >
      <div className={classes.drawerContainer} role="presentation">
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

        <div className={classes.drawerFooter}>
          <Divider />
          <div className={classes.drawerFooterContainer}>
            Total:{' '}
            <span>
              <strong>${totalProductsPrice.toFixed(2)}</strong>
            </span>
          </div>

          <Button className={classes.button} variant="contained" size="large">
            Purchase
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default ShoppingCartDrawer;
