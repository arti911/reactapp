import { IPrice } from "./index.interface";

const Price = (props: IPrice) => {
  return <h1>{props.price}</h1>;
};

export default Price;
