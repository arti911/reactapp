import { Typography, Checkbox } from "antd";
import { useCallback } from "react";
import { useState } from "react";
import { searchStops } from "../../utils/filtering";

import { STOPS } from "../../constants";

import "./style.scss";

const { Title } = Typography;
const { Group } = Checkbox;

const Filter = (props) => {
  const stops = Object.values(STOPS);

  const [checkAll, setCheckAll] = useState(true);
  const [checkedList, setCheckedList] = useState(checkAll ? stops : []);


  const onChange = useCallback((list) => {
    setCheckedList(list);
    setCheckAll(list.length === stops.length);

    props.setStopsHandler(searchStops(list));
  }, []);

  const onCheckAllChange = useCallback((event) => {
    setCheckedList(event.target.checked ? stops : []);
    setCheckAll(event.target.checked);
    props.setStopsHandler(event.target.checked ? stops : []);
  }, []);

  return (
    <div className="filter">
      <Title level={5}>Количество пересадок</Title>
      <Checkbox checked={checkAll} onChange={onCheckAllChange}>Все</Checkbox>
      <Group options={Object.values(stops)} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default Filter;
