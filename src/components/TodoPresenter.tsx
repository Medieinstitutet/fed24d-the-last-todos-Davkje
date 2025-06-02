import type { Todo } from "../models/Todo";

type TodoProps = {
  todo: Todo;
};

export const TodoPresenter = ({ todo }: TodoProps) => {
	return (
		<div className="todo-container">
			<h2>{todo.name}</h2>
      <p>{todo.id}</p>
			<label>
				{todo.isDone ? "Done" : "Not Done"}
				<input type="checkbox" />
			</label>
			<button>Remove
        <span className="material-icons">delete</span>
      </button>
		</div>
	);
};
