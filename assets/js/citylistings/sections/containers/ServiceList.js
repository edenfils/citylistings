import React, { Component } from 'react';
import ServiceListLayout from '../components/ServiceListLayout';
import ServiceItem from '../components/ServiceItem';

class ServiceList extends Component {
	state = {};

	render() {
		return (
			<ServiceListLayout>
				<ServiceItem />
			</ServiceListLayout>
		);
	}
}

export default ServiceList;
