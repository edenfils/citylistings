import React from 'react';

function Amenities(props) {
	let outdoor = props.house.outdoor;
	let indoor = props.house.indoor;
	return (
		<div className="indoor_wrapper">
			<div className="tb_work_txt_wrapper">
				<div className="abt_txt_box">
					<div className="tb_left_heading_wraper_2 tb_left_heading_wraper">
						<h3>Indoor Amenities</h3>
					</div>
				</div>
			</div>
			<div className="vk_service_inner_setionn sp_indoor_cntnt_wrapper">
				<div className="row">
					{outdoor.map((item, i) => {
						<div
							className="col-lg-3 col-md-3 col-sm-6 col-xs-6 sp_width"
							key={i}
						>
							<div className="ci_icon_wrapper_list sp_indor_box">
								<div className="ci_icon_img_effect ci_icon_img_effect_2 ci_icon_img_effect_3">
									<div className="ci_icon_img_list sp_img_list">
										<i className={`flaticon-${item}`} />
										<div className="btc_step_overlay" />
									</div>
								</div>
								<div className="ci_icon_content_left sp_content_left sp_cnttnt">
									<h2>
										<a href="#">{item}</a>
									</h2>
								</div>
							</div>
						</div>;
					})}
				</div>
			</div>
		</div>
	);
}

export default Amenities;
