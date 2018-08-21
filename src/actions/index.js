
let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
};

const actions = {
    submit(text, priority, title, tags, created) {

        return {
            type: 'SUBMIT',
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