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
		<div className="flex-auto min-w-2xs border-2 border-gray-300 dark:border-gray-500 shadow rounded-2xl p-4 flex flex-col items-center gap-2">
			<h2 className="text-xl">{todo.name}</h2>
			<label className="flex justify-center gap-2">
				{todo.isDone ? "Done" : "Not Done"}
				<input type="checkbox" id="isDone" checked={todo.isDone} onChange={handleChange}  className="h-5 w-5 rounded accent-green-600"/>
			</label>
			<button onClick={handleDelete} className="flex bg-gray-300 dark:bg-gray-700 hover:bg-red-500 font-bold py-2 px-4 rounded-md">
				Remove
				<span className="material-icons">delete</span>
			</button>
		</div>
	);
};
