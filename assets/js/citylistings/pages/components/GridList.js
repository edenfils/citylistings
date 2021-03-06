import React from 'react';

function GridList(props) {
	return (
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div className="tab-content">
					{props.view === 'grid' ? (
						<div id="grid" className="tab-pane fade active in">
							<div className="row">{props.children}</div>
						</div>
					) : (
						<div id="list" className="tab-pane fade active in">
							<div className="row">{props.children}</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default GridList;
