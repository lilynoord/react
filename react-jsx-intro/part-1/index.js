function FirstComponent() {
	return <h1>My very first component</h1>;
}

const NamedComponent = (props) => {
	return <p>My name is {props.name}</p>;
};

const App = (props) => {
	return (
		<div>
			<FirstComponent />
			<NamedComponent name={props.name} />
		</div>
	);
};

ReactDOM.render(<App name="bobby" />, document.getElementById("root"));
