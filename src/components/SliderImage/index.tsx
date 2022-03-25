import React, { useEffect, useState } from "react";
import { Empty, Button } from "antd";

import Slider from "../Slider";
import Image from "../Image";

import { settings } from "./settings";

import { ISliderImage } from "./index.interface";
import { findBreakpoint } from "../../utils";


const SliderImage = (props: ISliderImage) => {
  const [ countSlides, setCountSlides ] = useState<number>(0);

  useEffect(() => {
    findBreakpoint(settings, setCountSlides);

    return () => findBreakpoint(settings, setCountSlides);
  }, [ props ]);

  const onClick = (title: string) => () => {
    props.clickHandler(title);
  }

  return (
    <>
      { props.list !== undefined ? (
        <>
          {props.listTabs.map((item) => <Button type="primary" onClick={onClick(item)} key={item}>{ item }</Button>)}
          <Slider settings={{
            ...settings,
            loop: props.list.length > countSlides,
            }}
          >
            {props.list.map((item) => (
              <Image src={item} key={item} />
            ))}
          </Slider>
        </>
      ) : <Empty /> }
    </>
  );
};

export default SliderImage;
