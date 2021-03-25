import React, { Fragment } from "react";

const Conditional = (props) => {
  console.log("props", props);
  const { totalMessages } = props;
  const { totalSneakers } = props;

  //Render
  //Para poder usar un condicional dentro
  //de mi renderizado, debo de usarlo de la siguiente manera
  //si uso if else debe de ser {condicion ? ( if ) : ( helse
  //si solamente necesito la condicion if, (condicion) && JSX
  return (
    <div className="contenedorConditional">
      <h1>Condicionales</h1>
      <h2>Elemento 1</h2>
      {totalMessages > 0 ? (
        <h2>Tu tienes mensajes</h2>
      ) : (
        <h2>No tienes mensajes</h2>
      )}

      {totalSneakers > 20 ? (
        <h2>Has alcanzado tu limite de Sneakers, no puedes adquirir más.</h2>
      ) : (
        <h2>Aún puedes adquirir algunos cuantos Sneakers más.</h2>
      )}
    </div>
  );
};

//Dentro de render
//Un if simple
//{totalMessages > 0 && <h2>Tu tienes mensajes</h2>}

export default Conditional;
