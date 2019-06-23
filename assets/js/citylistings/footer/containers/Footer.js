import React, { Component } from 'react';
import FooterLayout from '../components/FooterLayout';
import FooterContact from '../components/FooterContact';
import FooterAgents from '../components/FooterAgents';
import FooterLinks from '../components/FooterLinks';
import Loader from '../../widgets/components/Loader';
import axios from 'axios';

class Footer extends Component {
	state = {
		agentsData: null
	};

	componentDidMount() {
		this.getAgents();
	}

	getAgents = () => {
		let self = this;
		axios
			.get(`/api/agents/`)
			.then(function(response) {
				let data = response.data;

				self.setState({
					agentsData: data
				});
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
	render() {
		return (
			<FooterLayout>
				<FooterContact />
				{this.state.agentsData !== null ? (
					<FooterAgents agents={this.state.agentsData} />
				) : (
					<Loader />
				)}

				<FooterLinks />
			</FooterLayout>
		);
	}
}

export default Footer;
