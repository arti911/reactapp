import { Typography, Checkbox } from "antd";
import { useState, useCallback } from "react";

import { searchStops } from "../../utils/filtering";

import "./style.scss";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

const { Title } = Typography;
const { Group } = Checkbox;

export interface FilterProps {
  title: string;
  items: string[];
  clickFilterHandler: (stops: CheckboxValueType[]) => void;
}

export const Filter = (props: FilterProps) => {
  const { title, items, clickFilterHandler } = props;

  const [checkAll, setCheckAll] = useState<boolean>(true);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(checkAll ? items : []);

  const onChange = useCallback(
    (list: CheckboxValueType[]) => {
      setCheckedList(list);
      setCheckAll(list.length === items.length);

      clickFilterHandler(searchStops(list));
    },
    [clickFilterHandler, items.length],
  );

  const onCheckAllChange = useCallback(
    (event: CheckboxChangeEvent) => {
      setCheckedList(event.target.checked ? items : []);
      setCheckAll(event.target.checked);
      clickFilterHandler(event.target.checked ? items : []);
    },
    [clickFilterHandler, items],
  );

  return (
    <div className="filter">
      <Title level={5}>{title}</Title>
      <Checkbox checked={checkAll} onChange={onCheckAllChange}>
        Все
      </Checkbox>
      <Group options={items} value={checkedList} onChange={onChange} />
    </div>
  );
};
