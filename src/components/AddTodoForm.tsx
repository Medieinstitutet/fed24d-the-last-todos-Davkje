import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";

type AddTodoFormProps = {
	addTodo: (todo: Todo) => void;
};

export const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
	const [todo, setTodo] = useState<Todo>(new Todo("", false));

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent) => {
		if (todo.name.trim() === "") return;
		e.preventDefault();
		addTodo(todo);
		setTodo(new Todo("", false));
	};

	return (
		<div className="p-4 rounded-2xl w-full flex flex-col items-center justify-start gap-2 border-2 border-gray-300 dark:border-gray-700">
			<h2 className="text-2xl">Add Todo</h2>
			<form className="flex flex-col gap-4 w-full max-w-lg" onSubmit={handleSubmit}>
				<label htmlFor="name" className="text-[clamp(1.2rem,2vw,1.6rem)] w-full flex justify-center gap-2">
					Name
				</label>
				<input
					id="name"
					name="name"
					type="text"
					placeholder="Todo"
					value={todo.name}
					onChange={handleChange}
					required
					className="text-lg w-full px-2 py-2 rounded-md bg-white border-2 border-gray-200 dark:border-white text-gray-800"
				/>
				<button
					type="submit"
					className="text-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800 font-bold py-2 px-2 rounded-md mt-4 border-2 border-gray-300 dark:border-gray-700 hover:dark:border-gray-800 text-gray-800 dark:text-white"
				>
					Add
				</button>
			</form>
		</div>
	);
};
