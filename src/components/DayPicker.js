import React, {Component} from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Picker extends Component {

	state = {
		from: null,
		to: null
	}

	handleDayClick = day => {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
	}

	handleResetClick = e => {
		e.preventDefault();
		this.setState({
			from: null,
			to: null
		})
	};

	render() {

		const {from, to} = this.state;
		return (
			<div className="rangeDates">
				{!from && !to && <p>Please select the <strong>first day</strong>.</p>}
				{from && !to && <p>Please select the <strong>last day</strong>.</p>}
				<DayPicker
					numberOfMonths={2}
					selectedDays={[from, {from, to}]}
					onDayClick={this.handleDayClick}
					fixedWeeks
				/>
				<div href="#"
				     className="btn btn-danger"
				     onClick={this.handleResetClick}>Reset days
				</div>
			</div>
		)
	}

}

export default Picker