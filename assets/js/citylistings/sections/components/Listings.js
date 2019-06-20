import React, { Component } from 'react';
import Listing from './Listing';

class Listings extends Component {
	state = {};

	componentDidMount() {
		this.initCarousel();
	}

	initCarousel = () => {
		$('.sw_team_slider .owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			responsiveClass: true,
			smartSpeed: 1200,
			navText: [
				'<i class="flaticon-left-arrow" aria-hidden="true"></i>',
				'<i class="flaticon-right-arrow" aria-hidden="true"></i>'
			],
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 1,
					nav: true
				},
				1000: {
					items: 1,
					nav: true,
					loop: true,
					margin: 20
				}
			}
		});
	};

	render() {
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="sw_team_slider">
					<div className="owl-carousel owl-theme">
						<Listing
							properties={this.props.properties}
							updateSlug={this.props.updateSlug}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Listings;
