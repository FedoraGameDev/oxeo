import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Hello from "./Components/Hello";

function App()
{
	return (
		<Container className="App">
			<Router>
				<Route path="/" component={Hello} />
			</Router>
		</Container>
	);
}

export default App;
