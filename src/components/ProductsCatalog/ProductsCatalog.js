import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsCatalog.module.scss';

import ProductCard from './ProductCard/ProductCard';

function ProductsCatalog({ products }) {
  return (
    <div className={styles['products-catalog']}>
      {products.map((product, i) => (
        <ProductCard key={`product-${i + 1}`} product={product} />
      ))}
    </div>
  );
}

ProductsCatalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      mainImageUrl: PropTypes.string.isRequired,
      thumbImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductsCatalog;
