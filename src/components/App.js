import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import TopFilters from './TopFilters'


class App extends Component {
	static propTypes = {};

	render() {

		return (
			<div className="ml-auto col-10">
				<TopFilters/>
				<ArticleList/>
			</div>
		)
	}
}

export default App
