import type { ChangeEvent } from "react";
import type { Todo } from "../models/Todo";

type TodoProps = {
	todo: Todo;
	onToggle: (id: number, checked: boolean) => void;
  onDelete: (id: number) => void;
};

export const TodoPresenter = ({ todo, onToggle, onDelete }: TodoProps) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onToggle(todo.id, event.target.checked);
	};

  const handleDelete = () => {
    onDelete(todo.id);
  };

	return (
		<div className="todo-container">
			<h2>{todo.name}</h2>
			{/* <p>{todo.id}</p> */}
			<label>
				{todo.isDone ? "Done" : "Not Done"}
				<input type="checkbox" id="isDone" checked={todo.isDone} onChange={handleChange} />
			</label>
			<button onClick={handleDelete} className="delete-button">
				Remove
				<span className="material-icons">delete</span>
			</button>
		</div>
	);
};
