import React, { Fragment } from 'react';

function Agent(props) {
	let agents = props.agents;
	return (
		<Fragment>
			{agents.map((slide, i) => {
				return (
					<div className="item" key={i}>
						<div className="row">
							{slide.map((item, j) => {
								return (
									<div
										className="col-lg-3 col-md-3 col-xs-12 col-sm-6 hidden-sm hidden-xs"
										key={j}
									>
										<div className="team_wrapper">
											<div className="team_wrapper_overlay">
												<img src={item.picture} alt="team" />

												<div className="team_wrapper_overlay_info">
													<h2>
														<a href="#">contact agent</a>
													</h2>
												</div>
											</div>
											<div className="team_info">
												<h4>
													<a href="#">{item.name}</a>
												</h4>
												<h5>{item.position}</h5>
												<ul className="team_social_icons">
													{item.stars.map((star, k) => {
														return (
															<li key={k}>
																<i className={star} />
															</li>
														);
													})}
												</ul>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}

export default Agent;
