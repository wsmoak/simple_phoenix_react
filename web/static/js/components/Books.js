var React = require('react');
var Book = require('./Book');

var DATA = [
  {
    id: 1,
    title:
    "Learning React",
    chapters: [
      {id: 1, title: "Chapter 1", done: true},
      {id: 2, title: "Chapter 2", done: false}
    ]
  },
  {
    id: 2,
    title: "Elm in Action",
    chapters: [
      {id: 1, title: "Chapter 1", done: true},
      {id: 2, title: "Chapter 2", done: false}
    ]
  },
  {
    id: 3,
    title: "Programming Elixir",
    chapters: [
      {id: 1, title: "Chapter 1", done: true},
      {id: 2, title: "Chapter 2", done: false}
    ]
  },
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
