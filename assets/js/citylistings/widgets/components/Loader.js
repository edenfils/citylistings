import React from 'react';

function Loader(props) {
	return (
		<div id="preloader">
			<div id="status">
				<img src="/img/preloader.gif" id="preloader_image" alt="loader" />
			</div>
		</div>
	);
}

export default Loader;
