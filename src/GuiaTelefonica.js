import React, { useState, Fragment } from 'react';
import './styles.css';

const GuiaTelefonica = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Aaron', number: '3234567673' }
  ]); 

  const [ newName, setNewName ] = useState('');
  const [ newTele, setNewTele ] = useState('');

  const handleChangeName = e =>{
    const { target } = e;
    const { value } = target;
      setNewName(value);
  }

  const handleChangeTele = e => {
    const { target } = e;
    const { value } = target;
    setNewTele(value);
  }

  const addPerson = e => {
    e.preventDefault();
    if(newTele.length < 10){
      alert("El número debe ser mayor a 10");
    }else{
     let count = 0;
      for(let i=0;i<=persons.length - 1; i++){
        persons[0].number.includes() 
        if(persons[i].number == newTele){
          alert("Número existente, pruebe con otro");
          count = 1;
        }
      }
      if(count == 0){
       const NewPersonObjet = {
          name: newName,
          number: newTele
        }
        setPersons(persons.concat(NewPersonObjet));
        setNewName('');
        setNewTele('');
      }  
    }
  }

  return (
    <Fragment>
      <h2>Guía telefónica</h2>
      <form onSubmit={addPerson}>
        <div>
          Nombre: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          Teléfono: <input value={newTele} onChange={handleChangeTele} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          <li className="list_persons num"><p>Número</p></li>
          <li className="list_persons"><p>Nombre</p></li>
          <li className="list_persons ape"><p>Teléfono</p></li>
        </ul>
      {persons.map((personas, index) => {
        return(
          <ul key={index}>
            <li  className="list_persons num">{index + 1}</li>
            <li className="list_persons">{personas.name}</li>
            <li className="list_persons ape">{personas.number}</li>
          </ul>
        )
      })}
    </Fragment>
  )
}
export default GuiaTelefonica;