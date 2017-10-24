import React, {Component} from 'react'

export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		}
		// this.toggleOpen = this.toggleOpen.bind(this) - alternative to arrow bind
	}

	toggleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	getBody = () => {
		if (!this.state.isOpen) return null;
		const {article} = this.props;
		return <section className="text">{article.text}</section>

	};

	render() {
		const {article} = this.props;
		const {isOpen} = this.state;
		return (
			<div>
				<h3 className="title">{article.title}</h3>
				<button onClick={this.toggleOpen}>
					{isOpen ? 'close':'open'}
				</button>
				{this.getBody()}
			</div>
		)
	}
}