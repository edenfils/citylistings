import React, { Fragment } from 'react';

function Testimonial(props) {
	let testimonials = props.testimonials;
	return (
		<Fragment>
			{testimonials.map((item, i) => {
				return (
					<div className="carousel-item" key={i}>
						<div className="card  valign-wrapper">
							<div className="card-image">
								<img src={item.image} alt="img" />
							</div>

							<div className="card-content center-align valign">
								<p>“ {item.reivew}”</p>

								<p className="card-title">
									{item.name}
									<span>{item.position}</span>
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</Fragment>
	);
}

export default Testimonial;
