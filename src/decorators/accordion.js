import React, {Component} from 'react'

export default (OriginalComponent) => class Accordion extends Component {

	state = {
		openItemId: null,
		//TODO : Another state for Comments component.
		comments : null
	};

	toggleOpenItem = openItemId => ev => {
		this.setState({
			openItemId: openItemId === this.state.openItemId ? null : openItemId
		})
	};

	render() {
		return (
			<OriginalComponent {...this.state} {...this.props}
			                   toggleOpenItem={this.toggleOpenItem}/>
		)
	}
	
}