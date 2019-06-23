import React from 'react';

function FooterAgents(props) {
	let agents = props.agents;
	return (
		<div className="col-lg-3 col-md-3 col-xs-12 col-sm-6">
			<div className="wrapper_second_blog">
				<h4>our agents</h4>
				{agents.map((item, i) => {
					if (i <= 2) {
						return (
							<div className="blog_wrapper1" key={i}>
								<div className="blog_image blog_image_2">
									<img
										src={item.picture}
										className="img-responsive"
										alt="img"
									/>
								</div>
								<div className="blog_text">
									<h5>
										<a href="#">{item.name}</a>
									</h5>
									<div className="blog_date">
										<i className="fa fa-phone" aria-hidden="true" />
										{item.phone}
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}

export default FooterAgents;
