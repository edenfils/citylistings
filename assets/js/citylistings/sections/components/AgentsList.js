import React, { Component } from 'react';
import Agent from '../components/Agent';

class AgentsList extends Component {
	state = {
		agentsData: null,
		sortedAgents: null
	};

	componentDidMount() {
		this.initCarousel();
	}

	initCarousel = () => {
		$('.team_slider_wrapper .owl-carousel').owlCarousel({
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
				<div className="team_slider_wrapper">
					<div className="owl-carousel owl-theme">
						<Agent agents={this.props.agents} />
					</div>
				</div>
			</div>
		);
	}
}

export default AgentsList;
