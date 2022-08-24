import { useImmerReducer } from "use-immer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks, tasksReducer } from "./tasksReducer";

let nextId = 3;

export default function ReducerWithimmer() {
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

    function handleAddTask(text: any) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task: any) {
        dispatch({
            type: "changed",
            task: task,
        });
    }

    function handleDeleteTask(taskId: any) {
        dispatch({
            type: "deleted",
            id: taskId,
        });
    }

    return (
        <>
            <h1>Tareas</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}
