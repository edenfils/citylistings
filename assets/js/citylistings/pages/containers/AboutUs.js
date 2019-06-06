import React, { Fragment, Component } from 'react';
import Title from '../../sections/containers/Title';
import Info from '../../sections/containers/Info';
import Services from '../../sections/containers/Services';
import Video from '../../sections/containers/Video';
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
				<Info />
				<Services />
				<Video />
				<Agents />
				<Testimonials />
				<Brands />
				<Enquiry />
			</Fragment>
		);
	}
}

export default AboutUs;
