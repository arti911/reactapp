import React from "react";
import { Link } from "react-router-dom";
import SliderImage from "../SliderImage";

const Main = () => {
  return (
    <>
      <Link to="/price">Валюты</Link>
      <Link to="/balance">Где деньги</Link>
      <SliderImage />
    </>
  );
};

export default Main;
