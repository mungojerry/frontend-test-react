import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './addtodo.css';

export default class AddToDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let input;
        let priority;
        let title;
        let tags;
        return (
            <div className="input-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.submit(input.value, priority.value, title.value, tags.value.split(','), Date.now());
                    priority.value = title.value = tags.value = input.value = '';
                }}>
                    <div className="input-label">Priority: </div>
                    <select className="todo-input-priority" ref={(element) => { priority = element; }}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <div className="input-label">Title: </div>
                    <input className="todo-input-title" ref={(element) => { title = element; }} />
                    <div className="input-label">Description: </div>
                    <input className="todo-input-description" ref={(element) => { input = element; }} />
                    <div className="input-label">Tags: </div>
                    <input className="todo-input-tags" ref={(element) => { tags = element; }} />
                    <button type="submit" className="todo-submit">
                        Add item
                    </button>
                </form>
            </div>
        );
    }
};

AddToDo.propTypes = {
    submit: PropTypes.func.isRequired,
};
