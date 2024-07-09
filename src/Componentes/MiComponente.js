import React from "react";

class MiComponente extends React.Component { //La clase es una extensión del método Component
    render() { //Muestra por pantalla
        const vehiculo = {
            detalles: ['2 ruedas', '4 puertas', '5 peso'],
            marca: 'Mitsubishi',
            precio: 15000
        }
        return (
            <div className="mi-componente">
                <h1>Este es un componente</h1> {/* /*Esto es lo que devuelve la clase */}
                <h1>{'Marca: ' + vehiculo.marca}</h1> {/* llama una propiedad del objeto */}
                <h1>{'Detalles: ' + vehiculo.detalles.join(', ')}</h1> {/* el método "join" concatena un string entre
                                                                        los elementos del array*/}
                <h1>{'Precio: ' + vehiculo.precio}</h1>
            </div>
        );
    }
}

export default MiComponente; //Exporta la clase para ser usada