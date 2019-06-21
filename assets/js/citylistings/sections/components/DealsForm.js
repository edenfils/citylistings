import React from 'react';

function DealsForm(props) {
	return (
		<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
			<div className="deals_form_pader map_deals_wrapper">
				<div className="deals_form_tab map_form_tab">
					<div role="tabpanel">
						<ul id="tabTwo" className="nav nav-tabs">
							<li className="active">
								<a href="#contentTwo-1" data-toggle="tab">
									buy
								</a>
							</li>
						</ul>

						<div className="row">
							<div className="tab-content">
								<div
									className="tab-pane fade in active main-search-field "
									id="contentTwo-1"
								>
									<div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
										<div className="at-col-default-mar map_deal_input">
											<select
												name="city"
												onChange={props.change}
												defaultValue="all"
											>
												<option value="all">All Cities</option>
												{props.cities()}
											</select>
										</div>
									</div>
									<div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
										<div className="at-col-default-mar">
											<div className="at-col-default-mar map_deal_input">
												<select
													name="home_type"
													onChange={props.change}
													defaultValue="all"
												>
													<option value="all">All Home Types</option>
													{props.homes()}
												</select>
											</div>
										</div>
									</div>

									<div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
										<div className="at-col-default-mar map_deal_input">
											<select
												className="div-toggle"
												data-target=".my-info-1"
												name="bathrooms"
												defaultValue="1"
												onChange={props.change}
											>
												<option value="1">bathrooms</option>
												{props.bathrooms()}
											</select>
										</div>
									</div>
									<div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
										<div className="at-col-default-mar no-mb map_deal_input">
											<select
												name="bedrooms"
												onChange={props.change}
												defaultValue="1"
											>
												<option value="1">bedrooms</option>
												{props.rooms()}
											</select>
										</div>
									</div>
									<div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
										<div className="row b-search__main-form  price_area_label ">
											<h5
												style={{
													color: 'white'
												}}
											>
												Area in Sq Ft
											</h5>
											<div className="col-md-6 col-lg-6 at-col-default-mar map_deal_input">
												<input
													type="text"
													name="min_area"
													placeholder={props.globalState.min_area}
													onChange={props.change}
												/>
											</div>
											<div className="col-md-6 col-lg-6 at-col-default-mar map_deal_input">
												<input
													type="text"
													name="max_area"
													placeholder={props.globalState.max_area}
													onChange={props.change}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
										<div className="row b-search__main-form  price_area_label ">
											<h5
												style={{
													color: 'white'
												}}
											>
												Price
											</h5>
											<div className="col-md-6 col-lg-6 at-col-default-mar map_deal_input">
												<input
													type="text"
													name="min_price"
													placeholder={props.globalState.min_price}
													onChange={props.change}
												/>
											</div>
											<div className="col-md-6 col-lg-6 at-col-default-mar map_deal_input">
												<input
													type="text"
													name="max_price"
													placeholder={props.globalState.max_price}
													onChange={props.change}
												/>
											</div>
										</div>
									</div>
									<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
										<div className="at_btn_form deals_btn map_deal_btnn">
											<ul>
												<li>
													<a href="#" onClick={props.submitFilters}>
														search properties
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DealsForm;
