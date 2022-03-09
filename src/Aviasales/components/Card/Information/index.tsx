import React from "react";

import { formatTime, range, stopsCount } from "../../../utils";

import { IInformation } from "./index.interface";

import "./style.scss";

const Information = (props: IInformation) => (
  <div className="information">
    <div className="information__route">
      <div className="information__title">
        {props.origin}-{props.destination}
      </div>
      <div className="information__description">{range(props.date, props.duration)}</div>
    </div>
    <div className="information__length">
      <div className="information__title">В ПУТИ</div>
      <div className="information__description">{formatTime(props.duration)}</div>
    </div>
    <div className="information__stop">
      <div className="information__title">{stopsCount(props.stops.length)}</div>
      <div className="information__description">{props.stops.join(", ")}</div>
    </div>
  </div>
);

export default Information;
