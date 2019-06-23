import React from 'react';
import Service from '../components/Service';

function ServiceList(props) {
	return (
		<div className="vk_service_inner_setionn">
			<Service services={props.services} />
		</div>
	);
}

export default ServiceList;
