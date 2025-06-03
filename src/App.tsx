import "./style/App.scss";
import { Header } from "./components/Header";
import { useState } from "react";
import { TodoLister } from "./components/TodoLister";
import { Todo } from "./models/Todo";
import { AddTodoForm } from "./components/AddTodoForm";

const App = () => {
	// TODO LOCAL STORAGE
	const defaultTodos = [new Todo("Create Todo", false), new Todo("Finish Todo", false), new Todo("Delete Todo", false)];
	const savedTodos = localStorage.getItem("todos");

	if (!savedTodos) {
		localStorage.setItem("todos", JSON.stringify(defaultTodos));
	}

	// TODO STATE
	const [todos, setTodos] = useState<Todo[]>(savedTodos ? (JSON.parse(savedTodos) as Todo[]) : defaultTodos);

	// TODO FUNCTIONS
	const addTodo = (todo: Todo) => {
		setTodos([...todos, todo]);
		localStorage.setItem("todos", JSON.stringify([...todos, todo]));
	};

	const updateTodoIsDone = (id: number, checked: boolean) => {
		const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, isDone: checked } : todo));
		setTodos(updatedTodos);
		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	};

	const deleteTodo = (id: number) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
		localStorage.setItem("todos", JSON.stringify(updatedTodos));
	};

	return (
		<>
			<Header />
			<div className="wrapper">
				<AddTodoForm addTodo={addTodo}></AddTodoForm>
				<TodoLister todos={todos} onToggle={updateTodoIsDone} onDelete={deleteTodo}></TodoLister>
				<p>{JSON.stringify(todos, null, 2)}</p>
			</div>
		</>
	);
};

export default App;
