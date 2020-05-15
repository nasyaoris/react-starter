import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postTodo, getTodo } from "./actions";
import { AddTodoPageContainer } from "./style";

class AddTodoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            todos: [],
        };
    }

    componentDidMount() {
        const { getTodo, todos } = this.props;
        getTodo();
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async () => {
        const { postTodo, getTodo, todos } = this.props;
        let obj = {
            title: this.state.title,
            description: this.state.description,
        };

        await postTodo(obj);
        getTodo();

        this.setState({
            title: "",
            description: "",
        });
    };

    render() {
        const { todos } = this.props;
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
                <button
                    className="btn-primary"
                    onClick={() => this.handleSubmit()}
                >
                    Submit
                </button>
                <div className="listTodo">
                    {todos.map((element) => {
                        return (
                            <div className="todo">
                                <h3>{element.title}</h3>
                                <p>{element.description}</p>
                            </div>
                        );
                    })}
                </div>
            </AddTodoPageContainer>
        );
    }
}

AddTodoPage.propTypes = {};

function mapStateToProps(state) {
    return {
        todos: state.addTodoPage.todos,
        success: state.addTodoPage.success,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        postTodo: (obj) => dispatch(postTodo(obj)),
        getTodo: () => dispatch(getTodo()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoPage);
