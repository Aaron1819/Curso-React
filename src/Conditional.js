import React, { Fragment } from "react";

const Conditional = (props) => {
  console.log("props", props);
  const { totalMessages } = props;
  const { totalSneakers } = props;
  return (
    <div className="contenedorConditional">
      <h1>Condicionales</h1>
      <h2>Elemento 1</h2>
      {totalMessages > 0 ? (
        <h2>Tienes mensajes</h2>
      ) : (
        <h2>No tienes mensajes</h2>
      )}

      {totalSneakers > 20 ? (
        <h2>Has alcanzado tu límite de Sneakers, no puedes adquirir más.</h2>
      ) : (
        <h2>Aún puedes adquirir algunos cuantos Sneakers más.</h2>
      )}
    </div>
  );
};


export default Conditional;
