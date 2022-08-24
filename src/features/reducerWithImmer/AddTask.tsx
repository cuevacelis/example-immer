import { useState } from "react";

export default function AddTask(props: any) {
    const [text, setText] = useState("");
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText("");
                    props.onAddTask(text);
                }}
            >
                Añadir
            </button>
        </>
    );
}
