import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const INITIAL_STATE = {
    menuTarget: "home"
}

class Navigation extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    componentDidMount()
    {
        this.setTarget(this.props.location.pathname);

        this.backListener = this.props.history.listen(location =>
        {
            this.setTarget(location.pathname);
        });
    }

    componentWillUnmount()
    {
        this.backListener();
    }

    setTarget = (to) =>
    {
        if (to.includes("/")) this.setState({ menuTarget: "home" });
    }

    render()
    {
        const { menuTarget } = this.state;
        const { history } = this.props;

        return (
            <Menu inverted pointing secondary>
                <Menu.Item
                    color="blue"
                    active={menuTarget === "home"}
                    onClick={() => history.push("/")}>
                    <Icon name="home" />
                    Home
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(Navigation);