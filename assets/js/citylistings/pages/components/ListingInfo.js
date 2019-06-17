import React, { Fragment } from 'react';

function ListingInfo(props) {
	let property = props.house;
	let images = property.images;
	return (
		<Fragment>
			<div className="video_img_section_wrapper">
				<div className="video_img_section">
					<div className="owl-theme">
						{images.map((item, i) => {
							return (
								<div className="item" data-hash={i} key={i}>
									<div className="btn_sale">sell {property.price} </div>
									<img src={item} className="img-responsive" alt="video_img" />
								</div>
							);
						})}
					</div>
				</div>

				<div className="video_nav_img">
					<h3>1 of 8 photos</h3>
					{images.map((item, j) => {
						return (
							<div className="vedio_nav_wrappper" key={j}>
								<div className="vedio_img_btm_wrapper">
									<a className="button secondary url owl_nav" href={`#${j}`}>
										<div className="gc_filter_cont_overlay" />
										<img src={item} className="img-responsive" alt="nav_img" />
									</a>
								</div>
							</div>
						);
					})}
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
					<p>{property.description}</p>
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
