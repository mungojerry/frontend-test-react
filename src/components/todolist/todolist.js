import './todolist.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let todoItems = this.props.todos.map(todo => {
            let date = new Date(todo.createdAt);
            let tags = '';
            if (todo.tags)
                todo.tags.forEach(tag => tags += `#${tag.trim()} `);

            return (
                <li key={todo.id} className={todo.isDone ? 'animate-reveal todo-done' : 'animate-reveal'}>
                    <div className="todo-content">
                        <div className="todo-title">{todo.title}</div>
                        <div className="todo-date">{date.toString()}</div>
                        <div className="todo-text">{todo.description}</div>
                        <div className="todo-tags">Tags: {tags}</div>
                        <div className="todo-priority">Priority: {todo.priority}</div>
                    </div>
                    <div className="todo-buttons">
                        {/* <FontAwesomeIcon icon="trash-alt" className="todo-button todo-delete" onClick={() => { this.props.deleteTodo(todo.id); }} /> */}
                        <FontAwesomeIcon icon={todo.isDone ? 'check-square' : 'square'} className="todo-button todo-markasdone" onClick={() => { this.props.toggleDone(todo); }} />
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
    todos: PropTypes.any.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleDone: PropTypes.func.isRequired,
};
