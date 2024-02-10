export interface GetFlightsResponse {
  data: {result: FlightInfo[]};
  message: string;
}

export interface FlightInfo {
  id: string;
  fare: number;
  displayData: DisplayData;
}

interface DisplayData {
  source: {
    airport: Airport;
    depTime: string;
  };
  airlines: Airline[];
  stopInfo: string;
  destination: {
    airport: Airport;
    arrTime: string;
  };
  /** flight duration */
  totalDuration: string;
}

interface Airport {
  cityCode: string;
  cityName: string;
  terminal: string;
  airportCode: string;
  airportName: string;
  countryCode: string;
  countryName: string;
}

interface Airline {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
}
