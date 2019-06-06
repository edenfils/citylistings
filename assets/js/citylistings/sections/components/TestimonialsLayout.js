import React from 'react';

function TestimonialsLayout(props) {
	return (
		<div className="our_client_wrapper">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default TestimonialsLayout;
