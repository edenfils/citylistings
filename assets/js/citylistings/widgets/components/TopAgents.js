import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../../widgets/components/Loader';

class TopAgents extends Component {
	state = {
		agentsData: null
	};

	componentDidMount() {
		this.getAgents();
	}

	getAgents = () => {
		let self = this;
		axios
			.get(`/api/agents/`)
			.then(function(response) {
				let data = response.data;

				self.setState({
					agentsData: data
				});
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
	render() {
		let agents = this.state.agentsData;
		return (
			<div className="sidebar_widget">
				<h4>top agents</h4>
				{agents !== null ? (
					agents.map((item, i) => {
						if (i <= 2) {
							return (
								<div className="blog_wrapper1 blog_wrapper3" key={i}>
									<div className="blog_image blog_image_2">
										<img
											src={item.picture}
											className="img-responsive"
											alt="img"
										/>
									</div>
									<div className="blog_text blog_cate_text">
										<h5>
											<a href="#">{item.name}</a>
										</h5>
										<div className="blog_date blog_date_2">
											<i className="fa fa-phone" aria-hidden="true" />
											{item.phone}
										</div>
									</div>
								</div>
							);
						}
					})
				) : (
					<Loader />
				)}
			</div>
		);
	}
}

export default TopAgents;
