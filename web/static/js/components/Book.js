var React = require('react');
var Chapters = require('./Chapters');

var Book = React.createClass({
  render: function () {
    var book = this.props.data;
    return (
      <li>
        {book.title}
        <Chapters data={book.chapters} />
      </li>
    );
  }
});

module.exports = Book;
