import React, { memo } from 'react';
import styles from './EmptySearch.module.scss';

function EmptySearch() {
  return (
    <div className={styles['empty-search']}>
      <div>No Pokémon was found :(</div>
    </div>
  );
}

export default memo(EmptySearch);
