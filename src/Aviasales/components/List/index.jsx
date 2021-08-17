import Card from "../Card";

import "./style.scss";

const LIMIT = 5;

const List = (props) => {

  return (
    <div className="aviasales-list-tickets">
      {props.onFilteringTicketsHandler(props.tickets).splice(0, LIMIT).map((ticket) => (
        <Card {...ticket} key={`${ticket.price + Math.random()}-${ticket.carrier}`} />
      ))}
    </div>
  );
};

export default List;
