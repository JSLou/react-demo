var React = require("react");
var main = document.getElementById("main");

var HelloMessage = React.createClass({
	render: function() {
		return (<div>Hello {this.props.name}</div>);
	}
});

var NameInput = React.createClass({
	change: function() {
		console.log("changed");
		this.props.onchange(this.refs.input.getDOMNode().value);
	},
	render: function() {
		return <input ref="input" onChange={this.change} />;
	}
});

var MyApp = React.createClass({
	getInitialState: function() {
		return {
			name: "World",
			names: []
		};
	},
	addName: function() {
		console.log("add");
		var names = this.state.names;
		names.push(this.state.name);
		this.setState({names: names});
	},
	change: function(val) {
		this.setState({name: val});
	},
	render: function() {
		var names = this.state.names.map(function(name) {
			return <li>{name}</li>;
		});
		return (<div>
			<HelloMessage name={this.state.name} />
			<NameInput onchange={this.change} />
			<button onClick={this.addName}> add</button>
			<ul>
				{names}
			</ul>
		</div>);
	}
});

React.render(<MyApp />, main);
