import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import { filterProducts } from '../../../redux/modules/products';
import { toggleShoppingCartDrawer } from '../../../redux/modules/shoppingCart';
import debounce from '../../../assets/js/utils/debounce';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginRight: theme.spacing(2),
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    maxWidth: 500,
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
  },
}));

function NavBar() {
  const dispatch = useDispatch();
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar style={{ backgroundColor: process.env.STORE.color }}>
        <Toolbar>
          <IconButton edge="start" aria-label="logo">
            <img
              src="/logo32.png"
              alt={process.env.STORE.title}
              title={process.env.STORE.title}
            />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {process.env.STORE.name} Pokémon Store
          </Typography>

          <div className={classes.grow}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search a Pokémon…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={debounce(
                  (event) => dispatch(filterProducts(event.target.value)),
                  350,
                )}
              />
            </div>
          </div>

          <IconButton
            aria-label="open shopping cart drawer"
            color="inherit"
            onClick={(event) => {
              dispatch(toggleShoppingCartDrawer(true, event));
            }}
          >
            <Badge
              badgeContent={shoppingCartState.totalProductsQuantity}
              color="secondary"
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
