var types = require('../constants/ActionTypes');

module.exports.searchForUser = function searchForUser(username) {
  return {
    type: types.SEARCH_PENDING,
    username: username
  };
}

module.exports.searchSuccess = function searchSuccess() {
  return {
    type: types.SEARCH_SUCCESS
  };
}

module.exports.searchError = function searchError() {
  return {
    type: types.SEARCH_ERROR
  };
}

module.exports.clearList = function clearList() {
  return {
    type: types.CLEAR_LIST
  };
}
