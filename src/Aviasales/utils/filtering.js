import { STOPS } from "../components/Filter/constants";

export const searchStops = (countStops) => {
  const listStops = [];

  for (let stop of Object.entries(STOPS)) {
    const [key, value] = stop;

    if (countStops.includes(value)) {
      listStops.push(+key);
    }
  }

  return listStops;
};

export const filterOfTransfers = (tickets, stops) => {
  if (stops.length === 0) {
    return [];
  } else if (stops.length === STOPS.length) {
    return tickets;
  } else {
    return tickets.filter((item) => {
      const [ from, to ] = item.segments;
  
      return stops.includes(from.stops.length) || stops.includes(to.stops.length)
    });
  }
};
