import React, { Component } from 'react';

class Formulario extends Component{
	//Refs para tomar los valores del form
		salidaRef = React.createRef();
		destinoRef = React.createRef();
		claseEconomicaRef = React.createRef();
		claseEjecutivaRef = React.createRef();

	cotizarViaje = (e) => {
		e.preventDefault();

	//Leer el plan
		const clase = this.claseEjecutivaRef.current.checked ? "Ejecutiva" : "Economica";

	//Obtener datos y crear el objeto
		const infoViaje = {
			salida : this.salidaRef.current.value,
			destino : this.destinoRef.current.value,
			clase : clase
		}

	//Enviar datos al componente principal
		this.props.cotizarViaje(infoViaje);
		}

	render() {
		return(
		<form className="form" onSubmit={this.cotizarViaje}>

			<div className="select">
				<label>Aeropuerto de salida: </label>
				<select name="salida" ref={this.salidaRef}>
					<option value="Maiquetia">Maiquetia</option>
					<option value="La chinita">La chinita</option>
					<option value="Jacinto Lara">Jacinto Lara</option>
				</select>
			
			<br/>

			<label>Aeropuerto de destino: </label>
			<select name="destino" ref={this.destinoRef}>
				<option value="John.F Kennedy">John.F Kennedy</option>
				<option value="Miami international">Miami international</option>
				<option value="Auckland airport">Auckland airport</option>
			</select>

			<br/>

			<label>Clase: </label>
			<input type="radio" ref={this.claseEconomicaRef} name="plan" value="Economica"/> Economica
			<input type="radio" ref={this.claseEjecutivaRef} name="plan" value="Ejecutiva"/> Ejecutiva
			</div>


			<br/>

			<button type="submit" className="cotizar">Cotizar</button> 
		</form>
		);
	}
	}
	
	

export default Formulario;