import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './addtodo.css';

export default class AddToDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let input;
        return (
            <div className="input-container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.submitToDo(input.value, Date.now());
                    input.value = '';
                }}>
                    <input className="todo-input" ref={(element) => { input = element; }} />
                    <button type="submit" className="todo-submit">
                        Add item
                    </button>
                </form>
            </div>
        );
    }
};

AddToDo.propTypes = {
    submitToDo: PropTypes.func.isRequired,
};
