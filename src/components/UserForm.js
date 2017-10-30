import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeUser} from '../AC'

class UserForm extends Component {


	handleUserChange = (ev) => {
		if (ev.target.value.length > 10) return;
		const {changeUser} = this.props;
		changeUser(ev.target.value);
	};


	render() {
		const {user} = this.props;
		return (
			<div>
				Name : <input type="text" value={user} onChange={this.handleUserChange}/>
			</div>
		);
	}

}


export default connect(state => ({
	user: state.user
}), {changeUser})(UserForm)
