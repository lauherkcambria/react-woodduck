var React = require('react');
var ReactDOM = require('react-dom');
var Test = require('react-woodduck');

export default class App extends React.Component {
	render () {
		return (
			<div>
				<Test />
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('app'));
