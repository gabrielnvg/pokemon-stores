import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 280,
  },
  media: {
    height: 140,
    backgroundSize: 140,
    backgroundColor: process.env.STORE.colorLight,
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
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.mainImageUrl}
        title={product.name}
      />
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
          $ {product.price}
        </Typography>
      </CardContent>

      <Button className={classes.button} variant="contained" size="large">
        Add to cart
      </Button>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    mainImageUrl: PropTypes.string.isRequired,
    thumbImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
