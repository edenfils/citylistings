import React, { Component } from 'react';

class BrandsLayout extends Component {
	state = {};

	componentDidMount() {
		this.initCarousel();
	}

	initCarousel = () => {
		$('.partner_slider .owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			responsiveClass: true,
			navText: [
				'<i class="fa fa-angle-left" aria-hidden="true"></i>',
				'<i class="fa fa-angle-right" aria-hidden="true"></i>'
			],
			responsive: {
				0: {
					items: 2,
					nav: true
				},
				600: {
					items: 3,
					nav: true
				},
				1000: {
					items: 5,
					nav: true,
					loop: true,
					margin: 20
				}
			}
		});
	};

	render() {
		return (
			<div className="partner_wrapper">
				<div className="container">
					<div className="partner_slider">
						<div className="owl-carousel owl-theme">{this.props.children}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BrandsLayout;
