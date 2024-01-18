interface ISort {
  CHEAP: string;
  FAST: string;
}

export const SORT: ISort = {
  CHEAP: "1",
  FAST: "2",
};

interface ITabs {
  key: string;
  title: string;
}

export const TABS: Array<ITabs> = [
  {
    key: "1",
    title: "Самый дешевый",
  },
  {
    key: "2",
    title: "Самый быстрый",
  },
];

export const STOPS = {
  0: "Без пересадок",
  1: "1 пересадка",
  2: "2 пересадки",
  3: "3 пересадки",
};

export const LIMIT: number = 5;

interface IFilters {
  title: string;
  items: Array<string>;
}

export const FILTERS: Array<IFilters> = [
  {
    title: "Количество пересадок",
    items: Object.values(STOPS),
  },
];
