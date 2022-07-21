import ICard from "./components/Card/index.interface";

export interface ITickets {
  tickets: Array<ICard>;
  viewTickets: Array<ICard>;
}

export interface ISearchId {
  searchId: string;
}

export interface IResponseTickets {
  tickets: Array<ICard>;
  stop: boolean;
}
