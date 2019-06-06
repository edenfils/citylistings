import React from 'react';

function FooterContact(props) {
	return (
		<div className="col-lg-3 col-md-3 col-xs-12 col-sm-6">
			<div className="wrapper_second_contact">
				<h4>get in touch</h4>
				<ul>
					<li>
						<i className="fa fa-map-marker" />
						<p>
							PO Box 16122 Collins Street
							<br /> West Victoria 8007
						</p>
					</li>
					<li>
						<i className="fa fa-phone" />
						<p>+61 3 8376 6284</p>
					</li>
					<li>
						<i className="fa fa-mobile" />
						<p>+61 3 8876 1104</p>
					</li>
					<li>
						<i className="fa fa-envelope" />
						<a href="#">email@website.com</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default FooterContact;
