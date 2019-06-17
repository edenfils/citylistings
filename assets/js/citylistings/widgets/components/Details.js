import React from 'react';

function Details(props) {
	let house = props.house;
	return (
		<div class="sidebar_widget sidebar_widget_2">
			<div className="wrapper_second_blog wrapper_second_blog_2 sp_blog_sidebar">
				<h4>estate details</h4>
				<div className="blog_wrapper1">
					<div className="blog_image">
						<img src={house.thumb} className="img-responsive" alt="img" />
					</div>
					<div className="blog_text blog_text_2 blog_text_3 sp_p">
						<p>
							{`${house.address}, ${house.city},
							${house.state}`}
						</p>
					</div>
				</div>
			</div>

			<div className="archives_wrapper sp_archives_wrapper">
				<ul>
					<li>
						property type <span> {house.type} </span>
					</li>
					<li>
						property purpose <span> {house.purpose}</span>
					</li>
					<li>
						property area <span> {house.area} Sq Ft</span>
					</li>
					<li>
						size precise <span> {house.size} </span>
					</li>
					<li>
						property bathrooms <span> {house.bathrooms} </span>
					</li>
					<li>
						property rooms <span> {house.rooms} </span>
					</li>
					<li>
						property ownership <span> {house.owner} </span>
					</li>
					<li>
						sell price <span> $ {house.price}</span>
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
