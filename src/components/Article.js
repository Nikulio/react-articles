import React, {Component} from 'react'
import Comments from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		})
	};

	getBody = () => {
		const {article, isOpen} = this.props;
		if (!isOpen) return null;
		return (
			<section className="text">
				{article.text}
				<Comments comments={article.comments}/>
			</section>
		)
	};

	render() {
		const {article, isOpen, toggleOpen} = this.props;
		return (
			<div>
				<h3 className="title">{article.title}</h3>
				<button onClick={toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}

			</div>
		)
	}
}

export default toggleOpen(Article)