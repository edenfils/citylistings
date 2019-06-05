import React from 'react';

function TopHeaderAdd(props) {
	return (
		<div className="top_header_add hidden-xs hidden-sm">
			<ul>
				<li>
					<i className="fa fa-phone" aria-hidden="true" /> + 1800. 12345. 67890
				</li>
				<li>
					<a href="#">
						<i className="fa fa-envelope" aria-hidden="true" /> mail@website.com
					</a>
				</li>
			</ul>
		</div>
	);
}

export default TopHeaderAdd;
