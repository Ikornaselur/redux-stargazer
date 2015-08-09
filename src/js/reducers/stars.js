var types = require('../constants/ActionTypes');

var initialState = {
  pending: false,
  error: null,
  repos: []
};

module.exports = function stars(state, action) {
  state = state || initialState;
  switch (action.type) {
    case types.SEARCH_FOR_USER:
      return {
        pending: true,
        error: null,
        repos: [] 
      };

    case types.SEARCH_SUCCESS:
      return {
        pending: false,
        error: state.error,
        repos: action.repos
      };

    case types.SEARCH_ERROR:
      return {
        pending: false,
        error: action.message,
        repos: state.repos
      };

      //case types.CLEAR_LIST:


    default:
      return state;
  }
};
