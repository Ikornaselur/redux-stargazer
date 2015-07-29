var React = require('react');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var combineReducers = require('redux').combineReducers;
var applyMiddleware = require('redux').applyMiddleware;
var thunk = require('redux-thunk');

var StargazerApp = require('./StargazerApp');
var reducers = require('../reducers');


var reducer = combineReducers(reducers);
var createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
var store = createStoreWithMiddleware(reducer);

var App = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {function() { return <StargazerApp />; }}
      </Provider>
    );
  }
});

module.exports = App;
