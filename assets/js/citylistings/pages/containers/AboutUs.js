import React, { Fragment, Component } from 'react';
import Title from '../../sections/containers/Title';
import Services from '../../sections/containers/Services';
import Agents from '../../sections/containers/Agents';
import Testimonials from '../../sections/containers/Testimonials';
import Brands from '../../sections/containers/Brands';
import Enquiry from '../../sections/containers/Enquiry';

class AboutUs extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<Title />
				<Services />
				<Agents />
				<Testimonials />
				<Brands />
				<Enquiry />
			</Fragment>
		);
	}
}

export default AboutUs;
