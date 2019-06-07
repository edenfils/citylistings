import React, { Fragment, Component } from 'react';
import Title from '../../sections/containers/Title';
import Contact from '../../sections/containers/Contact';
import ServiceList from '../../sections/containers/ServiceList';

import Enquiry from '../../sections/containers/Enquiry';

class ContactUs extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<Title />
				<Contact />
				<Enquiry />
				<ServiceList />
			</Fragment>
		);
	}
}

export default ContactUs;
