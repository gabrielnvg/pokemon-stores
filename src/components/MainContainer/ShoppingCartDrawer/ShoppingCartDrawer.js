import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import {
  toggleShoppingCartDrawer,
  emptyShoppingCart,
} from '../../../redux/modules/shoppingCart';
import {
  openDialog,
  setDialogState,
} from '../../../redux/modules/purchaseConfirmationDialog';

import ShoppingCartList from './ShoppingCartList/ShoppingCartList';

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    position: 'relative',
    width: 295,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    [theme.breakpoints.up(450)]: {
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
  drawerCenterContent: {
    // marginBottom value is the height of the drawerFooter
    marginBottom: 91,
    overflow: 'auto',
  },
  drawerFooter: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#ffffff',
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
  purchaseConfirmationDialogBody: {
    textAlign: 'center',
  },
  cashbackValue: {
    marginTop: 5,
    fontSize: 20,
  },
}));

function ShoppingCartDrawer() {
  const dispatch = useDispatch();
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const {
    isDrawerOpen,
    totalProductsQuantity,
    totalProductsPrice,
    shoppingCartProducts,
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
                ? `${
                    totalProductsQuantity > 99 ? '99+' : totalProductsQuantity
                  } Pokémon`
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

        <div className={classes.drawerCenterContent}>
          <ShoppingCartList />
        </div>

        <div className={classes.drawerFooter}>
          <Divider />
          <div className={classes.drawerFooterContainer}>
            Total:{' '}
            <span>
              <strong>${totalProductsPrice.toFixed(2).replace('-', '')}</strong>
            </span>
          </div>

          <Button
            className={classes.button}
            variant="contained"
            size="large"
            disabled={!shoppingCartProducts.length}
            onClick={() => {
              dispatch(
                setDialogState({
                  isOpen: false,
                  title: 'Thank you!',
                  body: (
                    <div className={classes.purchaseConfirmationDialogBody}>
                      <div>Your cashback of 10%:</div>
                      <div className={classes.cashbackValue}>
                        <strong>
                          $
                          {(
                            Math.floor(totalProductsPrice * 0.1 * 100) / 100
                          ).toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  ),
                  hasCancelButton: false,
                  confirmButtonText: 'Ok',
                }),
              );
              dispatch(emptyShoppingCart());
              dispatch(openDialog());
            }}
          >
            Purchase
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default ShoppingCartDrawer;
