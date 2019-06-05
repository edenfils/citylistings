import React, { Component } from 'react';
import DealsLayout from '../components/DealsLayout';
import DealsDesc from '../components/DealsDesc';
import DealsForm from '../components/DealsForm';

class Deals extends Component {
	state = {};

	render() {
		return (
			<DealsLayout>
				<DealsDesc />
				<DealsForm />
			</DealsLayout>
		);
	}
}

export default Deals;
