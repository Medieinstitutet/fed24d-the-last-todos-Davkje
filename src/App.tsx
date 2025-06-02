import "./style/App.scss";
import { Todo } from "./components/Todo";
import { Header } from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Todo/>
			</div>
		</>
	);
}

export default App;
