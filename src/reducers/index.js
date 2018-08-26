import axios from 'axios';

export const initialState = {
    todos: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        description: action.description,
                        created: action.created,
                        title: action.title,
                        priority: +action.priority,
                        tags: action.tags,
                        isDone: action.isDone
                    },
                ],
            };
        case 'DELETE':
            return {
                ...state,
                todos: [
                    ...state.todos.filter(todo => (
                        todo.id !== action.id
                    )),
                ],
            };
        case 'MARKASDONE':
            let idx = state.todos.findIndex(todo => todo.id === action.id);
            state.todos[idx].isDone = !state.todos[idx].isDone;
            return {
                ...state,
                todos: [
                    ...state.todos
                ],
            };
        case 'RECEIVE_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todo
                ]
            };
        case 'RECEIVE_TODOS':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.todos
                ]
            };
        default:
            return state;
    }
};

export default reducer;