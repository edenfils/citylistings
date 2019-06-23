import React, { Fragment } from 'react';

function Service(props) {
	let services = props.services;
	console.log(services);
	return (
		<Fragment>
			{services.map((item, i) => {
				return (
					<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={i}>
						<div className="ci_icon_wrapper_list ci_icon_wrapper_list_2">
							<div className="ci_icon_img_effect">
								<div className="ci_icon_img_list ci_icon_img_list_2">
									<i className={`flaticon-${item.icon}`} />
									<div className="btc_step_overlay" />
								</div>
							</div>
							<div className="ci_icon_content_left ci_icon_content_left_2">
								<h2>
									<a href="#">{item.title}</a>
								</h2>
								<p>{item.description}</p>
								<h6>
									<a href="#">read more</a>
								</h6>
							</div>
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}

export default Service;
