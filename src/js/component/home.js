import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container bg-dark">
			<div className="color-red">
				<button type="button" className="btn btn-danger"></button>
			</div>
			<div className="color-yellow">
				<button type="button" className="btn btn-warning"></button>
			</div>
			<div className="color-green">
				<button type="button" className="btn btn-info"></button>
			</div>
		</div>
	);
}
