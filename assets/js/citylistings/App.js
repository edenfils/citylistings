import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './widgets/containers/ScrollToTop';
import Header from './header/containers/Header';
import Home from './pages/containers/Home';
import AboutUs from './pages/containers/AboutUs';
import ContactUs from './pages/containers/ContactUs';
import Listings from './pages/containers/Listings';
import Housing from './pages/containers/Housing';
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
			<Router>
				<ScrollToTop>
					<Fragment>
						<Header />
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={AboutUs} />
						<Route exact path="/contact" component={ContactUs} />
						<Route exact path="/listings" component={Listings} />
						<Route exact path="/property/:slug" component={Housing} />
						<Footer />
					</Fragment>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
