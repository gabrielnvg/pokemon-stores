import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';

function ProductCard({ product }) {
  return (
    <div className={styles['product-card']}>
      <img src={product.mainImageUrl} alt={product.name} />
      <div className={styles['product-name']}>{product.name}</div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mainImageUrl: PropTypes.string.isRequired,
    thumbImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
