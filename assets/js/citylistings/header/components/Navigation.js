import React, { Fragment } from 'react';

function Navigation(props) {
	return (
		<Fragment>
			<div className="sc_navigation hidden-sm hidden-xs">
				<nav id="primary-nav" className="dropdown nav_left_margin">
					<ul>
						<li>
							<a href="#" title="">
								home
							</a>
						</li>

						<li className="dropdown">
							<a href="#" title="property_listing_sidebar.html">
								Listings
							</a>
						</li>

						<li>
							<a href="#" title="">
								About Us
							</a>
						</li>
						<li>
							<a href="contact_us.html" title="">
								contact us
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="mobile-menu-area visible-sm visible-xs">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 cc_menu_top_margin">
							<div className="mobile-menu">
								<nav id="primary-nav" className="dropdown nav_left_margin">
									<ul>
										<li>
											<a href="#" title="">
												home
											</a>
										</li>

										<li className="dropdown">
											<a href="#" title="property_listing_sidebar.html">
												Listings
											</a>
										</li>
										<li>
											<a href="#" title="">
												About Us
											</a>
										</li>
										<li>
											<a href="contact_us.html" title="">
												contact us
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Navigation;
