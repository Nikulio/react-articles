import {React, Component} from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
	static PropTypes = {};

	componentDidMount() {
		//d3 works with this.refs.chart
	}

	componentWillReceiveProps(nextProps) {
		//update chart for new articles
	}

	render() {
		return <div ref="chart"></div>
	}

	componentWillUnmount() {
		//cleanup
	}
}

export default ArticlesChart
