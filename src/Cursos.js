import React from "react";

const Courses = (props) => {
  const { courses } = props;

  return (
    <div className="contenedorCursos">
      <h1>Cursos</h1>
      {courses.map((course) => {
        console.log("course", course);
        const { name, id, parts } = course;
        let totalExercises = 0;

        return (
          <div key={id}>
            <h2>{name}</h2>
            {parts.map((part) => {
              const {
                name: namePart,
                id: idPart,
                exercises: exercisesPart
              } = part;
              console.log("part", part);

              totalExercises = totalExercises + exercisesPart;

              return (
                <div key={idPart}>
                  <p>
                    {namePart} {exercisesPart}
                  </p>
                </div>
              );
            })}
            <h3>Total of {totalExercises} exercises.</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
