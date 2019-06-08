import React from 'react';

function Share(props) {
	return (
		<div className="sidebar_widget">
			<h4>share this job</h4>
			<ul className="aboutus_social_icons blog_social_icon">
				<li className="blue">
					<a href="#">
						<i className="fa fa-facebook" />
					</a>
				</li>
				<li className="sky">
					<a href="#">
						<i className="fa fa-twitter" />
					</a>
				</li>
				<li className="red">
					<a href="#">
						<i className="fa fa-pinterest-p" />
					</a>
				</li>
				<li className="brown">
					<a href="#">
						<i className="fa fa-instagram" aria-hidden="true" />{' '}
					</a>{' '}
				</li>
				<li className="black">
					<a href="#">
						<i className="fa fa-github-alt" />
					</a>{' '}
				</li>
			</ul>
		</div>
	);
}

export default Share;
