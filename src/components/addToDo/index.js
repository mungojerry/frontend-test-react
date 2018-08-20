import React from 'react';
import PropTypes from 'prop-types';

const AddToDo = ({ submitToDo }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    submitToDo(input.value);
                    input.value = '';
                }}
            >

                <input
                    className="todo-input"
                    ref={(element) => {
                        input = element;
                    }}
                />

                <button type="submit" className="todo-submit">
                    Add item
        </button>
            </form>
        </div>
    );
};

AddToDo.propTypes = {
    submitToDo: PropTypes.func.isRequired,
};

export default AddToDo;