import React, { Component } from 'react';
import TestimonialsLayout from '../components/TestimonialsLayout';
import TestimonialsHeader from '../components/TestimonialsHeader';
import TestimonialsList from '../components/TestimonialsList';

class Testimonials extends Component {
	state = {};

	render() {
		return (
			<TestimonialsLayout>
				<TestimonialsHeader />
				<TestimonialsList />
			</TestimonialsLayout>
		);
	}
}

export default Testimonials;
