import './app.css';
import AddToDo from '../addtodo/addtodo';
import Logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TodoList from '../todolist/todolist';
import actions from '../../actions';
import { connect } from 'react-redux';
import { faTrashAlt, faTimes, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Axios from 'axios';

library.add(faTrashAlt, faTimes, faCheckSquare, faSquare);

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.todos = [];
    }

    getInitialState() {
        return { showAdd: false };
    }
    toggleAddTodo() {
        this.setState({ showAdd: !this.state.showAdd });
    }

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <Logo width={50} height={50} ></Logo>
                    <div className="app-title">To Do List</div>
                    <div className="app-intro">The worlds most exciting to-do app</div>
                </div>
                <div className="app-content">
                    {this.state.showAdd ? <AddToDo addTodo={this.props.addTodo} /> : null}

                    <TodoList todos={this.props.todos} deleteTodo={this.props.deleteTodo} toggleDone={this.props.toggleDone} />
                </div>
                <div className="fab noselect" onClick={() => { this.toggleAddTodo(); }}>
                    <div className="text">+</div>
                </div>
            </div>
        );
    }
};

App.propTypes = {
    todos: PropTypes.any.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,

};

const mapStateToProps = state => state.todos;

const mapDispatchToProps = dispatch => ({
    addTodo: (text, priority, title, tags, createdAt) => {
        if (text) {
            dispatch(actions.addTodo(text, priority, title, tags, createdAt));
        }
    },
    deleteTodo: (id) => {
        dispatch(actions.deleteTodo(id));
    },
    toggleDone: (id) => {
        dispatch(actions.toggleDone(id));
    },
    getTodos: () => {
        dispatch(actions.getTodos());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
