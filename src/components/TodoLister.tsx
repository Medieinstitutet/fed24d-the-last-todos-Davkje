import { Todo } from "../models/Todo"
import { TodoPresenter } from "./TodoPresenter";

type TodoProps = {
  todos: Todo[];
}

export const TodoLister = ({ todos }: TodoProps) => {
  return (
    <div className="container">
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <TodoPresenter key={index} todo={todo}></TodoPresenter>
      ))}
    </div>
  );
};