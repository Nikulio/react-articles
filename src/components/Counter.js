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
		const {increment} = this.props
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


function mapStateToProps(state) {
	return {
		counter: state.count
	}

}

const mapToDispatch = {increment};

const decorator = connect(mapStateToProps, mapToDispatch);

export default decorator(Counter);
