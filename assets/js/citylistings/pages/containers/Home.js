import React, { Fragment, Component } from 'react';
import Parallax from '../../sections/components/Parallax';
import Deals from '../../sections/containers/Deals';
import Latest from '../../sections/containers/Latest';
import About from '../../sections/containers/About';
import Services from '../../sections/containers/Services';
import Agents from '../../sections/containers/Agents';
import Testimonials from '../../sections/containers/Testimonials';
import Brands from '../../sections/containers/Brands';
import Enquiry from '../../sections/containers/Enquiry';

class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<Parallax />
				<Deals />
				<Latest />
				<About />
				<Services />
				<Agents />
				<Testimonials />
				<Brands />
				<Enquiry />
			</Fragment>
		);
	}
}

export default Home;
