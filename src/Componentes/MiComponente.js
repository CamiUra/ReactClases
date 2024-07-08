import React from "react";

class MiComponente extends React.Component{ //La clase es una extensión del método Component
    render(){ //Muestra por pantalla
        return(
            <h1>Este es un componente</h1> /*Esto es lo que devuelve la clase */
        );
    }
}

export default MiComponente; //Exporta la clase para ser usada