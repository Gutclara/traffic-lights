import React, { useState } from "react";

//include images into your bundle
/*import rigoImage from "../../img/rigo-baby.jpg";*/

//create your first component
export function Home() {
	/*const [variable,funcion(que modifica mi varible)] = useState(aca pongo el estado inicial o por defecto, si quiero, sino no pongo nada)*/
	const [color, setColor] = useState();
	return (
		<div className="container bg-dark">
			<div className="color-red">
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => setColor("red")}></button>
			</div>
			<div className="color-yellow">
				<button
					type="button"
					className="btn btn-warning"
					onClick={() => setColor("yellow")}></button>
			</div>
			<div className="color-green">
				<button
					type="button"
					className="btn btn-info"
					onClick={() => setColor("green")}></button>
			</div>
		</div>
	);
}
