var Header = require('./Header.react');
var MainSection = require('./TodoMainSection.react');
var Footer = require('./Footer.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

function getTodoState () {
	return {
		allTodos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete()
	};
}

var TodoApp = React.createClass({

	getInitialState: function() {
		return getTodoState();
	},
 
	componentDidMount: function() { 
		TodoStore.addChangeListner(this._onChange);
	},

	componentWillUnmount: function() {
		TodoStore.removeChangeListner(this._onChange);
	},

	_onChange: function () {
		this.setState(getTodoState());
	},

	render: function () {
		return (
			<div>
				<Header />
       			<MainSection
          			allTodos={this.state.allTodos}
          			areAllComplete={this.state.areAllComplete}
        		/>
				<Footer allTodos={this.state.allTodos} />
			</div>
		);
	}

});

module.exports = TodoApp;