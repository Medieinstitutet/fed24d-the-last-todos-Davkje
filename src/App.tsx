import "./style/App.scss";

import { Header } from "./components/Header";
import { useState } from "react";
import { TodoLister } from "./components/TodoLister";
import { Todo } from "./models/Todo";

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([new Todo("Work", false), new Todo("Shop", false), new Todo("Code", true), new Todo("Sleep", true)]);

	const updateTodoIsDone = (id: number, checked: boolean) => {
		const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, isDone: checked } : todo));
		setTodos(updatedTodos);
	};

	const deleteTodo = (id: number) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	return (
		<>
			<Header />
			<div className="wrapper">
				<TodoLister todos={todos} onToggle={updateTodoIsDone} onDelete={deleteTodo}></TodoLister>
				<p>{JSON.stringify(todos, null, 2)}</p>
			</div>
		</>
	);
};

export default App;
