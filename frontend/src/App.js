import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Hello from "./Components/Hello";

class App extends Component
{
	render()
	{
		return (
			<Container className="App">
				<Router>
					<Route path="/" component={Hello} />
				</Router>
			</Container>
		);
	}
}

export default App;
