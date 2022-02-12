import * as constants from './../actions/ActionTypes';

const formVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case constants.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
};

export default formVisibleReducer;