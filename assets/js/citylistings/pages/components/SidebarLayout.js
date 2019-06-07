import React from 'react';

function SidebarLayout(props) {
	return (
		<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sidebar_main_wrapper">
			{props.children}
		</div>
	);
}

export default SidebarLayout;
