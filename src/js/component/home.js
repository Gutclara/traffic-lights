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
					className={
						color == "amarilloIntenso" ? color : "amarillito"
					}
					onClick={() => setColor("amarilloIntenso")}></button>
			</div>
			<div className="color-green">
				<button
					type="button"
					id="botonVerde"
					className={color == "verdeIntenso" ? color : "verdecito"}
					onClick={() => setColor("verdeIntenso")}></button>
			</div>
		</div>
	);
}
