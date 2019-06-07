import React, { Component } from 'react';
import ContactLayout from '../components/ContactLayout';
import ContactHeader from '../components/ContactHeader';
import Form from '../components/Form';

class Contact extends Component {
	state = {};

	render() {
		return (
			<ContactLayout>
				<ContactHeader />
				<Form />
			</ContactLayout>
		);
	}
}

export default Contact;
