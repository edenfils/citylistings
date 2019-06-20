import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Listing(props) {
	const properties = props.properties;
	return (
		<Fragment>
			{properties.map((slide, i) => {
				return (
					<div className="item" key={i}>
						<div className="row">
							{slide.map((house, j) => {
								return (
									<div
										className="col-lg-4 col-md-4 col-xs-12 col-sm-6 hidden-sm hidden-xs"
										key={j}
									>
										<div className="lp_cntnt">
											<div className="project-inner project-head">
												<div className="homes">
													<Link
														to={`/property/${house.slug}`}
														className="homes-img"
													>
														<div
															className={`homes-tag button featured ${
																house.owner
															}`}
														>
															{house.owner}
														</div>
														<div className="home-tag-price">
															$ {house.price}{' '}
														</div>
														<div
															className="homes-tag button sale"
															id="sale_second_tr"
														>
															{house.purpose}
														</div>
													</Link>
												</div>
												<div className="homes_img_wrapper">
													<img
														src={`${house.thumb}`}
														alt="home"
														className="img-responsive"
													/>
												</div>
											</div>

											<div className="homes-content">
												<div className="homes_cntnt_box">
													<div className="homes_cntnt_left">
														<img
															src="/img/lp_img_4.png"
															alt="home"
															className="img-responsive"
														/>
													</div>
													<div className="homes_cntnt_right">
														<h3>
															<Link to={`/property/${house.slug}`}>
																{house.address}
															</Link>
														</h3>
														<p className="homes-address mb-3">
															<Link to={`/property/${house.slug}`}>
																{`${house.city}, ${house.state}`}
															</Link>
														</p>
													</div>
												</div>

												<div className="home_wrapper_list">
													<ul className="homes-list clearfix">
														<li>
															type
															<span>{house.type}</span>
														</li>
														<li>
															area
															<span>{house.area} sq ft</span>
														</li>
														<li>
															rooms
															<span>{house.rooms}</span>
														</li>
														<li>
															bathrooms
															<span>{house.bathrooms}</span>
														</li>
													</ul>
												</div>

												<div className="footer">
													<h3>view map</h3>
													<div className="lp_deals_icon">
														<ul>
															{house.extras.map((extra, k) => {
																return (
																	<li key={k}>
																		<Link to={`/property/${house.slug}`}>
																			<i className={`flaticon-${extra}`} />
																		</Link>
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
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}

export default Listing;
