import React, { Component } from 'react';
import FooterLayout from '../components/FooterLayout';
import FooterContact from '../components/FooterContact';
import FooterAgents from '../components/FooterAgents';
import FooterLinks from '../components/FooterLinks';

class Footer extends Component {
	state = {};
	render() {
		return (
			<FooterLayout>
				<FooterContact />
				<FooterAgents />
				<FooterLinks />
			</FooterLayout>
		);
	}
}

export default Footer;
