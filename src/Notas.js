import React, { useState, useEffect } from "react";

const Nota = (props) => {
  //console.log("propsNota", props);
  const { noteNote } = props;

  return <li>{noteNote.content}</li>;
};

const Notes = (props) => {
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setNuevaNota] = useState("");
  const [showImportant, setsShowImportant] = useState(false);
  console.log("nuevaNota", nuevaNota);
  //setnotas puede ir en cualquier lado, excepto en mi returno (render)
  //notas si puede ir en cualquier lado.
  //console.log(notes);

  useEffect(() => {
    console.log("Notas", notas);
  }, [notas]);

  const addNote = (e) => {
    e.preventDefault();
    //Prevent default nos sirve para prevenir el
    //comportamiento NORMAL del evento.
    console.log(e);

    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };
    setNotas(notas.concat(noteObject));
    //console.log("Noteobject", noteObject);
  };

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;
    setNuevaNota(value);
    console.log("Mi nota es: ", value);
    //console.log("Mi nota es: ", e.target.value);
  };

  const handleButton = () => {
    setsShowImportant(!showImportant);
  };

  console.log("ShowImportant", showImportant);

  const notasAMostrar = showImportant
    ? notas.filter((note) => note.important === true)
    : notas;

  console.log("Notas a mostrar", notasAMostrar);
  //Diversos eventos
  /*
  onSubmit
  onClick
  onChange
  onMouseEnter
  onMouseLeave
  */

  //Dentro del return siempre para llamar
  //a las variables deben de ir con llaves.
  //Ecmascript 6
  //Map
  return (
    <div className="contenedorNotas">
      <h1>Notas</h1>
      <button onClick={handleButton}>
        Mostrar
        {showImportant ? "todos" : " notas"}
      </button>
      <ul>
        {notasAMostrar.map((noteArray) => (
          <Nota key={noteArray.id} noteNote={noteArray} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={nuevaNota} onChange={handleNoteChange} />
        <button type="submit">Guardar nota </button>
      </form>
    </div>
  );
};
/*<ul>
{notes.map((noteArray) => (
  <Nota key={noteArray.id} noteNote={noteArray} />
))}
</ul>*/

//Imprimir una lista de un array (Dentro de return).
/*
//console.log(note);
<ul>
  <li>{notes[0].content}</li>
  <li>{notes[1].content}</li>
  <li>{notes[2].content}</li>
</ul>
*/

//Otra forma de imprimir una lista de un array
/*
<ul>
  {notes.map((note) => {
    //console.log(note);
    return <li key={note.id}>{note.content}</li>;
  })}
</ul>
*/
export default Notes;
