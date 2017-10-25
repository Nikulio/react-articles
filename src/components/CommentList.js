import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
	static defaultProps = {
		comments: []
	};

	getBody = () => {
		const {comments, isOpen} = this.props;
		if (!isOpen) return null;

		if (!comments.length) return <p>no comments yet</p>;
		return (
			<ul>
				{comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
			</ul>
		)
	};

	render() {
		const {isOpen, toggleOpen} = this.props
		const text = isOpen ? 'hide comments' : 'show comments';
		return (
			<div className="comments">
				<button onClick={toggleOpen}>{text}</button>
				{this.getBody()}
			</div>
		)
	}
}

export default toggleOpen(CommentList)