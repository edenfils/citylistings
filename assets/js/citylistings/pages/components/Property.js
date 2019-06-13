import React, { Fragment } from 'react';

function Property(props) {
	if (props.listingsData != '') {
		return (
			<Fragment>
				{props.listingsData.map(item => {
					return (
						<div
							className="col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first"
							key={item.id}
						>
							<div className="lp_cntnt">
								<div className="project-inner project-head">
									<div className="homes">
										<a href="#" className="homes-img">
											<div
												className={`homes-tag button featured ${item.owner}`}
											>
												{item.owner}
											</div>
											<div className="home-tag-price">$ {item.price} </div>
											<div
												className="homes-tag button sale"
												id="sale_second_tr"
											>
												{item.purpose}
											</div>
										</a>
									</div>
									<div className="homes_img_wrapper">
										<img
											src={`${item.thumb}`}
											alt="home"
											className="img-responsive"
										/>
									</div>
								</div>

								<div className="homes-content">
									<div className="homes_cntnt_box">
										<div className="homes_cntnt_left">
											<img
												src="img/lp_img_4.png"
												alt="home"
												className="img-responsive"
											/>
										</div>
										<div className="homes_cntnt_right">
											<h3>
												<a href="#">{item.address}</a>
											</h3>
											<p className="homes-address mb-3">
												<a href="#">{`${item.city}, ${item.state}`}</a>
											</p>
										</div>
									</div>

									<div className="home_wrapper_list">
										<ul className="homes-list clearfix">
											<li>
												type
												<span>{item.type}</span>
											</li>
											<li>
												area
												<span>{item.area} sq ft</span>
											</li>
											<li>
												rooms
												<span>{item.rooms}</span>
											</li>
										</ul>
									</div>

									<div className="footer">
										<h3>view map</h3>
										<div className="lp_deals_icon">
											<ul>
												{item.extras.map((extra, j) => {
													return (
														<li key={j}>
															<a>
																<i className={`flaticon-${extra}`} />
															</a>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Fragment>
		);
	} else {
		return (
			<div id="preloader">
				<div id="status">
					<img src="/img/preloader.gif" id="preloader_image" alt="loader" />
				</div>
			</div>
		);
	}
}

export default Property;
