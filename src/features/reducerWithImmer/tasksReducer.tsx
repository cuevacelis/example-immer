export const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];

export function tasksReducer(draft: any, action: any) {
    switch (action.type) {
        case "added": {
            draft.push({
                id: action.id,
                text: action.text,
                done: false,
            });
            break;
        }
        case "changed": {
            const index = draft.findIndex((t: any) => t.id === action.task.id);
            draft[index] = action.task;
            break;
        }
        case "deleted": {
            return draft.filter((t: any) => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
