import React, { Component } from 'react';
import Header from "./Header";
import Formulario from "./Form";
import  Resumen from "./Resumen";
import  Resultado from "./Resultado";
import {calcularDestino, calcularSalida, obtenerClase} from "./helper";

class App extends Component {
  state = {
    resultado:"",
    datos:{}
  }

  cotizarViaje = (datos) =>{
    const{salida,destino,clase} = datos;

    let resultado = 300;

    resultado = calcularSalida(salida) * resultado;
    resultado = calcularDestino(destino) * resultado;

    let incrementoClase = obtenerClase(clase);
    resultado = parseFloat(incrementoClase * resultado).toFixed(2);

    const datosViaje = {
      salida:salida,
      destino:destino,
      clase:clase
    }

    this.setState({
      resultado:resultado,
      datos:datosViaje
    })
  }

  render() {
    
    return (
      <div>
        <Header
          titulo="COTIZADOR DE VIAJES"
        />

        <Formulario
          cotizarViaje={this.cotizarViaje}
        />

      <Resumen
        datos={this.state.datos}
      />

      <div className="resultado">
      <Resultado
        resultado={this.state.resultado}
      />
      </div>
      </div>
    );
  }
}

export default App;
