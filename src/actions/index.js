
let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
};

const actions = {
    submitToDo(text, createdAt) {
        return {
            type: 'SUBMIT',
            id: nextId(),
            description: text,
            title: `To do item #${todoId}`,
            createdAt: createdAt,
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
    markAsDone(id) {
        return {
            type: 'MARKASDONE',
            id,
            isDone: true
        };
    },
};

export default actions;