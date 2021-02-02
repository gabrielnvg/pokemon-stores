import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  },
}));

function ShoppingCartDrawer({ toggleShoppingCartDrawer }) {
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  const { isDrawerOpen } = shoppingCartState;
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={toggleShoppingCartDrawer(false)}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleShoppingCartDrawer(false)}
        onKeyDown={toggleShoppingCartDrawer(false)}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

ShoppingCartDrawer.propTypes = {
  toggleShoppingCartDrawer: PropTypes.func.isRequired,
};

export default ShoppingCartDrawer;
