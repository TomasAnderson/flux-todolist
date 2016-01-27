var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react.js');

var Header = React.createClass({

	render: function() {
		return ( 
			<header id="header">
				<h1>todos</h1> 
				<TodoTextInput
					id="new-todo"
					placeholder="what is you focus today?"
					onSave={this._onSave}	
				/>
			</header>
		);
	},

	_onSave: function (text) {
		if (text.trim()) {
			TodoActions.create(text);
		}
	}


});


module.exports = Header;