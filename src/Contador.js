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
  const subir = () => {
    setCount(count + 1);
  };

  const bajar = () => {
    setCount(count - 1);
  };

  return (
    <div className="contenedorContador">
      <h1>Contador</h1>
      <button onClick={() => subir()}>Subir</button>
      <p>El contador esta en: {count}</p>
      <button onClick={() => bajar()}>Bajar</button>
    </div>
  );
};

export default Counter;
