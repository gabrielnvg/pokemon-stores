import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { addProductToShoppingCart } from '../../../../redux/modules/shoppingCart';

import placeholderImage from './assets/images/placeholder.png';

const useStyles = makeStyles({
  root: {
    width: 280,
  },
  media: {
    padding: 2,
    height: 140,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: process.env.STORE.colorLight,
    '& img': {
      height: '100%',
    },
  },
  name: {
    textTransform: 'capitalize',
  },
  price: {
    width: '100%',
    fontSize: 25,
    color: '#333333',
    fontWeight: 'bold',
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
});

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <img
          src={product.mainImageUrl}
          alt={product.name}
          title={product.name}
          onError={(event) => {
            const { target } = event;
            target.onError = null;
            target.src = placeholderImage;
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {product.name}
        </Typography>
        <Typography
          className={classes.price}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      <Button
        className={classes.button}
        variant="contained"
        size="large"
        onClick={() => dispatch(addProductToShoppingCart(product.id))}
      >
        Add to cart
      </Button>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mainImageUrl: PropTypes.string.isRequired,
    thumbImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
