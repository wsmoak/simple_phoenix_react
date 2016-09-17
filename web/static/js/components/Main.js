var React = require('react');
var Books = require('./Books');

var Main = React.createClass({
  render: function () {
    return (
      <div><Books /></div>
    )
  }
});

module.exports = Main;
