var React = require('react');

var RepoItem = React.createClass({
  propTypes: {
    repo: React.PropTypes.object.isRequired
  },
  render: function () {
    var repo = this.props.repo;
    var owner = repo.owner;
    return (
      <div className="well well-small media">
        <div className="media-body">
          <h4>
            <a href={repo.html_url} className="media-heading">{repo.full_name}</a>
            <span className="pull-right">{repo.stargazers_count} stars</span>
          </h4>
          {repo.description}
        </div>
      </div>
    );
  }
});

module.exports = RepoItem;
