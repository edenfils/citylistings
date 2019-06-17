import React from 'react';

function Search(props) {
	return (
		<div className="sidebar_widget">
			<h4>search</h4>
			<form className="search_form" role="search">
				<div className="form-group">
					<i className="fa fa-search" />
					<input
						type="text"
						className="form-control"
						placeholder="city"
						name="search"
						onChange={props.change}
					/>
				</div>
			</form>
		</div>
	);
}

export default Search;
