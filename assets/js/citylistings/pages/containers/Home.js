import React, { Fragment, Component } from 'react';
import Slider from '../../sections/containers/Slider';
import Deals from '../../sections/containers/Deals';

class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<Slider />
				<Deals />
			</Fragment>
		);
	}
}

export default Home;
