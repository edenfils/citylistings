import React from 'react';
import { Link } from 'react-router-dom';

function Parallax(props) {
	const background = '../../../../../public/img/parallax.jpg';
	return (
		<div
			className="para_img_wrapper"
			style={{
				backgroundImage: `url(/img/parallax.jpg)`
			}}
		>
			<div className="parallax_overlay" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
						<div className="tb_work_txt_wrapper">
							<div className="slider_heading_wrapper">
								<h3>modern asset in town</h3>
								<p>
									But I must explain you how all this mistaken idea of
									denouncing pleasure and praisinga
									<br /> complete account of the system.
								</p>
								<div className="deals_btn slider_para_btn">
									<ul>
										<li>
											<Link to="/listings">explore more</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Parallax;
