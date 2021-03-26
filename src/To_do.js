import React,{ useState, Fragment, useEffect } from 'react';
import './styles.css';
const To_do = () => {
    const [  todos, setTodos ] = useState([ ]);
    const [  allDate, setAll ] = useState([ ]);
    const [ estado, setStado ] = useState(1);
    useEffect(() => {
        fetchData();
    }, [ ]); 

    const fetchData = async () => {
        const response  = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setAll(data);
        for(let i=0;i<=19; i++) {
            setTodos(prevItems => [...prevItems, data[i]]);
        }
    }

    const handleClick = () => {
        setStado(estado + 1);
        if(estado === 3){
            setStado(1);
        }    
    } 
    console.log(estado);
    const todosAmostrar = todos.filter((todos) => todos.completed === true);
    
    return( 
        <Fragment>
            <h1>To do</h1>
            <button onClick={handleClick}>Siguiente</button>
            {
                estado === 1 ?  (
                    <h1 className="title-todo">Los primeros 20 registros</h1>
                ) : (
                    estado === 2 ? (
                        <h1 className="title">Filtrar registros</h1>
                    ) : (
                        estado === 3 ? (
                            <h1 className="title">Todos los registros</h1>
                        ) : (
                            <h1>No hay registros</h1>
                        )
                    )
                )
            }
            <ul className="list">
                <li className="title-list num"><h3>Número</h3></li>
                <li className="title-list"><h3>Title</h3></li>
            </ul>
          {
            estado === 1 ? (
            todos.map(datos => {
                return(
                    <Fragment>
                        <ul className="list">
                            <li className="title-list num">{datos.id}</li>
                            <li className="title-list">{datos.title}</li>
                        </ul>       
                    </Fragment>
                );
            })
            ) : (
                estado === 2 ? (
                    todosAmostrar.map(datos => {
                        return(
                            <Fragment>
                                 <ul className="list">
                                    <li className="title-list num">{datos.id}</li>
                                    <li className="title-list">{datos.title}</li>
                                </ul>      
                            </Fragment>
                        );
                    })
                ) : (
                    estado === 3 ? (
                        allDate.map(datos => {
                            return(
                                <Fragment>
                                     <ul className="list">
                                        <li className="title-list num">{datos.id}</li>
                                        <li className="title-list">{datos.title}</li>
                                    </ul>      
                                </Fragment>
                            );
                        })  
                    ) : (
                        <h1>gre</h1>
                    )
                )
            )
          }
        </Fragment>
    );
}

export default To_do;