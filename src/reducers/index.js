export const initialState = {
    todos: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SUBMIT':

            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        description: action.description,
                        createdAt: action.createdAt,
                        title: action.title,
                        priority: action.priority,
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
        default:
            return state;
    }
};

export default reducer;