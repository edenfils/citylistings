import React, { Fragment, Component } from 'react';
import axios from 'axios';
import 'owl.carousel';
import Title from '../../sections/containers/Title';
import Loader from '../../widgets/components/Loader';
import ListingsLayout from '../components/ListingsLayout';
import MainLayout from '../components/MainLayout';
import ListingInfo from '../components/ListingInfo';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import SidebarLayout from '../components/SidebarLayout';
import Details from '../../widgets/components/Details';
import Share from '../../widgets/components/Share';
import TopAgents from '../../widgets/components/TopAgents';
import Latest from '../../sections/containers/Latest';
import Enquiry from '../../sections/containers/Enquiry';

class Housing extends Component {
	state = {
		propertyData: null,
		slug: this.props.match.params.slug
	};

	componentDidMount() {
		this.getProperty();
	}

	componentDidUpdate(prevProps, prevState) {
		let slug = this.props.match.params.slug;
		let oldSlug = prevProps.match.params.slug;
		if (slug !== oldSlug) {
			this.getProperty();
		}
	}

	updateSlug = newSlug => {
		this.setState({
			slug: newSlug
		});
	};

	getProperty = () => {
		const self = this;
		const { match, location, history } = self.props;

		if (match.params.slug !== undefined) {
			axios
				.get(`/api/property/${match.params.slug}`)
				.then(function(response) {
					self.setState(
						{
							propertyData: response.data[0]
						},
						() => {
							console.log(self.state.propertyData);
						}
					);
				})
				.catch(function(error) {
					// handle error
					console.log(error);
				})
				.finally(function() {
					// always executed
				});
		}
	};

	render() {
		return (
			<Fragment>
				<Title />
				<ListingsLayout>
					<MainLayout>
						{this.state.propertyData !== null ? (
							<ListingInfo house={this.state.propertyData} />
						) : (
							<Loader />
						)}
						{this.state.propertyData !== null ? (
							<Gallery house={this.state.propertyData} click={this.click} />
						) : (
							<Loader />
						)}

						{this.state.propertyData !== null ? (
							<Amenities house={this.state.propertyData} />
						) : (
							<Loader />
						)}
					</MainLayout>

					<SidebarLayout>
						{this.state.propertyData !== null ? (
							<Details house={this.state.propertyData} />
						) : (
							<Loader />
						)}
						<Share />
						<TopAgents />
					</SidebarLayout>
				</ListingsLayout>
				<Latest updateSlug={this.updateSlug} />
				<Enquiry />
			</Fragment>
		);
	}
}

export default Housing;
