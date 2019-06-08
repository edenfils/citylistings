import React, { Fragment } from 'react';

function ListingInfo(props) {
	return (
		<Fragment>
			<div className="video_img_section_wrapper">
				<div className="video_img_section">
					<div className="owl-carousel owl-theme">
						<div className="item" data-hash="zero">
							<div className="btn_sale">sell $800,000</div>
							<img
								src="img/galery_blog.jpg"
								className="img-responsive"
								alt="video_img"
							/>
						</div>
						<div className="item" data-hash="one">
							<div className="btn_sale">sell $800,000</div>
							<img
								src="img/galery_blog.jpg"
								className="img-responsive"
								alt="video_img"
							/>
						</div>
						<div className="item" data-hash="two">
							<div className="btn_sale">sell $800,000</div>
							<img
								src="img/galery_blog.jpg"
								className="img-responsive"
								alt="video_img"
							/>
						</div>
					</div>
				</div>

				<div className="video_nav_img">
					<h3>1 of 8 photos</h3>
					<div className="vedio_nav_wrappper">
						<div className="vedio_img_btm_wrapper">
							<a className="button secondary url owl_nav" href="#zero">
								<div className="gc_filter_cont_overlay" />
								<img
									src="img/galery_1.png"
									className="img-responsive"
									alt="nav_img"
								/>
							</a>
						</div>
					</div>
					<div className="vedio_nav_wrappper">
						<div className="vedio_img_btm_wrapper">
							<div className="gc_filter_cont_overlay" />
							<a className="button secondary url owl_nav" href="#one">
								<div className="gc_filter_cont_overlay" />
								<img
									src="img/galery_1.png"
									className="img-responsive"
									alt="nav_img"
								/>
							</a>
						</div>
					</div>
					<div className="vedio_nav_wrappper">
						<div className="vedio_img_btm_wrapper">
							<a className="button secondary url owl_nav" href="#two">
								<div className="gc_filter_cont_overlay" />
								<img
									src="img/galery_1.png"
									className="img-responsive"
									alt="nav_img"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="lest_news_cont_wrapper">
				<div className="tb_work_txt_wrapper">
					<div className="abt_txt_box">
						<div className="tb_left_heading_wraper_2 tb_left_heading_wraper">
							<h3>house description</h3>
						</div>
					</div>
				</div>
				<div>
					<p>
						Web typography is now more stylish and malleable than ever before.
						New CSS3 properties allow for trul unique typographic effects that
						in the past wouldve required images and custom JavaScript.Each of
						the following code snippets. This is shop version of Lorem Ipsum.
						Proin gravida nibh duma nibh vel velit auctor aliquet. Aenean
						sollicitudin, lorem quis auctor, nisi consequat ipsum, nec sagittis
						sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
						amet mauris.
						<br />
						<br /> For this post I have collected 25 small web-based apps and
						tools that will in one way or another offer quick solutions to many
						of those frustrating and time-consuming tasks you will often have to
						overcomesed apps and tools that.
						<br />
						<br />
						<i className="para_itag">
							Presented home which is well maintained with long term tenant of 4
							years! Situated in a high demand location, in close proximity to
							local amenities, public transport.
						</i>
					</p>
					<div className="abt_btn property_single_btn">
						<ul>
							<li>
								<a href="#">offers over $45,999</a>
							</li>
							<li>
								<a href="#">contact our agent</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default ListingInfo;
