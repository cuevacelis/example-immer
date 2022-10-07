import { useState } from "react";

function FlightList(props: any) {
    return (
        <ul>
            {props.flightsState.map((flight: any) => (
                <li key={flight.id}>
                    <Flight
                        flight={flight}
                        onChange={props.onChangeFlight}
                        onDelete={props.onDeleteFlight}
                    />
                </li>
            ))}
        </ul>
    );
}

function Flight(props: any) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <p>editando vuelos</p>
                {/* <input
                    value={props.task.text}
                    onChange={(e) => {
                        props.onChange({
                            ...props.task,
                            text: e.target.value,
                        });
                    }}
                /> */}
                <button onClick={() => setIsEditing(false)}>Guardar</button>
            </>
        );
    } else {
        taskContent = (
            <section>
                <p>{props.flight.time}</p>
                <p>{props.flight.totalSeats}</p>
                <p>{props.flight.from}</p>
                <p>{props.flight.to}</p>
                <p>{props.flight.type}</p>
                <div>
                    {props.flight.price.map((precioVuelos: any) => {
                        return (
                            <section>
                                <p>{precioVuelos.category}</p>
                                <p>{precioVuelos.seats}</p>
                                <p>{precioVuelos.priceChild}</p>
                                <p>{precioVuelos.priceAdult}</p>
                            </section>
                        );
                    })}
                </div>
                <button onClick={() => setIsEditing(true)}>Editar</button>
            </section>
        );
    }

    return (
        <label>
            {/* <input
                type="checkbox"
                checked={props.task.done}
                onChange={(e) => {
                    props.onChange({
                        ...props.task,
                        done: e.target.checked,
                    });
                }}
            /> */}
            {taskContent}
            <button onClick={() => props.onDelete(props.flight.id)}>
                Eliminar
            </button>
        </label>
    );
}

export default FlightList;
