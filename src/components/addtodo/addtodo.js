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
        let options = [];
        var myStyle = { 'animation': 'show 0.5s ease-out forwards' };
        for (let j = 1; j <= 10; j++) {
            options.push(<option key={j} value={j}>{j}</option>);
        }
        return (
            <div className="input-container" style={myStyle}>
                <form onSubmit={(event) => {

                    event.preventDefault();
                    this.props.addTodo(input.value, priority.value, title.value, tags.value.split(','), new Date());
                    priority.value = title.value = tags.value = input.value = '';
                }}>
                    <div className="input-label">Priority: </div>

                    <select className="todo-input-priority" ref={(element) => { priority = element; }}>{options}</select>

                    <div className="input-label">Title: </div>
                    <input className="todo-input-title" ref={(element) => { title = element; }} />
                    <div className="input-label">Description: </div>
                    <input className="todo-input-description" ref={(element) => { input = element; }} />
                    <div className="input-label">Tags: </div>
                    <input className="todo-input-tags" ref={(element) => { tags = element; }} />
                    <button type="submit" className="todo-submit pi-button">
                        Add item
                    </button>
                </form>
            </div>
        );
    }
};
