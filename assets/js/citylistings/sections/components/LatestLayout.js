import React from 'react';

function LatestLayout(props) {
	return (
		<div className="latest_prop_wrapper">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default LatestLayout;
