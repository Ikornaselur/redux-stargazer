var React = require('react');

var RepoList = React.createClass({
  propTypes: { 
    repos: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <ul>
        {this.props.repos.map(function (repo) {
          return <li key={repo.id}>{repo.name}</li>;
        })}
      </ul>
    )
  }
});

module.exports = RepoList;
