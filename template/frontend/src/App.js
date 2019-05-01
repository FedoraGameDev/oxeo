import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import Navigation from "./Components/Navigation";
import Hello from "./Components/Hello";

class App extends Component
{
	render()
	{
		return (
			<Router>
				<Container className="App">
					<Segment attached="top" inverted style={{ padding: "2px" }}>
						<Navigation />
					</Segment>
					<Segment attached="bottom">
						<Route path="/" component={Hello} />
					</Segment>
				</Container>
			</Router>
		);
	}
}

export default App;
