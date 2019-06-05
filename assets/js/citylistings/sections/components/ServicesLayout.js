import React from 'react';

function ServicesLayout(props) {
	return (
		<div className="service_wrapper">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default ServicesLayout;
