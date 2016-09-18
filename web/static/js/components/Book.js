var React = require('react');

var Book = React.createClass({
  render: function (data) {
    var book = this.props.data;
    return (
      <li> {book.title} </li>
    );
  }
});

module.exports = Book;
