module.exports = {
    build: vars => `import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import axios from "axios";
import { BACKEND, HELLO } from "../Constants/Routes";

const INITIAL_STATE = {
    message: ""
}

class Hello extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    componentDidMount()
    {
        axios.get(\`\${ BACKEND }\${ HELLO }\`)
            .then(res =>
            {
                this.setState({ message: res.data.hello.message });
            })
            .catch(error =>
            {
                console.log(error);
            });
    }

    render()
    {
        const { message } = this.state;

        return (
            <Segment style={{ textAlign: "center" }}><Header as="h1">{message}</Header></Segment>
        )
    }
}

export default Hello;`
}