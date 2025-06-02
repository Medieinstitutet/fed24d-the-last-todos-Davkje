export const Todo = () => {
	return (
		<div className="container">
			<h2>Todo</h2>
			<label>
				Done?
				<input type="checkbox" />
			</label>
			<button>Remove
        <span className="material-icons">delete</span>
      </button>
		</div>
	);
};
