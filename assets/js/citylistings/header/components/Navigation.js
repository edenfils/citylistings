import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
	return (
		<Fragment>
			<div className="sc_navigation hidden-sm hidden-xs">
				<nav id="primary-nav" className="dropdown nav_left_margin">
					<ul>
						<li>
							<NavLink to="/" activeClassName="">
								home
							</NavLink>
						</li>

						<li className="dropdown">
							<NavLink to="/listings" activeClassName="">
								Listings
							</NavLink>
						</li>

						<li>
							<NavLink to="/about" activeClassName="">
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeClassName="">
								contact us
							</NavLink>
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
											<NavLink to="/" activeClassName="">
												home
											</NavLink>
										</li>

										<li className="dropdown">
											<NavLink to="/listings" activeClassName="">
												Listings
											</NavLink>
										</li>

										<li>
											<NavLink to="/about" activeClassName="">
												About Us
											</NavLink>
										</li>
										<li>
											<NavLink to="/contact" activeClassName="">
												contact us
											</NavLink>
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
