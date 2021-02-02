import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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
  fullList: {
    width: 'auto',
  },
}));

function ShoppingCartDrawer({ state, toggleShoppingCartDrawer }) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleShoppingCartDrawer(anchor, false)}
      onKeyDown={toggleShoppingCartDrawer(anchor, false)}
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
  );

  return (
    <Drawer
      anchor="right"
      open={state.right}
      onClose={toggleShoppingCartDrawer('right', false)}
    >
      {list('right')}
    </Drawer>
  );
}

ShoppingCartDrawer.propTypes = {
  state: PropTypes.shape({
    right: PropTypes.bool.isRequired,
  }).isRequired,
  toggleShoppingCartDrawer: PropTypes.func.isRequired,
};

export default ShoppingCartDrawer;
