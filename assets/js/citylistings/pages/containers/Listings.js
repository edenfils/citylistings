import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Title from '../../sections/containers/Title';
import ListingsLayout from '../components/ListingsLayout';
import MainLayout from '../components/MainLayout';
import View from '../components/View';
import GridList from '../components/GridList';
import Property from '../components/Property';
import Pagination from '../components/Pagination';
import SidebarLayout from '../components/SidebarLayout';
import Search from '../../widgets/components/Search';
import Filter from '../../widgets/components/Filter';
import TopAgents from '../../widgets/components/TopAgents';
import Enquiry from '../../sections/containers/Enquiry';

class Listings extends Component {
	state = {
		listingsData: '',
		formsData: '',
		city: 'all',
		home_type: 'all',
		min_price: 0,
		max_price: 2000000,
		min_area: 0,
		max_area: 9000
	};

	// get data to populate forms
	populateForms = () => {
		let cities = this.state.listingsData.map(item => {
			return item.city;
		});

		cities = new Set(cities);
		cities = [...cities];
		cities = cities.sort();

		let homeType = this.state.listingsData.map(item => {
			return item.type;
		});

		homeType = new Set(homeType);
		homeType = [...homeType];
		homeType = homeType.sort();

		let bedrooms = this.state.listingsData.map(item => {
			return item.rooms;
		});

		bedrooms = new Set(bedrooms);
		bedrooms = [...bedrooms];
		bedrooms = bedrooms.sort();

		let bathrooms = this.state.listingsData.map(item => {
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

	componentDidMount() {
		const self = this;
		axios
			.get('/api/listings')
			.then(function(response) {
				self.setState(
					{
						listingsData: response.data
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

	submitFilters = () => {
		const self = this;
		const { match, location, history } = this.props
		const { min_price, max_price, min_area, max_area, home_type, city, bedrooms, bathrooms, }
		history.push(
			`/listings/?min_price=${min_price}&max_price=${max_price}&min_area=${min_area}&max_area=${max_area}&home_type=${home_type}&city=${city}&bedrooms=${bedrooms}&bathdrooms=${bathrooms}`
		)
	}

	render() {
		return (
			<Fragment>
				<Title />
				<ListingsLayout>
					<MainLayout>
						<View />
						<GridList>
							<Property listingsData={this.state.listingsData} />
							<Pagination />
						</GridList>
					</MainLayout>

					<SidebarLayout>
						<Search />
						<Filter
							homes={this.homes}
							cities={this.cities}
							rooms={this.rooms}
							bathrooms={this.bathrooms}
							change={this.change}
							globalState={this.state}
						/>
						<TopAgents />
					</SidebarLayout>
				</ListingsLayout>
				<Enquiry />
			</Fragment>
		);
	}
}

export default Listings;
