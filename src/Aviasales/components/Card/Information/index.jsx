import React from "react";

import { formatTime, range, stopsCount } from "../../../utils";

import "./style.scss";

const Information = (props) => {
  const { date, duration } = props;

  return (
    <div className="information">
      <div className="information__route">
        <div className="information__title">
          {props.origin}-{props.destination}
        </div>
        <div className="information__description">{range(date, duration)}</div>
      </div>
      <div className="information__length">
        <div className="information__title">В ПУТИ</div>
        <div className="information__description">{formatTime(duration)}</div>
      </div>
      <div className="information__stop">
        <div className="information__title">{stopsCount(props.stops.length)}</div>
        <div className="information__description">{props.stops.join(", ")}</div>
      </div>
    </div>
  );
};

export default Information;
