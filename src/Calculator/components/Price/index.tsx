import { FC } from "react";

import { IPrice } from "./index.interface";

const Price: FC<IPrice> = (props) => {
  return <h1>{ props.price }</h1>;
};

export default Price;
