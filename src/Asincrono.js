import React, {Fragment} from 'react';

const Asincrono = () => {

    const uno = () => {
        console.log("uno");
        dos();
        console.log("cuatro");
    }

    const dos = () => {
        console.log("dos");
        setTimeout(() =>{
            console.log("tres");
        }, 1000)
    }   

    const handleClickAsincrono = () => {
        console.log("se dió clic");
        console.log("Inicio");
        uno();
        console.log("Fin");
    }

    const sincronoUno = () => {
        console.log("Uno");
        sincronoDos();
    }

    const sincronoDos = () => {
        console.log("dos");
    } 

    const handleClickSincrono = () => {
     console.log("Inicio");
     sincronoUno();
     console.log("fin");
    }

    return(
        <Fragment>
            <button onClick={handleClickSincrono}>Click Sincrono</button>
            <button onClick={handleClickAsincrono}>Click Asincrono</button>
        </Fragment>
    )
}

export default Asincrono;