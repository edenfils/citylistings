import React from 'react';

function EnquiryLayout(props) {
	return (
		<div className="dreams-area">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default EnquiryLayout;
