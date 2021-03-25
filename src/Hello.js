import React from "react";

const Hello = (props) => {
  console.log("Props", props);
  const { name, age } = props;
  return (
    <div className="contenedorSaludo">
      <h1>Saludo</h1>
      <p>
        Hola {name}, tienes {age} años.
      </p>
    </div>
  );
};

export default Hello;
