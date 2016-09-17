var React = require('react');

var DATA = [
  {id: 1, title: "Learning React"},
  {id: 2, title: "Elm in Action"}
]

var Books = React.createClass({
  getInitialState: function () {
    console.log( 'getInitialState called' );
    return { books: DATA }
  },
  render: function () {
    console.log( 'render called' );
    console.log(this.state);
    return (
      <ul>
        {this.state.books.map(function(book) {
          return ( <li key={book.id}>{book.title}</li> )
        })}
      </ul>
    );
  }
});

module.exports = Books;
