import React, { useState, useEffect, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  /*const handleClick = (aumentar) => {
    if (aumentar) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };*/

  const aumentar = () => {
    //alert("Click");
    setCount(count + 1);
  };

  const disminuir = () => {
    //alert("Click");
    setCount(count - 1);
  };

  //useEffect(() => {
  //console.log('Diste click ${count} veces.');
  /*
    No entiendo por qué no me sale
    como le sale al profesor.
    */
  //});

  return (
    <div className="contenedorContador">
      <h1>Contador</h1>
      <button className="btn" onClick={() => aumentar()}>
        Aumentar
      </button>
      <p>Nuestro contador es {count}</p>
      <button className="btn" onClick={() => disminuir()}>
        Disminuir
      </button>
    </div>
  );
};

export default Counter;
