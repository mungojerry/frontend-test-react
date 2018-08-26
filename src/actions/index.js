import Axios from "axios";

let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
};

const actions = {
    requestTodos() {
        return {
            type: 'REQUEST_TODOS'
        }
    },
    receiveTodos(json) {
        return {
            type: 'RECEIVE_TODOS',
            todos: json
        }
    },
    getTodos() {
        return dispatch => {
            dispatch(actions.requestTodos()),
                Axios.get('https://backend.pi-top.com/todo-test/v1/todos')
                    .then(res => {
                        console.log(res);
                        dispatch(actions.receiveTodos(res.data));
                    });
        }
    },

    submit(text, priority, title, tags, created) {

        return {
            type: 'ADD',
            id: nextId(),
            description: text,
            title: title,
            created: created,
            priority: priority,
            tags: tags,
            isDone: false
        };
    },
    delete(id) {
        return {
            type: 'DELETE',
            id,
        };
    },
    markAsDone(id) {
        return {
            type: 'MARKASDONE',
            id,
            isDone: true
        };
    },
};

export default actions;