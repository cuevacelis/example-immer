import { useImmerReducer } from "use-immer";
import FlightList from "./FlightList";
import {
    ActionReducer,
    Flights,
    flightsReducer,
    initialFlights,
} from "./flightsReducer";
import AddFlight from "./AddFlight";

export default function ReducerWithimmer() {
    const [flightsState, dispatchFlights] = useImmerReducer<
        Flights[],
        ActionReducer
    >(flightsReducer, initialFlights);

    function handleAddFlight(
        flightsLastChange: Flights,
        idNext: number,
        text: string
    ) {
        dispatchFlights({
            type: "addFlight",
            // id: flightsState.length+1,
            flightChange: flightsLastChange,
        });
    }

    function handleChangeFlight(flightsLastChange: Flights) {
        dispatchFlights({
            type: "editFlight",
            flightChange: flightsLastChange,
        });
    }

    function handleDeleteFlight(IdflightSelected: number) {
        dispatchFlights({
            type: "deletedFlight",
            IdflightSelected: IdflightSelected,
        });
    }

    return (
        <>
            <h1>Vuelos</h1>
             <AddFlight onAddFlight={handleAddFlight} />
            <FlightList
                flightsState={flightsState}
                onChangeFlight={handleChangeFlight}
                onDeleteFlight={handleDeleteFlight}
            />
        </>
    );
}
