var React = require('react');
var Chapter = require('./Chapter');

var Chapters = React.createClass({
  render: function () {
    var chapters = this.props.data;
    return (
      <span>
      {chapters.map(function(chapter) {
          return ( <Chapter key={chapter.id} data={chapter} /> );
        })}
      </span>
    );
  }
});

module.exports = Chapters;
