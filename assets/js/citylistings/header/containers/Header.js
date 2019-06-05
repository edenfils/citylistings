import React, { Component } from 'react';
import HeaderLayout from '../components/HeaderLayout';
import Topbar from '../components/Topbar';
import Menu from '../components/Menu';

class Header extends Component {
	state = {};
	render() {
		return (
			<HeaderLayout>
				<Topbar />
				<Menu />
				<div> THIS IS THE HEADER</div>
			</HeaderLayout>
		);
	}
}

export default Header;
