import React, { Component } from 'react';
import {primeraMayuscula} from "./helper";

class Resumen extends Component {
	mostrarResumen = () => {
		const{salida,destino,clase} = this.props.datos;

		if (!salida || !destino || !clase) return null;
			return(
				<div className="resumen">
					<h2>Resumen de cotizacion</h2>
					<li>Salida: {primeraMayuscula(salida)}</li>
					<li>Destino: {primeraMayuscula(destino)}</li>
					<li>Clase: {primeraMayuscula(clase)}</li>
				</div>
				)
	}

	render(){
		return(
			<div className="total">
				{this.mostrarResumen()}
			</div>
			)
	}
}

export default Resumen;