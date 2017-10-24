import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
	static defaultProps = {
		comments : []
	}
	state = {
		isOpen: false,
	};
	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};
	getBody = () => {
		if (!this.state.isOpen) return null;
		const {comments} = this.props;
		if (!comments.length) return <p>no comments yet</p>;
		return (
			<ul>
				{comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
			</ul>
		)
	};

	render() {
		const text = this.state.isOpen ? 'hide comments' : 'show comments';
		return (
			<div className="comments">
				<button onClick={this.toggleOpen}>{text}</button>
				{this.getBody()}
			</div>
		)
	}
}

export default CommentList