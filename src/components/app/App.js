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

library.add(faTrashAlt, faTimes, faCheckSquare, faSquare);

export class App extends Component {
    constructor(props) {
        super(props);
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
                    <AddToDo submitToDo={this.props.submitToDo} />
                    <TodoList todos={this.props.todos} deleteToDo={this.props.deleteToDo} markAsDone={this.props.markAsDone} />
                </div>
            </div>
        );
    }
};

App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            createdAt: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            priority: PropTypes.number.isRequired,
            tags: PropTypes.array.isRequired,
            isDone: PropTypes.bool.isRequired,
        },
    )).isRequired,
    submitToDo: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    markAsDone: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todos;

const mapDispatchToProps = dispatch => ({
    submitToDo: (text, createdAt) => {
        if (text) {
            dispatch(actions.submitToDo(text, createdAt));
        }
    },
    deleteToDo: (id) => {
        dispatch(actions.deleteToDo(id));
    },
    markAsDone: (id) => {
        dispatch(actions.markAsDone(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
