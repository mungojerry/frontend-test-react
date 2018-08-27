import Axios from "axios";

let todoId = 0;

const nextId = () => {
    return ++todoId;
};

const actions = {

    receiveTodos(json) {
        return {
            type: 'RECEIVE_TODOS',
            todos: json
        }
    },

    receiveTodo(json) {
        return {
            type: 'RECEIVE_TODO',
            todo: json
        }
    },

    getTodos() {
        return dispatch => {
            Axios.get('https://backend.pi-top.com/todo-test/v1/todos')
                .then(res => {
                    dispatch(actions.receiveTodos(res.data.filter(todo => !todo.isDone)));
                });
        }
    },

    addTodo(text, priority, title, tags, createdAt) {
        return dispatch => {
            Axios.post('https://backend.pi-top.com/todo-test/v1/todos', {
                id: 0,
                description: text,
                title: title,
                createdAt: createdAt,
                priority: +priority,
                tags: tags,
                isDone: false
            })
                .then(res => {
                    dispatch(actions.receiveTodo(res.data));
                });
        }
    },

    deleteTodo(id) {
        return {
            type: 'DELETE',
            id,
        };
    },

    toggleDone(todo) {
        return dispatch => {
            Axios.put(`https://backend.pi-top.com/todo-test/v1/todos/${todo.id}`, {
                isDone: !todo.isDone
            })
                .then(res => {
                    dispatch({
                        type: 'TOGGLEDONE',
                        id: todo.id,
                        isDone: !todo.isDone
                    });
                });
        }
    },
};

export default actions;