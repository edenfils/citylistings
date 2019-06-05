import React, { Component } from 'react';
import LatestLayout from '../components/LatestLayout';
import LatestHeader from '../components/LatestHeader';
import Listings from '../components/Listings';

class Latest extends Component {
	state = {};

	render() {
		return (
			<LatestLayout>
				<LatestHeader />
				<Listings />
			</LatestLayout>
		);
	}
}

export default Latest;
