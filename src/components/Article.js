import React, {Component} from 'react'
import Comments from './CommentList'
import PropTypes from 'prop-types'

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

	componentWillReceiveProps(nextProps) {
		console.log(this.props.isOpen, nextProps.isOpen)
	}

	componentWillMount() {
		// debugger
	}


	render() {
		const {article, isOpen, toggleOpen} = this.props;
		return (
			<div ref={this.setContRef}>
				<h3 className="title">{article.title}</h3>
				<button onClick={toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}

			</div>
		)
	}

	setContRef = (ref) => {
		this.container = ref;
		console.log(ref)
	};

	componentDidMount() {
		// debugger
	}

}

export default Article