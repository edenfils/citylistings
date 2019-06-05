import React from 'react';

function AgentsLayout(props) {
	return (
		<div className="our_team_wrapper">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</div>
	);
}

export default AgentsLayout;
