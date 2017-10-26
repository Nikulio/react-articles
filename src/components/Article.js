import React, {Component, PureComponent} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import {CSSTransitionGroup} from 'react-transition-group'
import './Article.css'

class Article extends PureComponent {

	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		})
	};

	state = {
		updateIndex: 0
	};

	getBody = () => {
		const {article, isOpen} = this.props;
		if (!isOpen) return null;
		return (
			<section className="text">
				{article.text}
				<button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>Push me</button>
				<CommentList comments={article.comments} ref={this.setCommentRef} key={this.state.updateIndex}/>
			</section>
		)
	};

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.isOpen  !== this.props.isOpen;
	// }

	render() {
		const {article, isOpen, toggleOpen} = this.props;
		console.log('update article')
		return (
			<div ref={this.setContRef}>
				<h3 className="title">{article.title}</h3>
				<button onClick={toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				<CSSTransitionGroup
					transitionName='article'
					transitionAppear
					transitionEnterTimeout={300}
					transitionAppearTimeout={500}
					transitionLeaveTimeout={500}
					component = 'div'

				>
					{this.getBody()}
				</CSSTransitionGroup>

			</div>
		)
	}

	setContRef = (ref) => {
		// this.container = ref;
		// console.log(ref)
	};

	setCommentRef = (ref) => {
		// console.log(ref)
	};

}

export default Article