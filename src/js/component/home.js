import React, { useState } from "react";

//include images into your bundle
/*import rigoImage from "../../img/rigo-baby.jpg";*/

//create your first component
export function Home() {
	/*const [variable,funcion(que modifica mi varible)] = useState(aca pongo el estado inicial o por defecto, si quiero, sino no pongo nada)*/
	const [color, setColor] = useState();

	return (
		<div id="contenedor" className="container bg-dark">
			<div>
				<button
					type="button"
					id="botonRojo"
					className={color == "rojoIntenso" ? color : "red"}
					onClick={() => setColor("rojoIntenso")}></button>
			</div>
			<div>
				<button
					type="button"
					id="botonAmarillo"
					/*className="btn btn-warning"*/
					onClick={() => setColor("yellow")}></button>
			</div>
			<div className="color-green">
				<button
					type="button"
					id="botonVerde"
					/*className="btn btn-info"*/
					onClick={() => setColor("green")}></button>
			</div>
		</div>
	);
}
