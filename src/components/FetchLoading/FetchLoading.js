import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './FetchLoading.module.scss';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '20px',
  },
  circle: {
    color: process.env.STORE.colorDark,
  },
}));

function FetchLoading() {
  const classes = useStyles();

  return (
    <div className={styles['fetch-loading']}>
      <p>Capturing the Pokémon, please wait...</p>

      <CircularProgress
        className={[classes.root, classes.circle]}
        color="secondary"
      />
    </div>
  );
}

export default memo(FetchLoading);
