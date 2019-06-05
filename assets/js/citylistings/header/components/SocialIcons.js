import React from 'react';

function SocialIcons(props) {
	return (
		<div className="social_links_wrapper">
			<div className="social_links">
				<ul>
					<li>
						<a href="#">
							<i className="fa fa-facebook-square" />
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fa fa-twitter-square" />
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fa fa-google-plus-square" />
						</a>
					</li>
					<li className="hidden-xs">
						<a href="#">
							<i className="fa fa-youtube-square" />
						</a>
					</li>
					<li className="hidden-xs">
						<a href="#">
							<i className="fa fa-pinterest-square" />
						</a>
					</li>
					<li className="dropdown">
						<a
							href="#"
							id="dropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<img src="img/flag.png" alt="Flag" title="Flag" />
							<i className="fa fa-caret-down" />
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<a className="dropdown-item" href="#">
								<img src="img/flag.png" alt="Flag" title="Flag" /> Hebrew
							</a>
							<a className="dropdown-item" href="#">
								<img src="img/flag.png" alt="Flag" title="Flag" />
								Spanish
							</a>
							<a className="dropdown-item" href="#">
								<img src="img/flag.png" alt="Flag" title="Flag" />
								Russian
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SocialIcons;
