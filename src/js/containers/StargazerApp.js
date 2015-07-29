var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var Connector = require('react-redux').Connector;
//var Header = require('../components/Header');
//var MainSection = require('../components/MainSection');
//var TodoActions = require('../actions/TodoActions');

var StargazerApp = React.createClass({
  render: function() {

    return (
      <h1>Hello, world!</h1>
    )
    /*
    return (
      <Connector select={function(state) { return {todos: state.todos} }}>
        {this.renderChild}
      </Connector>
      );*/
  },

  renderChild: function(state) {
    var actions = bindActionCreators(TodoActions, state.dispatch);
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={state.todos} actions={actions} />
      </div>
    );
  }
});

module.exports = StargazerApp;
