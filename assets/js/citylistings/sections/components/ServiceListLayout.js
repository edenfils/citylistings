import React from 'react';

function ServiceListLayout(props) {
	return (
		<div className="service_wrapper contct_icon_wrapper">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default ServiceListLayout;
