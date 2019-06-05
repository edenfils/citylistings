import React, { Component } from 'react';
import SliderLayout from '../components/SliderLayout';
import Slide from '../components/Slide';

class Slider extends Component {
	state = {};

	render() {
		return (
			<SliderLayout>
				<Slide />
			</SliderLayout>
		);
	}
}

export default Slider;
