import React, { Component } from 'react';
import ServiceLayout from '../components/ServicesLayout';
import ServiceHeader from '../components/ServiceHeader';
import ServiceList from '../components/ServiceList';

class Services extends Component {
	state = {};

	render() {
		return (
			<ServiceLayout>
				<ServiceHeader />
				<ServiceList />
			</ServiceLayout>
		);
	}
}

export default Services;
