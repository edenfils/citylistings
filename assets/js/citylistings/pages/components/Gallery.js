import React, { Fragment, Component } from 'react';
import 'magnific-popup';

class Gallery extends Component {
	state = {};

	componentDidMount() {
		this.initPopUp();
	}

	initPopUp = () => {
		$('.zoom_popup').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1]
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
	};

	render() {
		let property = this.props.house;
		let images = property.images;
		return (
			<div className="gallery_wrapper">
				<div className="tb_work_txt_wrapper">
					<div className="abt_txt_box">
						<div className="tb_left_heading_wraper_2 tb_left_heading_wraper">
							<h3>image gallery</h3>
						</div>
					</div>
				</div>
				<div className="portfolio-area">
					<div className="row three-column">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div id="gridWrapper" className="clearfix">
								<div className="row">
									{images.map((item, i) => {
										return (
											<div
												className="col-xs-12 col-sm-6 col-md-3 col-lg-3 portfolio-wrapper III_column"
												key={i}
											>
												<div className="portfolio-thumb">
													<div className="gc_filter_cont_overlay_wrapper">
														<img
															src={item}
															className="zoom image img-responsive"
															alt="service_img"
														/>
														<div
															className="gc_filter_cont_overlay zoom_popup"
															ref="popup"
														>
															<div className="gc_filter_text">
																<a href={item}>
																	<i className="flaticon-rec" />
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gallery;
