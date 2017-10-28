import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'

const limits = {
	user: {
		min: 5,
		max: 15
	},
	text: {
		min: 20,
		max: 50
	}
}

class AddComment extends Component {

	state = {
		user: '',
		text: ''
	}

	handleChange = type => ev => {
		const {value} = ev.target;
		console.log(value < limits[type].max);
		console.log(limits[type].max)
		if (value.length > limits[type].max) return;
		this.setState({
			[type]: value
		})
	}


	getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? 'error' : '';


	render() {
		return (
			<div className="form">
				<input
					type="text"
					value={this.state.user}
					onChange={this.handleChange('user')}
					className={this.getClassName('user')}
				/>
				<textarea
					type="text"
					value={this.state.text}
					onChange={this.handleChange('text')}
					className={this.getClassName('text')}
				/>
			</div>
		)
	}
}


export default AddComment;
