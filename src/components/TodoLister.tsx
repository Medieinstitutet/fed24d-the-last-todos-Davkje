import { Todo } from "../models/Todo";
import { TodoPresenter } from "./TodoPresenter";

type TodoProps = {
	todos: Todo[];
	onToggle: (id: number, checked: boolean) => void;
	onDelete: (id: number) => void;
};

export const TodoLister = ({ todos, onToggle, onDelete }: TodoProps) => {
	return (
		<div className="p-4 rounded-2xl w-full flex flex-col items-center justify-start gap-4 border-2 border-gray-300 dark:border-gray-700">
			<h2 className="text-2xl">Todo List</h2>
			<div className="w-full flex flex-wrap justify-evenly gap-4">
				{todos.map((todo) => (
					<TodoPresenter key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
				))}
			</div>
		</div>
	);
};
