import React, { Component } from 'react';
import LatestLayout from '../components/LatestLayout';
import LatestHeader from '../components/LatestHeader';
import Listings from '../components/Listings';
import Loader from '../../widgets/components/Loader';
import axios from 'axios';

class Latest extends Component {
	state = {
		listingsData: null,
		filteredData: null
	};

	componentDidMount() {
		this.getProperties();
	}

	getProperties = () => {
		const self = this;
		axios
			.get(`/api/listings/`)
			.then(function(response) {
				let data = response.data;
				let filteredData = data.sort((a, b) => {
					return (
						parseFloat(a.price.replace(/,/g, '')) -
						parseFloat(b.price.replace(/,/g, ''))
					);
				});

				filteredData = self.arrayTo2DArray(filteredData, 3);
				self.setState(
					{
						listingsData: data,
						filteredData: filteredData
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

	arrayTo2DArray = (list, howMany) => {
		let result = [];
		list = list.slice(0);
		while (list[0]) {
			result.push(list.splice(0, howMany));
		}
		return result;
	};

	render() {
		return (
			<LatestLayout>
				<LatestHeader />
				{this.state.filteredData !== null ? (
					<Listings
						properties={this.state.filteredData}
						updateSlug={this.props.updateSlug}
					/>
				) : (
					<Loader />
				)}
			</LatestLayout>
		);
	}
}

export default Latest;
