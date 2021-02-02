import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { setIsDrawerOpen } from '../../redux/modules/shoppingCart';

import NavBar from './NavBar/NavBar';
import ScrollTop from './ScrollTop/ScrollTop';
import ShoppingCartDrawer from './ShoppingCartDrawer/ShoppingCartDrawer';

function MainContainer(props) {
  const { children } = props;
  const dispatch = useDispatch();

  const toggleShoppingCartDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    dispatch(setIsDrawerOpen(isOpen));
  };

  return (
    <>
      <CssBaseline />
      <NavBar toggleShoppingCartDrawer={toggleShoppingCartDrawer} />
      <Toolbar id="back-to-top-anchor" />

      <Container>
        <Box my={2}>{children}</Box>
      </Container>

      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          style={{ backgroundColor: process.env.STORE.colorLight }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <ShoppingCartDrawer
        toggleShoppingCartDrawer={toggleShoppingCartDrawer}
      />
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default MainContainer;
