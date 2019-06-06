import React, { Component } from 'react';
import InfoLayout from '../components/InfoLayout';
import InfoLeft from '../components/InfoLeft';
import InfoRight from '../components/InfoRight';

class Info extends Component {
	state = {};

	render() {
		return (
			<InfoLayout>
				<InfoLeft />
				<InfoRight />
			</InfoLayout>
		);
	}
}

export default Info;
