import React from 'react';
import { Link } from 'react-router-dom';

function EnquiryButton(props) {
	return (
		<div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
			<div className="abt_btn enquiry_btn">
				<ul>
					<li>
						<Link to="/contact">contact us</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default EnquiryButton;
