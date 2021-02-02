import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import styles from './ProductsCatalog.module.scss';

import ProductCard from './ProductCard/ProductCard';

function ProductsCatalog({ products }) {
  return (
    <div className={styles['products-catalog']}>
      {products.map((product, i) => (
        <div key={`product-${i + 1}`} className={styles['products-cards']}>
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
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      mainImageUrl: PropTypes.string.isRequired,
      thumbImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductsCatalog;
