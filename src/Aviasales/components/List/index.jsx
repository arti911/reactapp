import { useState } from "react";

import Card from "../Card";

import "./style.scss";

const List = (props) => {
  const [offset, setOffset] = useState(5);

  return (
    <div className="aviasales-list-tickets">
      {props.onFilteringTicketsHandler(props.tickets).splice(0, offset).map((ticket) => (
        <Card {...ticket} key={ticket.price + 1} />
      ))}
    </div>
  );
};

export default List;
