import React from 'react';
import TopHeaderAdd from './TopHeaderAdd';
import SocialIcons from './SocialIcons';

function Topbar(props) {
	return (
		<div className="topbar">
			<div className="container">
				<div className="row">
					<div className="topheader_bg">
						<TopHeaderAdd />
						<SocialIcons />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topbar;
