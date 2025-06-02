import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";

type AddTodoFormProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
  const [todo, setTodo] = useState<Todo>(new Todo("", false));


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo(new Todo("", false)); // Reset the form after submission
  }

	return (
		<div className="container">
      <h2>Add todo</h2>
			<form className="form-container" onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Todo" value={todo.name} onChange={handleChange}/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};
