import React from 'react';

function BrandsLayout(props) {
	return (
		<div className="partner_wrapper">
			<div className="container">
				<div className="partner_slider">
					<div className="owl-carousel owl-theme">{props.children}</div>
				</div>
			</div>
		</div>
	);
}

export default BrandsLayout;
