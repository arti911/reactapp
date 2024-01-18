import { SORT } from "../constants";
import { filterOfTransfers } from "./filtering";

import ICard from "../components/Card/index.interface";

import { IInformation } from "../components/Card/Information/index.interface";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

const sumDurationStops = (ticket: Array<IInformation>) =>
  ticket.reduce((acc, item) => acc + item.duration, 0);

export const filteringTickets = (
  tickets: Array<ICard>,
  parameter: string,
  stops: CheckboxValueType[],
) => {
  let list: Array<ICard> = [];

  if (parameter === SORT.CHEAP) {
    list = tickets.sort((a, b) => a.price - b.price);
  } else if (parameter === SORT.FAST) {
    list = tickets.sort((a, b) => sumDurationStops(a.segments) - sumDurationStops(b.segments));
  }

  list = filterOfTransfers(list, stops);

  return list;
};

export const range = (date: string, duration: number): string => {
  const MINUTE: number = 60;
  const MILISECOND: number = 1000;

  const milisecondStartDate: number = Date.parse(date);
  const milisecondDuration: number = duration * MINUTE * MILISECOND;

  const dtStart: Date = new Date(date);
  const dtFinish: Date = new Date(milisecondStartDate + milisecondDuration);

  return `${dtStart.getHours()}:${dtStart.getMinutes()} - ${dtFinish.getHours()}:${dtFinish.getMinutes()}`;
};

export const formatTime = (duration: number): string => {
  const ONE_DAY: number = 24;
  const ONE_HOUR: number = 60;

  let days: number = 0;
  let hours: number = Math.floor(duration / ONE_HOUR);
  let minutes: number | string = duration % ONE_HOUR;

  if (hours > ONE_DAY) {
    days = Math.ceil(hours / ONE_DAY);
    hours = hours % ONE_DAY;
  }

  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return days > 0 ? `${days}Д ${hours}Ч ${minutes}М` : `${hours}Ч ${minutes}М`;
};

export const stopsCount = (count: number): string => {
  let message = "";

  if (count === 0) {
    message = "Без пересадок";
  } else if (count === 1) {
    message = `${count} пересадка`;
  } else if (count >= 2 && count < 5) {
    message = `${count} пересадки`;
  } else if (count >= 5) {
    message = `${count} пересадок`;
  }

  return message.toUpperCase();
};
