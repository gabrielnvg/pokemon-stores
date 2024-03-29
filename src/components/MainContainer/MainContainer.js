import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import NavBar from './NavBar/NavBar';
import ScrollTop from './ScrollTop/ScrollTop';
import ShoppingCartDrawer from './ShoppingCartDrawer/ShoppingCartDrawer';

const useStyles = makeStyles({
  childrenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function MainContainer(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Toolbar id="back-to-top-anchor" />

      <Container>
        <Box className={classes.childrenContainer} my={2}>
          {children}
        </Box>
      </Container>

      <ScrollTop>
        <Fab
          size="small"
          aria-label="scroll back to top"
          style={{ backgroundColor: process.env.STORE.colorLight }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <ShoppingCartDrawer />
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default MainContainer;
