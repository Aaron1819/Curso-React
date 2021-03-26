import React,{ useState, Fragment, useEffect } from 'react';
import './styles.css';
const Rest = () => {
    const [ users, setUsers ] = useState([ ]);

    useEffect(() => {
        handleLoadUsers();
    }, [ ]); 

    const handleLoadUsers = () => {
        console.log("Cargando usuarios...");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setUsers(json);
        });
    }
    console.log(users);
    return( 
        <Fragment>
            <h1>Usuarios</h1>
            {
                users.length === 0 ? (
                    <Fragment>
                        <p>No hay usuarios aun</p>
                        <button onClick={handleLoadUsers}>Agregar usuarios</button>
                    </Fragment>
                ) : (
                   <Fragment>
                        <h1>Hay usuarios</h1>
                        <ul className="list">
                            <li className="title-list num"><h3>Número</h3></li>
                            <li className="title-list"><h3>Nombre</h3></li>
                            <li className="title-list"><h3>Email</h3></li>
                        </ul>
                        {users.map((users, index) =>{
                            return(
                                <ul className="list" key={users.id}>
                                    <li className="title-list num">{index + 1}</li>
                                    <li className="title-list">{users.name}</li>
                                    <li className="title-list">{users.email}</li>
                                </ul>
                            );
                        })}
                   </Fragment>
                )
            }
        </Fragment>
    );
}

export default Rest;