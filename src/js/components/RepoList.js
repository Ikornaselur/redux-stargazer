var React = require('react');
var RepoItem = require('./RepoItem');

var RepoList = React.createClass({
  propTypes: { 
    repos: React.PropTypes.array.isRequired,
    error: React.PropTypes.string
  },
  render: function () {
    if (this.props.error) {
      return (
        <div className='alert alert-danger row'>
          An error has occured: {this.props.error}
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
