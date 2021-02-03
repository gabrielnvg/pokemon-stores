import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogContainer({
  dialogState,
  handleCloseDialog,
  handleCancelButtonClick = handleCloseDialog,
  handleConfirmButtonClick = handleCloseDialog,
}) {
  return (
    <Dialog
      open={dialogState.isOpen}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogState.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogState.body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {dialogState.hasCancelButton && (
          <Button
            onClick={handleCancelButtonClick}
            color="secondary"
          >
            {dialogState.cancelButtonText}
          </Button>
        )}

        <Button
          onClick={handleConfirmButtonClick}
          color="primary"
          autoFocus
        >
          {dialogState.confirmButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogContainer.propTypes = {
  dialogState: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.oneOf([PropTypes.element, PropTypes.string]).isRequired,
    confirmButtonText: PropTypes.string.isRequired,
    hasCancelButton: PropTypes.bool,
    cancelButtonText: PropTypes.string,
  }).isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  handleCancelButtonClick: PropTypes.func,
  handleConfirmButtonClick: PropTypes.func,
};

export default DialogContainer;
