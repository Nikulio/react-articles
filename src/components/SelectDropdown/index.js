import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import './index.css'

class SelectDropdown extends Component {
	propTypes = {};
	defaultProps = {};

	state = {
		selection: null,
	};

	changeSelection = (selection) => {
		this.setState({selection})
	};


	render() {
		//TODO: Fix options
		const {articles} = this.props;
		const options = articles.map(article => ({
			label: article.title,
			value: article.id
		}));
		return (
			<div>
				<Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
			</div>
		);
	}
}


export default connect(state => ({
	articles: state.articles
}))(SelectDropdown)

