var React = require('react');
var StargazerApp = require('./StargazerApp');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var stores = require('../stores');

console.log(stores);
var redux = createStore(stores.stars);

var App = React.createClass({
  render: function() {
    return (
      <Provider redux={redux}>
        {function() { return <StargazerApp />; }}
      </Provider>
    );
  }
});

module.exports = App;
