import React from 'react';

function ListingsLayout(props) {
	return (
		<div className="rs_property_categories_wrapper realestate_prop_cate_wrapper">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default ListingsLayout;
