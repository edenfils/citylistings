import React, { Component } from 'react';
import ServiceLayout from '../components/ServicesLayout';
import ServiceHeader from '../components/ServiceHeader';
import ServiceList from '../components/ServiceList';
import Loader from '../../widgets/components/Loader';
import axios from 'axios';

class Services extends Component {
	state = {
		servicesData: null
	};

	componentDidMount() {
		this.getServices();
	}

	getServices = () => {
		const self = this;
		axios
			.get('/api/services/')
			.then(function(response) {
				self.setState({
					servicesData: response.data
				});
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
	render() {
		return (
			<ServiceLayout>
				<ServiceHeader />
				{this.state.servicesData !== null ? (
					<ServiceList services={this.state.servicesData} />
				) : (
					<Loader />
				)}
			</ServiceLayout>
		);
	}
}

export default Services;
