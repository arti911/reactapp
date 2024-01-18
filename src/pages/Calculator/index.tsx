import { useState } from "react";
import { RadioChangeEvent } from "antd";

import Tariffs from "./components/Tariffs";
import Range from "./components/Range";
import { DEFAULT_TARIFF, ITariff, TARIFFS } from "./constants";
import Price from "./components/Price";

const Calculator = () => {
  const [tariff, setTariff] = useState<ITariff>(DEFAULT_TARIFF);
  const [countSecond, setCountSecond] = useState<number>(180);

  const onChangeTariff = (event: RadioChangeEvent): void => {
    const tariff: ITariff | undefined = TARIFFS.find(
      (tariff) => tariff.label === event.target.value,
    );

    if (tariff !== undefined) {
      setTariff(tariff);
    }
  };

  const onChangeDuration = (value: number): void => {
    setCountSecond(value);
  };

  const price: number = tariff.price * countSecond;

  return (
    <>
      <h1>Калькулятор цен</h1>
      <Tariffs
        list={TARIFFS.map((item) => item.label)}
        optionType="button"
        buttonStyle="solid"
        defaultValue={tariff.label}
        changeTariffHandler={onChangeTariff}
      />
      <Range value={countSecond} min={20} max={300} changeDurationHandler={onChangeDuration} />
      <Price price={price} />
    </>
  );
};

export default Calculator;
