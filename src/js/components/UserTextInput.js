var React = require('react');
var PropTypes = React.PropTypes;

var UserTextInput = React.createClass({
  propTypes: {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string
  },

  getInitialState: function() {
    return {
      text: this.props.text || ''
    };
  },

  handleSubmit: function(e) {
    var text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
    }
  },

  handleChange: function(e) {
    this.setState({ text: e.target.value });
  },

  render: function() {
    var disabled = this.props.pending && 'disabled' || '';
    return (
      <input type='text'
             className='form-control'
             placeholder={this.props.placeholder}
             autoFocus='true'
             value={this.state.text}
             onChange={this.handleChange}
             onKeyDown={this.handleSubmit}
             disabled={disabled} />
    );
  }
});

module.exports = UserTextInput;
