import { FC } from "react";

import Card from "../Card";

import IList from "./index.interface";

import "./style.scss";

const List: FC<IList> = (props) => (
  <div className="aviasales-list-tickets">
    {props.tickets.map((ticket) => (
      <Card {...ticket} key={`${ticket.price + Math.random()}-${ticket.carrier}`} />
    ))}
  </div>
);

export default List;
