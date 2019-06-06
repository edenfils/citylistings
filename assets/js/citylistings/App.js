import React, { Fragment, Component } from 'react';

import Header from './header/containers/Header';
import Home from './pages/containers/Home';
import AboutUs from './pages/containers/AboutUs';
import Footer from './footer/containers/Footer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	render() {
		return (
			<Fragment>
				<Header />
				<Home />
				<Footer />
			</Fragment>
		);
	}
}

export default App;
