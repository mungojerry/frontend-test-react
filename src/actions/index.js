
let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
};

const actions = {
    submitToDo(text, created) {
        return {
            type: 'SUBMIT',
            id: nextId(),
            description: text,
            title: `To do item #${todoId}`,
            created: created,
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