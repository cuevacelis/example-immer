import { useState } from "react";

function TaskList(props: any) {
    return (
        <ul>
            {props.tasks.map((task: any) => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={props.onChangeTask}
                        onDelete={props.onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task(props: any) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={props.task.text}
                    onChange={(e) => {
                        props.onChange({
                            ...props.task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Guardar</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {props.task.text}
                <button onClick={() => setIsEditing(true)}>Editar</button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={props.task.done}
                onChange={(e) => {
                    props.onChange({
                        ...props.task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => props.onDelete(props.task.id)}>
                Eliminar
            </button>
        </label>
    );
}

export default TaskList;
