import React, { Component } from 'react';

import Header from './header/containers/Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	render() {
		return <Header />;
	}
}

export default App;
