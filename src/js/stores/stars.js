var assign = require('object-assign');
var types = require('../constants/ActionTypes');

var initialState = {
  pending: false,
  errors: null,
  repos: []
};

module.exports = function stars(state, action) {
  state = state || initialState
  switch (action.type) {
    case types.SEARCH_FOR_USER:
      return {
        pending: true,
        errors: false,
        repos: [] 
      }

    case types.SEARCH_SUCCESS:
      return {
        pending: false,
        errors: state.errors,
        repos: action.repos
      }

    case types.SEARCH_ERROR:
      return {
        pending: false,
        errors: true,
        repos: state.repos
      }

      //case types.CLEAR_LIST:


    default:
      return state;
  }
}
