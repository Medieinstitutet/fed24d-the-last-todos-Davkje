import "./style/App.scss";

import { Header } from "./components/Header";
import { useState } from "react";
import { TodoLister } from "./components/TodoLister";
import { Todo } from "./models/Todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Work", false),
    new Todo("Shop", false),
    new Todo("Code", true),
    new Todo("Sleep", true)
  ]);

	return (
		<>
			<Header />
			<div className="wrapper">
        <TodoLister todos={todos}></TodoLister>
			</div>
		</>
	);
}

export default App;
