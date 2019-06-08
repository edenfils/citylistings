import React from 'react';
import Listing from './Listing';

function Listings(props) {
	return (
		<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div className="sw_team_slider">
				<div className="owl-carousel owl-theme">
					<Listing />
				</div>
			</div>
		</div>
	);
}

export default Listings;
