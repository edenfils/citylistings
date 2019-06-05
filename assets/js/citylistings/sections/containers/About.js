import React, { Component } from 'react';
import AboutLayout from '../components/AboutLayout';
import AboutLeft from '../components/AboutLeft';
import AboutRight from '../components/AboutRight';

class About extends Component {
	state = {};

	render() {
		return (
			<AboutLayout>
				<AboutLeft />
				<AboutRight />
			</AboutLayout>
		);
	}
}

export default About;
