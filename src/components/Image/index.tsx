import React from "react";

import IImage from "./index.interface";

import "./style.scss";

const Image = (props: IImage) => <img src={props.src} alt="car" style={{ width: "100%" }} />;

export default Image;
