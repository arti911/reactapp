import ICard from "./components/Card/index.interface";

export interface ITickets {
  tickets: Array<ICard>;
  viewTickets: Array<ICard>;
}

export interface SearchIdResponse {
  searchId: string;
}

export interface TicketsResponse {
  tickets: Array<ICard>;
  stop: boolean;
}
