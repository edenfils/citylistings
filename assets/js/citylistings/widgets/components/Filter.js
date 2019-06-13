import React from 'react';

function Filter(props) {
	return (
		<div className="deals_form_pader sp_categories_pricing">
			<div className="deals_form_tab deals_form_tab_2">
				<div role="tabpanel">
					<ul id="tabTwo" className="nav nav-tabs">
						<li className="active">
							<a href="#contentTwo-1" data-toggle="tab">
								buy
							</a>
						</li>
						<li>
							<a href="#contentTwo-2" data-toggle="tab">
								rent
							</a>
						</li>
						<li />
					</ul>

					<div className="tab-content">
						<div
							className="tab-pane fade in active main-search-field main-search-field_2"
							id="contentTwo-1"
						>
							<div className="at-col-default-mar pricing_inputfield">
								<div className="at-col-default-mar">
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

							<div className="at-col-default-mar pricing_inputfield">
								<div className="at-col-default-mar">
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

							<div className="at-col-default-mar pricing_inputfield">
								<select
									className="div-toggle"
									data-target=".my-info-1"
									name="bathrooms"
									onChange={props.change}
								>
									<option value="0">bathrooms</option>
									{props.bathrooms()}
								</select>
							</div>

							<div className="at-col-default-mar no-mb pricing_inputfield">
								<select name="bedrooms" onChange={props.change}>
									<option value="0">bedrooms</option>
									{props.rooms()}
								</select>
							</div>

							<div className="row b-search__main-form  price_area_label ">
								<h5>Area</h5>
								<div className="col-md-6 col-lg-6 at-col-default-mar pricing_inputfield">
									<input
										type="text"
										name="min_area"
										placeholder={props.globalState.min_area}
										onChange={props.change}
									/>
								</div>
								<div className="col-md-6 col-lg-6 at-col-default-mar pricing_inputfield">
									<input
										type="text"
										name="max_area"
										placeholder={props.globalState.max_area}
										onChange={props.change}
									/>
								</div>
							</div>
							<div className="row b-search__main-form  price_area_label ">
								<h5>Price</h5>
								<div className="col-md-6 col-lg-6 at-col-default-mar pricing_inputfield">
									<input
										type="text"
										name="min_price"
										placeholder={props.globalState.min_price}
										onChange={props.change}
									/>
								</div>
								<div className="col-md-6 col-lg-6 at-col-default-mar pricing_inputfield">
									<input
										type="text"
										name="max_price"
										placeholder={props.globalState.max_price}
										onChange={props.change}
									/>
								</div>
							</div>

							<div className="at_btn_form deals_btn blog_cate_btn">
								<ul>
									<li>
										<a href="#">search properties</a>
									</li>
								</ul>
							</div>
						</div>
						<div
							className="tab-pane fade main-search-field main-search-field_2"
							id="contentTwo-2"
						>
							<div className="at-col-default-mar pricing_inputfield">
								<input type="text" placeholder="enter your keyword" />
							</div>

							<div className="at-col-default-mar pricing_inputfield">
								<input type="text" placeholder="enter city/locality name" />
							</div>

							<div className="at-col-default-mar pricing_inputfield">
								<div className="at-col-default-mar">
									<select>
										<option value="0">Types</option>
										<option value="1">Family House</option>
										<option value="2">Apartment</option>
										<option value="3">villa</option>
									</select>
								</div>
							</div>

							<div className="at-col-default-mar pricing_inputfield">
								<select className="div-toggle" data-target=".my-info-1">
									<option value="0">02 bathroomn</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
								</select>
							</div>

							<div className="at-col-default-mar no-mb pricing_inputfield">
								<select>
									<option value="0">02 bedroom</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>

							<div className="at-col-default-mar pricing_inputfield">
								<input
									type="text"
									className="datepicker"
									placeholder="check in:"
								/>
							</div>
							<div className="at-col-default-mar pricing_inputfield">
								<input
									type="text"
									className="datepicker"
									placeholder="check out:"
								/>
							</div>
							<div className="at-col-default-mar at_price at_price_2">
								<h5>$80,000</h5>
							</div>

							<div className="at_btn_form deals_btn blog_cate_btn">
								<ul>
									<li>
										<a href="#">book properties</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;
