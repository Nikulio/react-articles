import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from "../AC/index";


class Counter extends Component {
	static propTypes = {
		counter: PropTypes.number,
		increment: PropTypes.func.isRequired
	};

	handleIncrement = () => {
		const {increment} = this.props;
		increment();
	};

	render() {
		return (
			<h2>
				{this.props.counter}
				<button onClick={this.handleIncrement}>Increment me</button>
			</h2>
		);
	}
}


export default connect(state => ({
	counter: state.count
}), {increment})(Counter);
