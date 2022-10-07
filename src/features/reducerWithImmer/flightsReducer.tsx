export interface Flights {
    id: number;
    time: string;
    totalSeats: number;
    from: string;
    to: string;
    price: FlightsPrice[];
    type: "one way" | "round trip";
}

export interface FlightsPrice {
    category: string;
    seats: number;
    priceChild: number;
    priceAdult: number;
}

export type ActionReducer = {
    type: "addFlight" | "editFlight" | "deletedFlight";
    flightChange?: Flights;
    IdflightSelected?: number;
};

export const initialFlights: Flights[] = [
    {
        id: 0,
        time: "Fri Oct 07 2022 16:03:15 GMT-0500",
        totalSeats: 24,
        from: "brazil",
        to: "peru",
        price: [
            {
                category: "economic",
                seats: 8,
                priceChild: 24,
                priceAdult: 48,
            },
            {
                category: "business",
                seats: 8,
                priceChild: 48,
                priceAdult: 64,
            },
            {
                category: "gente pudiente",
                seats: 8,
                priceChild: 64,
                priceAdult: 128,
            },
        ],
        type: "one way",
    },
    {
        id: 1,
        time: "Fri Oct 07 2022 16:03:15 GMT-0500",
        totalSeats: 20,
        from: "colombia",
        to: "venezuela",
        price: [
            {
                category: "economic",
                seats: 10,
                priceChild: 8,
                priceAdult: 16,
            },
        ],
        type: "round trip",
    },
];

export function flightsReducer(flightsState: Flights[], action: ActionReducer) {
    switch (action.type) {
        case "addFlight": {
            if (action.flightChange) {
                flightsState.push(action.flightChange);
            }
            break;
        }
        case "editFlight": {
            const indexFlightSelected = flightsState.findIndex(
                (flight: any) => flight.id === action.IdflightSelected
            );
            if (action.flightChange) {
                flightsState[indexFlightSelected] = action.flightChange;
            }
            break;
        }
        case "deletedFlight": {
            return flightsState.filter(
                (flight: any) => flight.id !== action.IdflightSelected
            );
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
