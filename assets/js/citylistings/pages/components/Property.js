import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Property(props) {
	if (props.listingsData != '') {
		return (
			<Fragment>
				{props.listingsData.map(item => {
					return (
						<div
							className={
								props.view === 'grid'
									? 'col-lg-6 col-md-6 col-sm-6 col-xs-12 prs_upcom_slide_first'
									: 'col-lg-12 col-md-12 col-sm-12 col-xs-12'
							}
							key={item.id}
						>
							<div
								className={
									props.view === 'grid'
										? 'lp_cntnt'
										: 'prs_mcc_list_movie_main_wrapper lp_cntnt'
								}
							>
								<div
									className={
										props.view === 'grid'
											? 'project-inner project-head'
											: 'project-inner project-head inner_projext_head'
									}
								>
									<div className="homes">
										<Link to={`/property/${item.slug}`} className="homes-img">
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
										</Link>
									</div>
									<div className="homes_img_wrapper">
										<img
											src={`${item.thumb}`}
											alt="home"
											className="img-responsive"
										/>
									</div>
								</div>

								<div
									className={
										props.view === 'list'
											? 'prs_mcc_list_movie_img_cont_wrapper'
											: ''
									}
								>
									<div className="homes-content">
										<div
											className={
												props.view === 'grid'
													? 'homes_cntnt_box'
													: 'homes_cntnt_box homes_cntnt_box_2'
											}
										>
											<div
												className={
													props.view === 'grid'
														? 'homes_cntnt_left'
														: 'homes_cntnt_right'
												}
											>
												{props.view === 'grid' ? (
													<img
														src="/img/lp_img_4.png"
														alt="home"
														className="img-responsive"
													/>
												) : (
													''
												)}
											</div>
											<div className="homes_cntnt_right">
												<h3>
													<Link to={`/property/${item.slug}`}>
														{item.address}
													</Link>
												</h3>
												<p className="homes-address mb-3">
													<Link to={`/property/${item.slug}`}>{`${item.city}, ${
														item.state
													}`}</Link>
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
												<li>
													bathrooms
													<span>{item.bathrooms}</span>
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
																<Link to={`/property/${item.slug}`}>
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
						</div>
					);
				})}
			</Fragment>
		);
	} else {
		return <h1>There no listings with such criteria</h1>;
	}
}

export default Property;
