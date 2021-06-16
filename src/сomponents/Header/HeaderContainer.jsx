import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Header } from "./Header";


class HeaderContainer extends Component {

    search = (text) => {
        const path = `/catalog?${text}`;
        this.props.history.push(path);
    }

    render() {
        return <Header searchFunction={this.search} />
    }
}

export default withRouter(HeaderContainer)