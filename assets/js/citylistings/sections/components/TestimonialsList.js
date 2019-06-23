import React, { Component } from 'react';
import Testimonial from '../components/Testimonial';
import axios from 'axios';
import carousel from 'bootstrap/js/carousel';
import Loader from '../../widgets/components/Loader';

class TestimonialsList extends Component {
	state = {
		testimonialsData: null
	};

	componentDidMount() {
		this.initCarousel();
		this.getTestiomonials();
	}

	initCarousel = () => {
		$('.testimonial_slider').carousel();
	};

	getTestiomonials = () => {
		const self = this;
		axios.get('/api/testimonials/').then(function(response) {
			self.setState(
				{
					testimonialsData: response.data
				},
				() => {
					console.log(response.data);
				}
			);
			console.log(response);
		});
	};
	render() {
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
				<div className="testimonial_slider">
					{this.state.testimonialsData !== null ? (
						<Testimonial testimonials={this.state.testimonialsData} />
					) : (
						<Loader />
					)}
				</div>
			</div>
		);
	}
}

export default TestimonialsList;
