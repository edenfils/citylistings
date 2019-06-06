import React from 'react';

function TitleLayout(props) {
	return (
		<div className="page_title_section">
			<div className="page_title_overlay" />
			<div className="page_header text-center">
				<div className="container">
					<div className="row">{props.children}</div>
				</div>
			</div>
		</div>
	);
}

export default TitleLayout;
