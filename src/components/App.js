import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker from './DayPicker'

class App extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	};

	state = {
		selection: null,

	};

	changeSelection = (selection) => {
		this.setState({selection})
	};

	render() {
		const {articles, handleDayClick} = this.props;
		const {from, to} = this.state
		const options = this.props.articles.map(article => ({
			label: article.title,
			value: article.id
		}));

		return (
			<div className="ml-auto col-10">
				<UserForm/>
				<DayPicker/>
				<Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
				<ArticleList articles={articles} defaultOpenId={articles[0].id}/>
			</div>
		)
	}
}

export default App
