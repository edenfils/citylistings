import React from 'react';

function VideoLayout(props) {
	return (
		<div className="abt_city_infra">
			<div className="about_wrapper" />
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default VideoLayout;
