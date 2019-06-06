import React from 'react';
import Testimonial from '../components/Testimonial';

function TestimonialsList(props) {
	return (
		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
			<div className="testimonial_slider">
				<Testimonial />
			</div>
		</div>
	);
}

export default TestimonialsList;
