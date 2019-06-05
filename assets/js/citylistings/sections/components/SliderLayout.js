import React from 'react';

function SliderLayout(props) {
	return (
		<div className="slider_wrapper">
			<div className="slider_overlay" />
			<div id="theme-main-banner">{props.children}</div>
			<div className="slider_botm_box" />
		</div>
	);
}

export default SliderLayout;
