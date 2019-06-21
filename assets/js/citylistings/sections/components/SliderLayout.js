import React, { Component } from 'react';

class SliderLayout extends Component {
	state = {};
	componentDidMount() {}

	render() {
		return (
			<div className="slider_wrapper">
				<div className="slider_overlay" />
				<div id="theme-main-banner">{this.props.children}</div>
				<div className="slider_botm_box" />
			</div>
		);
	}
}

export default SliderLayout;
