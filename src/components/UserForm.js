import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {

	propTypes = {}

	state = {
		username: ''
	}

	handleUserChange = (ev) => {
		this.setState({
			username: ev.target.value
		})
	}

	render() {
		return (
			<div>
				Name : <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
			</div>
		);
	}


}


export default UserForm;
