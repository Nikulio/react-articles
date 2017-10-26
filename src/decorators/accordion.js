import React, {Component} from 'react'

export default (OriginalComponent) => class Accordion extends Component {

	constructor(props) {
		super(props);
		this.state = {
			openItemId: props.defaultOpenId,
		};
	}


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