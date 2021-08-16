const sumDurationStops = (ticket) => ticket.reduce((acc, item) => acc + item.duration, 0);

export const filteringTickets = (tickets) => tickets.sort((a, b) => a.price - b.price);

export const filteringFastTickets = (tickets) => tickets.sort((a, b) => sumDurationStops(a.segments) - sumDurationStops(b.segments));

export const range = (date, duration) => {
  const MINUTE = 60;
  const MILISECOND = 1000;

  const milisecondStartDate = Date.parse(date);
  const milisecondDuration = duration * MINUTE * MILISECOND;

  const dtStart = new Date(date);
  const dtFinish = new Date(milisecondStartDate + milisecondDuration);

  return `${dtStart.getHours()}:${dtStart.getMinutes()} - ${dtFinish.getHours()}:${dtFinish.getMinutes()}`;
};

export const formatTime = (duration) => {
  const ONE_DAY = 24;
  const ONE_HOUR = 60;

  let days = 0;
  let hours = Math.ceil(duration / ONE_HOUR);
  let minutes = duration % ONE_HOUR;

  if (hours > ONE_DAY) {
    days = Math.ceil(hours / ONE_DAY);
    hours = hours % ONE_DAY;
  }

  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return days > 0 ? `${days}Д ${hours}Ч ${minutes}М` : `${hours}Ч ${minutes}М`;
};

export const stopsCount = (count) => {
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
}
