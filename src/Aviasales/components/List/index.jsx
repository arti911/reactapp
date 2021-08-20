import Card from "../Card";

import "./style.scss";

const LIMIT = 5;

const List = (props) => {
  const { tickets } = props;

  return (
    <div className="aviasales-list-tickets">
      {tickets.slice().splice(0, LIMIT).map((ticket) => (
        <Card {...ticket} key={`${ticket.price + Math.random()}-${ticket.carrier}`} />
      ))}
    </div>
  );
};

export default List;
