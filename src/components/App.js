import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'

import UserForm from './UserForm'
import DayPicker from './DayPicker'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import Counter from './Counter'

class App extends Component {
	static propTypes = {
		articles: PropTypes.array
	};

	state = {
		selection: null,

	};

	changeSelection = (selection) => {
		this.setState({selection})
	};

	render() {
		const {handleDayClick} = this.props;
		const {from, to} = this.state
		//TODO: Fix options
		// const options = this.props.articles.map(article => ({
		// 	label: article.title,
		// 	value: article.id
		// }));

		return (
			<div className="ml-auto col-10">
				<Counter/>
				<UserForm/>
				<DayPicker/>
				{/*<Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>*/}
				<ArticleList/>
			</div>
		)
	}
}

export default App
