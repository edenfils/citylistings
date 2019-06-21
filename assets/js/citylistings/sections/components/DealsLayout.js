import React from 'react';

function DealsLayout(props) {
	return (
		<div className="map_deal_wrapper">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default DealsLayout;
