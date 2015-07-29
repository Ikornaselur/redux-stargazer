var React = require('react');
var StargazerApp = require('./StargazerApp');
var createStore = require('redux').createStore;
var combineReducers = require('redux').combineReducers;
var Provider = require('react-redux').Provider;
var stores = require('../stores');

var reducer = combineReducers(stores);
var store = createStore(reducer);

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
