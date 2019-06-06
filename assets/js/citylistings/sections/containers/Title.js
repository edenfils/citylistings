import React, { Component } from 'react';
import TitleLayout from '../components/TitleLayout';
import Heading from '../components/Heading';
import BreadCrumbs from '../components/BreadCrumbs';

class Title extends Component {
	state = {};

	render() {
		return (
			<TitleLayout>
				<Heading />
				<BreadCrumbs />
			</TitleLayout>
		);
	}
}

export default Title;
