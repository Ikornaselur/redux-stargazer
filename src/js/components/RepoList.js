var React = require('react');
var RepoItem = require('./RepoItem');

var RepoList = React.createClass({
  propTypes: { 
    repos: React.PropTypes.array.isRequired,
    errors: React.PropTypes.bool
  },
  render: function () {
    if (this.props.errors) {
      return (
        <div className='alert alert-danger row'>
          Something went wrong. Does the user name actually exist on github?
        </div>
      );
    }
    var repos = this.props.repos.map(function (repo) {
      return <RepoItem key={repo.id} repo={repo} />;
    });

    return (
      <div className='row'>
        {repos}
      </div>
    );
  }
});

module.exports = RepoList;
