
let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
};

const actions = {
    submitToDo(text) {
        return {
            type: 'SUBMIT',
            id: nextId(),
            description: text,
            title: `To do item #${todoId}`,
            createdAt: Date.now(),
            priority: 1,
            tags: [],
            isDone: false
        };
    },
    deleteToDo(id) {
        return {
            type: 'DELETE',
            id,
        };
    },
};

export default actions;