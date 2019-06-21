import React, { Component } from 'react';
import DealsLayout from '../components/DealsLayout';
import DealsForm from '../components/DealsForm';
import axios from 'axios';
import qs from 'query-string';
import { withRouter } from 'react-router-dom';

class Deals extends Component {
	state = {
		listingsData: '',
		toFilter: '',
		formsData: '',
		optionsData: '',
		city: 'all',
		home_type: 'all',
		min_price: 0,
		max_price: 2000000,
		min_area: 0,
		max_area: 9000,
		bedrooms: 1,
		bathrooms: 1,
		submit: false
	};

	componentDidMount() {
		const self = this;
		axios
			.get('/api/listings/')
			.then(function(response) {
				self.setState(
					{
						listingsData: response.data,
						toFilter: response.data
					},
					() => {
						self.populateForms();
						console.log(self.state.listingsData);
					}
				);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			})
			.finally(function() {
				// always executed
			});
	}

	// get data to populate forms
	populateForms = () => {
		//variable access the options depending on the params
		let data = this.state.listingsData;

		let cities = data.map(item => {
			return item.city;
		});

		cities = new Set(cities);
		cities = [...cities];
		cities = cities.sort();

		let homeType = data.map(item => {
			return item.type;
		});

		homeType = new Set(homeType);
		homeType = [...homeType];
		homeType = homeType.sort();

		let bedrooms = data.map(item => {
			return item.rooms;
		});

		bedrooms = new Set(bedrooms);
		bedrooms = [...bedrooms];
		bedrooms = bedrooms.sort();

		let bathrooms = data.map(item => {
			return item.bathrooms;
		});

		bathrooms = new Set(bathrooms);
		bathrooms = [...bathrooms];
		bathrooms = bathrooms.sort();

		this.setState({
			formsData: {
				cities,
				homeType,
				bedrooms,
				bathrooms
			}
		});
	};

	// render hometypes from data

	homes = () => {
		if (this.state.formsData.homeType != undefined) {
			let { homeType } = this.state.formsData;

			return homeType.map((item, i) => {
				return (
					<option key={i} value={item}>
						{item}
					</option>
				);
			});
		}
	};
	// render cities from data
	cities = () => {
		if (this.state.formsData.cities != undefined) {
			let { cities } = this.state.formsData;

			return cities.map((item, i) => {
				return (
					<option key={i} value={item}>
						{item}
					</option>
				);
			});
		}
	};

	// render bedroms from data
	rooms = () => {
		if (this.state.formsData.bedrooms != undefined) {
			let { bedrooms } = this.state.formsData;

			return bedrooms.map((item, i) => {
				return (
					<option key={i} value={item}>
						{item} +
					</option>
				);
			});
		}
	};

	// render bathroms from data
	bathrooms = () => {
		if (this.state.formsData.bathrooms != undefined) {
			let { bathrooms } = this.state.formsData;

			return bathrooms.map((item, i) => {
				return (
					<option key={i} value={item}>
						{item} +
					</option>
				);
			});
		}
	};

	// filter event handler
	change = event => {
		let name = event.target.name;
		let value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
			}
		);
	};

	submitFilters = e => {
		e.preventDefault();
		const self = this;
		// variable to produce a change on the state when the data is submitted
		let submit = self.state.submit;

		const { match, location, history } = self.props;

		const {
			min_price,
			max_price,
			min_area,
			max_area,
			home_type,
			city,
			bedrooms,
			bathrooms
		} = self.state;

		history.push(
			`/listings/?min_price=${min_price}&max_price=${max_price}&min_area=${min_area}&max_area=${max_area}&home_type=${home_type}&city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`
		);

		self.setState({
			submit: !submit
		});
	};

	render() {
		return (
			<DealsLayout>
				<DealsForm
					homes={this.homes}
					cities={this.cities}
					rooms={this.rooms}
					bathrooms={this.bathrooms}
					change={this.change}
					globalState={this.state}
					submitFilters={this.submitFilters}
				/>
			</DealsLayout>
		);
	}
}

export default withRouter(Deals);
