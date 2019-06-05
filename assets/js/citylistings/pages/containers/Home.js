import React, { Fragment, Component } from 'react';
import Slider from '../../sections/containers/Slider';
import Deals from '../../sections/containers/Deals';
import Latest from '../../sections/containers/Latest';
import About from '../../sections/containers/About';
import Services from '../../sections/containers/Services';
import Agents from '../../sections/containers/Agents';
class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<Slider />
				<Deals />
				<Latest />
				<About />
				<Services />
				<Agents />
			</Fragment>
		);
	}
}

export default Home;
