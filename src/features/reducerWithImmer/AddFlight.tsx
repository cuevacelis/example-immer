import {ChangeEvent, FormEvent, useState} from "react";
import {Flights, FlightsPrice} from "./flightsReducer";

export default function AddFlight(props: any) {
    const initPriceForm: FlightsPrice = {
        category: "",
        seats: 0,
        priceChild: 0,
        priceAdult: 0,
    }
    const [flightForm, setFlightForm] = useState<Flights[]>([])
    const [priceFormFlight, setPriceFormFlight] = useState<FlightsPrice[]>([initPriceForm])

    const addFormPrice = () => {
        setPriceFormFlight([...priceFormFlight, initPriceForm])
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="time" name="time"/>
            <input type="number" name="totalSeats"/>
            <input type="text" name="From"/>
            <input type="text" name="to"/>
            <section>
                <button type="button" onClick={addFormPrice}>+</button>
                {priceFormFlight.map(() => {
                    return (
                        <div>
                            <input type="text" name="category"/>
                            <input type="number" name="seats"/>
                            <input type="number" name="priceChild"/>
                            <input type="number" name="priceAdult"/>
                        </div>
                    )
                })}
            </section>
            <select name="type">
                <option>one way</option>
                <option>round trip</option>
            </select>
            <button type="submit">Guardar vuelo</button>
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        setText("");*/}
            {/*        props.onAddTask(text);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Añadir*/}
            {/*</button>*/}
        </form>
    );
}
