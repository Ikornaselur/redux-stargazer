var assign = require('object-assign');
var types = require('../constants/ActionTypes');

var initialState = [{
  text: 'Use Redux',
  marked: false,
  id: 0
}];

module.exports = function stars(state, action) {
  state = state || initialState
  switch (action.type) {
  default:
    return state;
  }
}
