import React, { Fragment, Component } from 'react';
import axios from 'axios';
import qs from 'query-string';
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
		submit: false,
		view: 'grid',
		search: '',
		query: false
	};

	// get data to populate forms
	populateForms = () => {
		//variable access the options depending on the params
		let data;
		let queryParams = qs.parse(this.props.location.search);

		if (queryParams.min_price !== undefined) {
			data = this.state.optionsData;
		} else {
			data = this.state.listingsData;
		}

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

	componentDidMount() {
		const self = this;

		// get the query params from the search
		let queryParams = qs.parse(self.props.location.search);
		// check in the queryParams if the min_price is not undefined
		if (queryParams.min_price !== undefined) {
			// get the params as variables from the queryParams object
			const {
				min_price,
				max_price,
				min_area,
				max_area,
				home_type,
				city,
				bedrooms,
				bathrooms
			} = queryParams;
			// use axios to send the get request with the params
			axios
				.get(
					`/api/listings/?min_price=${min_price}&max_price=${max_price}&min_area=${min_area}&max_area=${max_area}&home_type=${home_type}&city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`
				)
				.then(function(response) {
					self.setState({
						listingsData: response.data,
						toFilter: response.data
					});

					return axios.get(`/api/listings/`);
				})
				.then(function(response) {
					self.setState(
						{
							optionsData: response.data
						},
						() => {
							self.populateForms();
							console.log(response.data);
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
		} else {
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
	}

	componentDidUpdate(prevProps, prevState) {
		const self = this;
		const { match, location, history } = self.props;
		let newData = self.state.listingsData;

		// check if the button to submit filters has been pressed
		if (self.state.submit !== prevState.submit) {
			// get the query params from the search
			let queryParams = qs.parse(self.props.location.search);
			console.log(queryParams);
			// check in the queryParams if the min_price is not undefined
			if (queryParams.min_price !== undefined) {
				// get the params as variables from the queryParams object
				const {
					min_price,
					max_price,
					min_area,
					max_area,
					home_type,
					city,
					bedrooms,
					bathrooms
				} = queryParams;
				// use axios to send the get request with the params
				axios
					.get(
						`/api/listings/?min_price=${min_price}&max_price=${max_price}&min_area=${min_area}&max_area=${max_area}&home_type=${home_type}&city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}`
					)
					.then(function(response) {
						let newData;
						if (self.state.sortby === 'price-dsc') {
							newData = response.data.sort((a, b) => {
								return (
									parseFloat(a.price.replace(/,/g, '')) -
									parseFloat(b.price.replace(/,/g, ''))
								);
							});
						}

						if (self.state.sortby === 'price-asc') {
							newData = response.data.sort((a, b) => {
								return (
									parseFloat(b.price.replace(/,/g, '')) -
									parseFloat(a.price.replace(/,/g, ''))
								);
							});
						}

						if (newData !== undefined) {
							self.setState({
								listingsData: newData
							});
						} else {
							self.setState({
								listingsData: response.data
							});
						}
					})
					.catch(function(error) {
						// handle error
						console.log(error);
					})
					.finally(function() {
						// always executed
					});
			}
		}

		//sort listings by price

		if (self.state.sortby !== prevState.sortby) {
			let newData;
			if (self.state.sortby === 'price-dsc') {
				newData = self.state.listingsData.sort((a, b) => {
					return (
						parseFloat(a.price.replace(/,/g, '')) -
						parseFloat(b.price.replace(/,/g, ''))
					);
				});
			}

			if (self.state.sortby === 'price-asc') {
				newData = self.state.listingsData.sort((a, b) => {
					return (
						parseFloat(b.price.replace(/,/g, '')) -
						parseFloat(a.price.replace(/,/g, ''))
					);
				});
			}

			if (newData !== undefined) {
				self.setState({
					listingsData: newData
				});
			}
		}

		if (self.state.search !== prevState.search) {
			if (self.state.search != '') {
				newData = self.state.toFilter;
				newData = newData.filter(item => {
					var city = item.city.toLowerCase();
					var searchText = self.state.search.toLowerCase();
					var n = city.match(searchText);

					if (n !== null) {
						return true;
					}
				});
			}

			self.setState({
				listingsData: newData
			});
		}

		if (self.state.search !== prevState.search) {
			if (self.state.search === '') {
				self.setState({
					listingsData: self.state.toFilter
				});
			}
		}
	}

	submitQuery = e => {
		e.preventDefault();
		let query = this.state.query;

		const { match, location, history } = this.props;

		const { search } = this.state;

		history.push(`/listings/?search=${search}`);

		this.setState({
			query: !query
		});
	};

	submitFilters = e => {
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

	setView = e => {
		let newView = e.target.dataset.view;
		this.setState(
			{
				view: newView
			},
			() => {
				console.log(this.state.view);
			}
		);
	};

	render() {
		return (
			<Fragment>
				<Title />
				<ListingsLayout>
					<MainLayout>
						<View change={this.change} setView={this.setView} />
						<GridList view={this.state.view}>
							<Property
								listingsData={this.state.listingsData}
								view={this.state.view}
							/>
							<Pagination />
						</GridList>
					</MainLayout>

					<SidebarLayout>
						<Search change={this.change} submitQuery={this.submitQuery} />
						<Filter
							homes={this.homes}
							cities={this.cities}
							rooms={this.rooms}
							bathrooms={this.bathrooms}
							change={this.change}
							globalState={this.state}
							submitFilters={this.submitFilters}
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
