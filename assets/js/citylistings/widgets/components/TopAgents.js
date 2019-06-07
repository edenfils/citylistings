import React from 'react';

function TopAgents(props) {
	return (
		<div className="sidebar_widget">
			<h4>top agents</h4>
			<div className="blog_wrapper1 blog_wrapper3">
				<div className="blog_image blog_image_2">
					<img src="img/client_3.jpg" className="img-responsive" alt="img" />
				</div>
				<div className="blog_text blog_cate_text">
					<h5>
						<a href="#">Rihanna Alexander</a>
					</h5>
					<div className="blog_date blog_date_2">
						<i className="fa fa-phone" aria-hidden="true" />
						+91 12345 67890
					</div>
				</div>
			</div>
			<div className="blog_wrapper2">
				<div className="blog_image blog_image_2">
					<img src="img/client_2.jpg" className="img-responsive" alt="img" />
				</div>
				<div className="blog_text blog_cate_text">
					<h5>
						<a href="#"> Alex doe</a>
					</h5>
					<div className="blog_date blog_date_2">
						<i className="fa fa-phone" aria-hidden="true" />
						+91 12345 63320
					</div>
				</div>
			</div>
			<div className="blog_wrapper2">
				<div className="blog_image blog_image_2">
					<img src="img/client_3.jpg" className="img-responsive" alt="img" />
				</div>
				<div className="blog_text blog_cate_text">
					<h5>
						<a href="#"> marine doe</a>
					</h5>
					<div className="blog_date blog_date_2">
						<i className="fa fa-phone" aria-hidden="true" />
						+91 12345 63320
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopAgents;
