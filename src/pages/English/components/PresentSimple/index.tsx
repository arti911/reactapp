import React, { FC } from "react";

import PresentContinuos from "../PresentContinuos";

import { IPresentSimple } from "./index.interface";

import "./style.scss";

const PresentSimple: FC<IPresentSimple> = (props) => (
  <section className="english-content">
    {props.schemes.map((item) => (
      <PresentContinuos {...item} />
    ))}
  </section>
);

export default PresentSimple;
