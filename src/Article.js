import React, {Component} from 'react'
import Comments from './CommentList'

export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true,
		}
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};


	getBody = () => {
		if (!this.state.isOpen) return null;
		const {article} = this.props;
		return (
			<section className="text">
				{article.text}
				<Comments comments={article.comments}/>
			</section>
		)
	};

	render() {
		const {article} = this.props;
		const {isOpen} = this.state;
		return (
			<div>
				<h3 className="title">{article.title}</h3>
				<button onClick={this.toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}

			</div>
		)
	}
}