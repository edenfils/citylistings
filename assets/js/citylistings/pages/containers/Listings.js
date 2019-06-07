import React, { Fragment, Component } from 'react';
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
	state = {};

	render() {
		return (
			<Fragment>
				<Title />
				<ListingsLayout>
					<MainLayout>
						<View />
						<GridList>
							<Property />
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
