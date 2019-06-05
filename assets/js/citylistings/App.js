import React, { Fragment, Component } from 'react';

import Header from './header/containers/Header';
import Home from './pages/containers/Home';

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
			</Fragment>
		);
	}
}

export default App;
