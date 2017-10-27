import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AddCommentStyle.css'


class AddComment extends Component {
	propTypes = {};
	defaultProps = {};

	state = {
		username: '',
		usernameError: false,
		textError: false,
		text: ''
	};

	handelLoginChange = ev => {


		if (ev.target.value.length < 5 || ev.target.value.length > 15) {
			this.setState({
				usernameError: true
			})
		}
		else {
			this.setState({
				usernameError: false
			})
		}
		this.setState({
			username: ev.target.value
		})
	}

	handelCommentChange = ev => {
		if (ev.target.value.length < 20 || ev.target.value.length > 50) {
			this.setState({
				textError: true
			})
		}
		else {
			this.setState({
				textError: false
			})
		}
		this.setState({
			text: ev.target.value
		})
	}


	render() {
		const namePlaceholder = 'Type your name';
		const textPlaceholder = 'Type your comment';
		return (
			<div className="addComment">
				<div className="userName">
					<input type="text" className={this.state.usernameError ? 'error' : ''} placeholder={namePlaceholder}
					       onChange={this.handelLoginChange} value={this.state.username}/>
				</div>
				<div className="userText">
					<textarea type="text" className={this.state.textError ? 'error' : ''} placeholder={textPlaceholder}
					       onChange={this.handelCommentChange} value={this.state.text}/>
				</div>
				<div className="submit">
					<a className="btn btn-success" href="#">Submit</a>
				</div>
			</div>
		);
	}
}


export default AddComment;
