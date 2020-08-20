import React, { Component } from 'react';

class Resultado extends Component{
	render() {
		const resultado = this.props.resultado;
		const mensaje = (!resultado) ? "Rellena los campos para cotizar" : "El costo total es de $";
	
	return(
		<div className="total">
			{mensaje}
	
			<span>{resultado}</span>
		</div>
		)
	}
}

export default Resultado;