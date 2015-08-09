var types = require('../constants/ActionTypes');

function githubUrl(username) {
  return 'https://api.github.com/users/' + username + '/starred';
}

function searchSuccess(repos) {
  return {
    type: types.SEARCH_SUCCESS,
    repos: repos
  };
}

function searchForUser(username) {
  return function (dispatch) {
    dispatch({
      type: types.SEARCH_FOR_USER,
      username: username
    });
    fetch(githubUrl(username))
      .then(function (response) {
        if (response.ok) {
          return reponse.json();
        }
        else {
          dispatch(searchError());
        }
      }).then(function (data) {
        // Response was okay, handle it
        dispatch(searchSuccess(data));
        // TODO Error handling
      }).catch(function (error) {
        dispatch(searchError(error.message));
      });
  };
}

function searchError(message) {
  return {
    type: types.SEARCH_ERROR,
    message: message
  };
}

function clearList() {
  return {
    type: types.CLEAR_LIST
  };
}

module.exports = {
  searchSuccess: searchSuccess,
  searchForUser: searchForUser,
  searchError: searchError,
  clearList: clearList
};
