/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
// import { getFormValues } from 'redux-form';

const selectHomeForm = (state) => {
    state.get('form');
}

export {
  selectHomeForm,
};
