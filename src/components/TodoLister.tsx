import { Todo } from "../models/Todo";
import { TodoPresenter } from "./TodoPresenter";

type TodoProps = {
	todos: Todo[];
	onToggle: (id: number, checked: boolean) => void;
	onDelete: (id: number) => void;
};

export const TodoLister = ({ todos, onToggle, onDelete }: TodoProps) => {
	return (
		<div className="container">
			<h2>Todo List</h2>
			<div className="todo-list">
				{todos.map((todo) => (
					<TodoPresenter key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
				))}
			</div>
		</div>
	);
};
