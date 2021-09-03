import { STOPS } from "../components/Filter/constants";

import ICard from "../components/Card/index.interface";

export const searchStops = (countStops: Array<string>): Array<string> => {
  const listStops: Array<string> = [];

  for (let stop of Object.entries(STOPS)) {
    const [key, value] = stop;

    if (countStops.includes(value)) {
      listStops.push(key);
    }
  }

  return listStops;
};

export const filterOfTransfers = (tickets: Array<ICard>, stops: Array<string>): Array<ICard> => {
  if (stops.length === 0) {
    return [];
  } else if (stops.length === STOPS.length) {
    return tickets;
  } else {
    return tickets.filter((item) => {
      const [ from, to ] = item.segments;
  
      return stops.includes(`${from.stops.length}`) || stops.includes(`${to.stops.length}`)
    });
  }
};
