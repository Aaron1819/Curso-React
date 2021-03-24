import React from "react";

const Nota = props => {
	const { note } = props;
	return <li> {note.content}</li>
};

const Notas = [props] => {
	const { notes } = props;
	console.log(notes);
	resturn {
		<div>
		<h1>Notas</h1>
		<ul>
		{
			notes.map((note) =>{
				<NOta key={note.id} note = {note} />
			)}}
		</ul>
		</div>
	};
};
export default Notas;