import React from 'react';

function FooterLayout(props) {
	return (
		<div className="footer_wrapper">
			<div className="section3_wrapper_second">
				<div className="container">
					<div className="row">{props.children}</div>
				</div>
			</div>
		</div>
	);
}

export default FooterLayout;
