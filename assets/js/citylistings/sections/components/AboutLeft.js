import React from 'react';

function AboutLeft(props) {
	return (
		<div className="about_left_wrapper">
			<div className="tb_work_txt_wrapper">
				<div className="abt_txt_box heading_white_wrapper">
					<div className="tb_left_heading_wraper">
						<h3>what do you know about us</h3>
					</div>
					<p>
						Fusce nibh nec, tincidunt ip et sem elementum, mis nibh nec,
						tincidunt ipsum etiau eu ctor turpis Quisque sitmi lementum mis nibh
						nec tincidunt ipsumelit. Cras vel duilementum, mis nibh nec
						tincidunt ipsumelit. vel orciarel gravida rpis. Quisque sitmi
						tincidunt ipsum etiau.
					</p>
					<div className="abt_checkbox">
						<ul>
							<li>
								<a href="#">
									<i className="fa fa-check-square" />
									mis nibh nec nibh nec ipsum tincidunt ipsumelit.
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-check-square" />
									lementum mis nibh Quisque nibh nec Quisque sitmi leme.
								</a>
							</li>
						</ul>
					</div>
					<div className="abt_btn">
						<ul>
							<li>
								<a href="#">see all rental</a>
							</li>
							<li>
								<a href="#">book your</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutLeft;
