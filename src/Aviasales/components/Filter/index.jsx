import { Typography, Checkbox } from "antd";
import { useCallback } from "react";
import { useState } from "react";
import { searchStops } from "../../utils/filtering";

import "./style.scss";

const { Title } = Typography;
const { Group } = Checkbox;

const Filter = (props) => {
  const [checkAll, setCheckAll] = useState(true);
  const [checkedList, setCheckedList] = useState(checkAll ? props.items : []);

  const onChange = useCallback((list) => {
    setCheckedList(list);
    setCheckAll(list.length === props.items.length);

    props.clickFilterHandler(searchStops(list));
  }, []);

  const onCheckAllChange = useCallback((event) => {
    setCheckedList(event.target.checked ? props.items : []);
    setCheckAll(event.target.checked);
    props.clickFilterHandler(event.target.checked ? props.items : []);
  }, []);

  return (
    <div className="filter">
      <Title level={5}>{ props.title }</Title>
      <Checkbox checked={checkAll} onChange={onCheckAllChange}>Все</Checkbox>
      <Group options={props.items} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default Filter;
