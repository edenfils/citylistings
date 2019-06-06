import React from 'react';

function BreadCrumbs(props) {
	return (
		<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
			<div className="row">
				<div className="page_header_bottom">
					<ul className="sub_title">
						<li>
							<a href="#"> Home </a>
						</li>
						<li className="icon_breamcum"> > </li>
						<li>
							<a href="#"> pages </a>
						</li>
						<li className="icon_breamcum"> > </li>
						<li>about us</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default BreadCrumbs;
