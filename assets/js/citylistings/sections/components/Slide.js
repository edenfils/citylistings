import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Slide(props) {
	let property = props.properties;
	return (
		<Fragment>
			{property.map((item, i) => {
				if (i <= 2) {
					return (
						<div data-src={item.thumb} key={i}>
							<div className="camera_caption">
								<div className="container">
									<div className="slider_cntnt">
										<h1 className="wow fadeInUp animated" data-wow-delay="0.0s">
											{item.address}
										</h1>
										<h4 className="wow fadeInUp animated" data-wow-delay="0.0s">
											{`${item.city}, ${item.state}`}
										</h4>
										<p className="wow fadeInUp animated" data-wow-delay="0.0s">
											{' '}
											<sup>$ </sup>
											{item.price}
											<span> {item.purpose} </span>
										</p>
									</div>
									<div
										className="pst_btn_form slider_btn_wraper wow fadeInUp animated"
										data-wow-delay="0.0s"
									>
										<ul>
											<li>
												<Link to={`/property/${item.slug}`}>read more</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					);
				}
			})}
		</Fragment>
	);
}

export default Slide;
