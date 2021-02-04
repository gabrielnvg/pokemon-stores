import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import { makeStyles } from '@material-ui/core/styles';

import ProductCard from './ProductCard/ProductCard';

const useStyles = makeStyles((theme) => ({
  productsCatalog: {
    marginTop: 20,
    marginBottom: 60,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 20,
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },
}));

function ProductsCatalog({ products }) {
  const classes = useStyles();

  return (
    <div className={classes.productsCatalog}>
      {products.map((product) => (
        <div key={`product-${product.id}`}>
          <FadeIn>
            <ProductCard product={product} />
          </FadeIn>
        </div>
      ))}
    </div>
  );
}

ProductsCatalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      mainImageUrl: PropTypes.string.isRequired,
      thumbImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductsCatalog;
