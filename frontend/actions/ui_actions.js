export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';
export const RECEIVE_MODAL_WITH_RECIPE = 'RECEIVE_MODAL_WITH_RECIPE';

export const receiveModal = (component) => (
  {
    type: RECEIVE_MODAL,
    component,
  }
);

export const receiveModalWithRecipe = (component, recipe) => (
  {
    type: RECEIVE_MODAL_WITH_RECIPE,
    recipe,
    component,
  }
);

export const removeModal = () => (
    {
      type: REMOVE_MODAL,
    }
);
