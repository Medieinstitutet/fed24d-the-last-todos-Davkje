import "./style/App.css";
import { Header } from "./components/Header";
import { useState } from "react";
import { TodoLister } from "./components/TodoLister";
import { Todo } from "./models/Todo";
import { AddTodoForm } from "./components/AddTodoForm";
import { SortSelector } from "./components/SortSelector";

const App = () => {
	// TODO LOCAL STORAGE
	const defaultTodos = [new Todo("Create Todo", false), new Todo("Finish Todo", false), new Todo("Delete Todo", false)];
	const savedTodos = localStorage.getItem("todos");

	if (!savedTodos) {
		localStorage.setItem("todos", JSON.stringify(defaultTodos));
	}

	// TODO STATE
	const [todos, setTodos] = useState<Todo[]>(savedTodos ? (JSON.parse(savedTodos) as Todo[]) : defaultTodos);

	// SORT STATE
	const [sortBy, setSortBy] = useState<"name-asc" | "name-desc" | "status">("name-asc");

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

	const sortedTodos = [...todos].sort((a, b) => {
		if (sortBy === "name-asc") {
			return a.name.localeCompare(b.name);
		} else if (sortBy === "name-desc") {
			return b.name.localeCompare(a.name);
		} else if (sortBy === "status") {
			return Number(a.isDone) - Number(b.isDone);
		}
		return 0;
	});

	return (
		<>
			<Header />
			<div className="wrapper w-full max-w-4xl p-4 flex flex-col justify-center items-center gap-4">
				<AddTodoForm addTodo={addTodo}></AddTodoForm>
				<SortSelector sortBy={sortBy} setSortBy={setSortBy}></SortSelector>
				<TodoLister todos={sortedTodos} onToggle={updateTodoIsDone} onDelete={deleteTodo}></TodoLister>
			</div>
		</>
	);
};

export default App;
