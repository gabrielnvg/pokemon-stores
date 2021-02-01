import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsCatalog.module.scss';

function ProductsCatalog({ products }) {
  return (
    <div className={styles['products-catalog']}>
      <p>{products[0].name}</p>
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
