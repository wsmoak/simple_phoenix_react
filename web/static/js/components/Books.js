var React = require('react');
var Book = require('./Book');

var DATA = [
  {id: 1, title: "Learning React"},
  {id: 2, title: "Elm in Action"},
  {id: 3, title: "Programming Elixir"},
]

var Books = React.createClass({
  getInitialState: function () {
    return { books: DATA }
  },
  render: function () {
    return (
      <ul>
        {this.state.books.map(function(book) {
          return ( <Book key={book.id} data={book} /> );
        })}
      </ul>
    );
  }
});

module.exports = Books;
