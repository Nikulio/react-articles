import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter'
import UserForm from "../UserForm";
import DayPicker from '../DayPicker'
import Select from '../SelectDropdown'

class TopFilters extends Component {

	render() {
		return (
			<div className="top-filters">
				<Counter/>
				<UserForm/>
				<DayPicker/>
				<Select/>
			</div>
		);
	}
}


export default TopFilters;
