import { STOPS } from "../components/Filter/constants";

import ICard from "../components/Card/index.interface";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

export const searchStops = (countStops: CheckboxValueType[]): CheckboxValueType[] => {
  const listStops: CheckboxValueType[] = [];

  for (const stop of Object.entries(STOPS)) {
    const [key, value] = stop;

    if (countStops.includes(value)) {
      listStops.push(key);
    }
  }

  return listStops;
};

export const filterOfTransfers = (tickets: ICard[], stops: CheckboxValueType[]): ICard[] => {
  if (stops.length === 0) {
    return [];
  } else if (stops.length === STOPS.length) {
    return tickets;
  } else {
    return tickets.filter((item) => {
      const [from, to] = item.segments;

      return stops.includes(`${from?.stops.length}`) || stops.includes(`${to?.stops.length}`);
    });
  }
};
