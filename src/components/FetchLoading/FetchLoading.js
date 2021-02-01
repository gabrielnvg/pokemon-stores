import React, { memo } from 'react';
import styles from './FetchLoading.module.scss';

function FetchLoading() {
  return (
    <div className={styles['fetch-loading']}>
      Capturing the Pokémon, please wait...
    </div>
  );
}

export default memo(FetchLoading);
