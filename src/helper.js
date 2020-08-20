import React, { Component } from 'react';

export function calcularSalida (salida){
	let incremento;

	switch(salida){
		case "Maiquetia" :
		incremento = 1.20;
		break;

		case "La chinita" :
		incremento = 1.30;
		break;

		case "Jacinto Lara" :
		incremento = 1.40;
		break;

		default:
		break;
	}

	return incremento;
}


export function calcularDestino (destino){
	let incremento2;

	switch(destino){
		case "John.F Kennedy" :
		incremento2 = 1.40;
		break;

		case "Miami international" :
		incremento2 = 1.20;
		break;

		case "Auckland airport" :
		incremento2 = 1.90;
		break;

		default:
		break;
	}

	return incremento2;
}

export function obtenerClase(clase){
	return (clase === "Economica") ? 1.20 : 1.70;
}

export function primeraMayuscula(texto){
	return texto.charAt(0).toUpperCase() + texto.slice(1);
}