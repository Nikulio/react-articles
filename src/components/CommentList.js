import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function getBody({comments, isOpen}) {
	if (!isOpen) return null;

	if (!comments.length) return <p>no comments yet</p>;
	return (
		<ul>
			{comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
		</ul>
	)
};

function CommentList({comments = [], isOpen, toggleOpen}) {
	const text = isOpen ? 'hide comments' : 'show comments';
	return (
		<div className="comments">
			<button onClick={toggleOpen}>{text}</button>
			{getBody({comments, isOpen})}
		</div>
	)
}


export default toggleOpen(CommentList)