var React = require('react');

var Chapter = React.createClass({
  render: function () {
    console.log(this.props.data);
    var chapter = this.props.data;
    return (
        <span>{chapter.title}</span>
    );
  }
});

module.exports = Chapter;
