var React = require("react");
var main = document.getElementById("main");

var HelloMessage = React.createClass({
	render: function() {
		return (<div>Hello World</div>);
	}
});

React.render(<HelloMessage />, main);
