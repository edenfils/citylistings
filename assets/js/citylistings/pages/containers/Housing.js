import React, { Fragment, Component } from 'react';
import Title from '../../sections/containers/Title';
import ListingsLayout from '../components/ListingsLayout';
import MainLayout from '../components/MainLayout';
import ListingInfo from '../components/ListingInfo';
import Amenities from '../components/Amenities';
import SidebarLayout from '../components/SidebarLayout';
import Details from '../../widgets/components/Details';
import Share from '../../widgets/components/Share';
import TopAgents from '../../widgets/components/TopAgents';
import Latest from '../../sections/containers/Latest';
import Enquiry from '../../sections/containers/Enquiry';

class Housing extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<Title />
				<ListingsLayout>
					<MainLayout>
						<ListingInfo />
						<Amenities />
					</MainLayout>

					<SidebarLayout>
						<Details />
						<Share />
						<TopAgents />
					</SidebarLayout>
				</ListingsLayout>
				<Latest />
				<Enquiry />
			</Fragment>
		);
	}
}

export default Housing;
