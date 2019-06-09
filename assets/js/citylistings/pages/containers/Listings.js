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
		listingsData: ''
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
						<Filter />
						<TopAgents />
					</SidebarLayout>
				</ListingsLayout>
				<Enquiry />
			</Fragment>
		);
	}
}

export default Listings;
