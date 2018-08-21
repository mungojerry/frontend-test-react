import './todolist.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todoItems = this.props.todos.map(todo => {
            let date = new Date();
            date.setTime(todo.createdAt);

            return (
                <li key={todo.id} className="animate-reveal" className={todo.isDone ? 'todo-done' : ''}>
                    <div className="todo-content">
                        <div className="todo-title">{todo.title}</div>
                        <div className="todo-date">{date.toString()}</div>
                        <div className="todo-text">{todo.description}</div>
                    </div>
                    <div className="todo-buttons">
                        <FontAwesomeIcon icon="trash-alt" className="todo-button todo-delete" onClick={() => { this.props.deleteToDo(todo.id); }} />
                        <FontAwesomeIcon icon={todo.isDone ? 'check-square' : 'square'} className="todo-button todo-markasdone" onClick={() => { this.props.markAsDone(todo.id); }} />
                    </div>
                </li>
            );
        });
        return (
            <ul>
                {todoItems}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            createdAt: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            priority: PropTypes.number.isRequired,
            tags: PropTypes.array.isRequired,
            isDone: PropTypes.bool.isRequired,
        }
    )).isRequired,
    deleteToDo: PropTypes.func.isRequired,
    markAsDone: PropTypes.func.isRequired,
};
