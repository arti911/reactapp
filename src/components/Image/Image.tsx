import React from "react";

import "./style.scss";

interface IImage {
  src: string;
}

export const Image = (props: IImage) => (
  <img src={props.src} alt="car" style={{ width: "100%" }} />
);
