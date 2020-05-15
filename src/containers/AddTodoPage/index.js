import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AddTodoPageContainer } from "./style";

class AddTodoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
        };
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = () => {};

    render() {
        return (
            <AddTodoPageContainer>
                <div className="title">
                    <h1>ADD TODO</h1>
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.changeHandler}
                        required
                    />
                </div>
            </AddTodoPageContainer>
        );
    }
}

AddTodoPage.propTypes = {};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage);
