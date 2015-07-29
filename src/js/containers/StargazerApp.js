var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var Connector = require('react-redux').Connector;
var UserTextInput = require('../components/UserTextInput');
var RepoList = require('../components/RepoList');
var Header = require('../components/Header');
var StarActions = require('../actions/StarActions');

var StargazerApp = React.createClass({
  render: function() {
    var select = function (state) {
      return {stars: state.stars};
    }
    return (
      <Connector select={select}>
        {this.renderChild}
      </Connector>
      );
  },

  renderChild: function(state) {
    var actions = bindActionCreators(StarActions, state.dispatch);
    return (
      <div>
        <Header searchForUser={actions.searchForUser} />
      </div>
    );
  }
});

module.exports = StargazerApp;
