import Card from "../Card";

import "./style.scss";

const List = (props) => (
  <div className="aviasales-list-tickets">
    {props.tickets.map((ticket) => (
      <Card {...ticket} key={`${ticket.price + Math.random()}-${ticket.carrier}`} />
    ))}
  </div>
);

export default List;
