import { IInformation } from "./Information/index.interface";

export default interface ICard {
  price: number;
  carrier: string;
  segments: Array<IInformation>;
}
