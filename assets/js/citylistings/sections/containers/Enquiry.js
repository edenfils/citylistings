import React, { Component } from 'react';
import EnquiryLayout from '../components/EnquiryLayout';
import EnquiryTitle from '../components/EnquiryTitle';
import EnquiryButton from '../components/EnquiryButton';

class Enquiry extends Component {
	state = {};

	render() {
		return (
			<EnquiryLayout>
				<EnquiryTitle />
				<EnquiryButton />
			</EnquiryLayout>
		);
	}
}

export default Enquiry;
