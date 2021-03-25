import "./styles.css";
//import Hola from "./Hello";
//import Contador from "./Counter";
//import Cursos from "./Courses";
import GiaTelefonica from "./GiaTelefonica";
//import Condicional from "./Conditional";
//Const es un tipo de declaración de variable
//que nos dice que la variable es la misma
//en todo su tiempo de vida.

//Let es un tipo de declaración de variable
//que nos dice que la variable puede cambiar
//en el transcurso de su vida.

const notes = [
  {
    id: 1,
    content: "HTML es muy facil",
    date: "2020-12-12",
    important: true
  },
  {
    id: 2,
    content: "Los navegadores solo pueden ejecutar JS, HTMl y CSS.",
    date: "2020-01-01",
    important: false
  },
  {
    id: 3,
    content: "Para hacer peticines los métodos más utilizados son GET y POST.",
    date: "2020-01-02",
    important: false
  }
];

const courses = [
  {
    id: 1,
    name: "Half Stack aplication development",
    parts: [
      {
        id: 1,
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        id: 2,
        name: "Using props to pass data",
        exercises: 7
      },
      {
        id: 3,
        name: "State of component",
        exercises: 14
      },
      {
        id: 4,
        name: "Redux",
        exercises: 11
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        id: 1,
        name: "Routing",
        exercises: 10
      },
      {
        id: 2,
        name: "Middlewares",
        exercises: 7
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <GiaTelefonica />
    </div>
  );
}
