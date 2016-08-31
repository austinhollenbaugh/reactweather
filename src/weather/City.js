import React from 'react';
import axios from 'axios';

export default React.createClass({
	getInitialState() {
		return {
			temp: null
		}
	},
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.temp !== nextState.temp;
	},
	componentWillMount() {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65`)
			.then(result => {
				this.setState({
					temp: result.data.main.temp
				});
			})
	},
	render() {
		console.log("render", this.props.city);
		return (
			<div>
				<h3>{this.props.city}</h3>
				{this.state.temp && <h4>{this.state.temp}&deg; F</h4>}
			</div>
		)
	}
});
