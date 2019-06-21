import React, { Component } from 'react';
import axios from 'axios';
import SliderLayout from '../components/SliderLayout';
import Slide from '../components/Slide';

class Slider extends Component {
	state = {
		listingsData: null,
		sortedData: null
	};

	componentDidMount() {
		this.getListings();
	}

	getListings = () => {
		const self = this;
		axios
			.get(`/api/listings/`)
			.then(function(response) {
				let data = response.data;
				let filteredData = data.sort((a, b) => {
					return (
						parseFloat(b.price.replace(/,/g, '')) -
						parseFloat(a.price.replace(/,/g, ''))
					);
				});
				self.setState(
					{
						listingsData: data,
						sortedData: filteredData
					},
					() => {
						console.log(filteredData);
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
	};

	render() {
		return (
			<SliderLayout>
				{this.state.sortedData !== null ? (
					<Slide properties={this.state.sortedData} />
				) : (
					`Loading...`
				)}
			</SliderLayout>
		);
	}
}

export default Slider;
