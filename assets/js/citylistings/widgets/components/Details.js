import React from 'react';

function Details(props) {
	return (
		<div class="sidebar_widget sidebar_widget_2">
			<div className="wrapper_second_blog wrapper_second_blog_2 sp_blog_sidebar">
				<h4>estate details</h4>
				<div className="blog_wrapper1">
					<div className="blog_image">
						<img src="img/insta_1.png" className="img-responsive" alt="img" />
					</div>
					<div className="blog_text blog_text_2 blog_text_3 sp_p">
						<p>
							House 17 Luzon Avenue, Lethbridge Park, NSW, 2770 Melbourne,
							Australia
						</p>
					</div>
				</div>
			</div>

			<div className="archives_wrapper sp_archives_wrapper">
				<ul>
					<li>
						property type <span> house </span>
					</li>
					<li>
						property purpose <span> for sale </span>
					</li>
					<li>
						property area <span> 50-100 m2</span>
					</li>
					<li>
						size precise <span> 60m2 </span>
					</li>
					<li>
						property bathrooms <span> 04 </span>
					</li>
					<li>
						property rooms <span> 16 </span>
					</li>
					<li>
						property ownership <span> agent </span>
					</li>
					<li>
						energy efficienty <span> 300 kWh EP / m2, </span>
					</li>
					<li>
						Gas emissions Emissions <span> 100kg CO2 </span>
					</li>
					<li>
						sell price <span> $800000</span>
					</li>

					<li>
						views counter<span> 8287 </span>
					</li>
				</ul>
				<div className="contect_btn sp_btn_form">
					<ul>
						<li>
							<a href="#">
								{' '}
								<i className="fa fa-check-circle" /> buy property
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Details;
