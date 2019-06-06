import React, { Component } from 'react';
import BrandsLayout from '../components/BrandsLayout';
import Brand from '../components/Brand';

class Brands extends Component {
	state = {};

	render() {
		return (
			<BrandsLayout>
				<Brand />
			</BrandsLayout>
		);
	}
}

export default Brands;
