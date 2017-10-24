import React, {Component} from 'react'

export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true,
			isCommentsOpen: true
		}
		// this.toggleOpen = this.toggleOpen.bind(this) - alternative to arrow bind
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	toggleCommentsOpen = () => {
		this.setState({
			isCommentsOpen: !this.state.isCommentsOpen
		})
	};

	getBody = () => {
		if (!this.state.isOpen) return null;
		const {article} = this.props;
		return <section className="text">{article.text}</section>

	};

	getComments = () => {
		if (!this.state.isCommentsOpen) return null;
		const {article} = this.props;
		const test = ['asdsadasdas', 'asdsdasdasdasd', 'asdsadsdasdasd']
		const comments = test.map(
			(item) => <li>{item}</li>
		);
		return (
			<section className="comments">
				<ul>
					{comments}
				</ul>
			</section>
		)
	};

	render() {
		const {article} = this.props;
		const {isOpen} = this.state;
		const {isCommentsOpen} = this.state;
		return (
			<div>
				<h3 className="title">{article.title}</h3>
				<button onClick={this.toggleOpen}>
					{isOpen.isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}
				<button onClick={this.toggleCommentsOpen}>{isCommentsOpen.isCommentsOpen ? 'close' : 'open'}</button>
				{this.getComments()}
			</div>
		)
	}
}