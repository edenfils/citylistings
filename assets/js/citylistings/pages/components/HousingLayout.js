import React from 'react';

function HousingLayout(props) {
	return (
		<div className="rs_property_categories_wrapper full_grid_wrapper ass">
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
	);
}

export default HousingLayout;
