export interface ITariff {
  label: string;
  price: number;
}

const TYPE = {
  INFO: "Инфографика",
  ANIMATION: "Анимация",
  ANIMATION_PLUS: "Анимация Plus",
  PREMIUM: "Premium",
};

export const DEFAULT_TARIFF: ITariff = {
  label: TYPE.INFO,
  price: 750,
};

export const TARIFFS: Array<ITariff> = [
  {
    label: TYPE.INFO,
    price: 750,
  },
  {
    label: TYPE.ANIMATION,
    price: 1500,
  },
  {
    label: TYPE.ANIMATION_PLUS,
    price: 2500,
  },
  {
    label: TYPE.PREMIUM,
    price: 3500,
  },
];
