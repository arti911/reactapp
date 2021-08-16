import { Typography, Checkbox } from "antd";
import { useCallback } from "react";
import { useState } from "react";

import { STOPS } from "./constants";

import "./style.scss";

const { Title } = Typography;
const { Group } = Checkbox;

const Filter = () => {
  const [checkAll, setCheckAll] = useState(true);
  const [checkedList, setCheckedList] = useState(checkAll ? STOPS : []);

  const onChange = useCallback((list) => {
    setCheckedList(list);
    setCheckAll(list.length === STOPS.length);
  }, []);

  const onCheckAllChange = useCallback((event) => {
    setCheckedList(event.target.checked ? STOPS : []);
    setCheckAll(event.target.checked);
  }, []);

  return (
    <div className="filter">
      <div className="filter__row">
        <Title>Количество пересадок</Title>
        <Checkbox checked={checkAll} onChange={onCheckAllChange}>Все</Checkbox>
        <Group options={STOPS} value={checkedList} onChange={onChange} />
      </div>
    </div>
  );
};

export default Filter;
