import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

function Menu(props) {
	return (
		<div className="transparent-menu header-area hidden-menu-bar stick">
			<div className="container">
				<div className="row">
					<div className="bt_main_menu_wrapper">
						<div className="main-menu-wrapper clear-fix">
							<Logo />
						</div>
						<Navigation />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
