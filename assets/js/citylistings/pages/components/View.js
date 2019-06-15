import React from 'react';

function View(props) {
	return (
		<div className="left_side_category_wraper">
			<div className="filter-area">
				<div className="showpro">
					<h4>listing style</h4>
				</div>
				<select name="sortby" onChange={props.change} defaultValue="default">
					<option value="default">sort by</option>
					<option value="price-dsc">Lowest Price</option>
					<option value="price-asc">Highest Price</option>
				</select>
				<div className="list-grid">
					<ul className="list-inline nav nav-pills">
						<li className="active">
							<a
								data-toggle="pill"
								href="#grid"
								onClick={props.setView}
								data-view="grid"
							>
								<i className="fa fa-th-large" data-view="grid" />
							</a>
						</li>
						<li>
							<a
								data-toggle="pill"
								href="#list"
								onClick={props.setView}
								data-view="list"
							>
								<i className="fa fa-list" data-view="list" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default View;
