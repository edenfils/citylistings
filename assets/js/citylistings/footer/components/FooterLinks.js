import React from 'react';

function FooterLinks(props) {
	return (
		<div className="col-lg-3 col-md-3 col-xs-12 col-sm-6">
			<div className="wrapper_second_useful">
				<h4>usefull links</h4>
				<ul>
					<li>
						<a href="#">
							<i className="fa fa-caret-right" aria-hidden="true" />
							our agents
						</a>{' '}
					</li>
					<li>
						<a href="#">
							<i className="fa fa-caret-right" aria-hidden="true" />
							about us{' '}
						</a>{' '}
					</li>
					<li>
						<a href="#">
							<i className="fa fa-caret-right" aria-hidden="true" />
							contact us
						</a>{' '}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default FooterLinks;
