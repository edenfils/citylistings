import React from 'react';

function MainLayout(props) {
	return (
		<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 sidebar2_main_wrapper">
			<div className="lest_news_box_wrapper">{props.children}</div>
		</div>
	);
}

export default MainLayout;
