const types = {
  SET_DIALOG_STATE: 'purchaseConfirmarionDialog/SET_CATALOG_PRODUCTS',
};

const initialState = {
  isOpen: false,
  title: '',
  body: '',
  confirmButtonText: 'Ok',
  hasCancelButton: false,
  cancelButtonText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DIALOG_STATE:
      return action.dialogState;
    default:
      return state;
  }
};

export const setDialogState = (dialogState) => ({
  type: types.SET_DIALOG_STATE,
  dialogState,
});

export const openDialog = () => (dispatch, getState) => {
  dispatch(
    setDialogState({
      ...getState().purchaseConfirmationDialog,
      isOpen: true,
    }),
  );
};

export const closeDialog = () => (dispatch, getState) => {
  dispatch(
    setDialogState({
      ...getState().purchaseConfirmationDialog,
      isOpen: false,
    }),
  );
};

export const changeDialogBody = (body) => (dispatch, getState) => {
  dispatch(
    setDialogState({
      ...getState().purchaseConfirmationDialog,
      body,
    }),
  );
};

export default reducer;
