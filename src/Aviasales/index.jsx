import React, { useEffect, useState } from "react";
import { message, Spin, Tabs } from "antd";

import Filter from "./components/Filter";
import List from "./components/List";

import { getSearchId, getTickets } from "./query";
import { filteringTickets } from "./utils";

import "./style.scss";

import { SORT, TABS, STOPS } from "./constants";

const { TabPane } = Tabs;

const Aviasales = () => {
  const [searchId, setSearchId] = useState(null);
  const [ticketsAll, setTicketsAll] = useState([]);
  const [endSearchTickets, setEndSearchTickets] = useState(false);

  const [defaultFilter, setDefaultFilter] = useState(SORT.CHEAP);
  const [sortTickets, setSortTickets] = useState([]);
  const [stops, setStops] = useState(Object.keys(STOPS));

  useEffect(() => {
    getSearchId()
      .then((response) => setSearchId(response.searchId))
      .catch(() =>
        message.warning("Что-то пошло не так, перезагрузите страницу")
      );
  }, []);

  useEffect(() => {
    if (searchId === null) {
      return;
    }

    if (!endSearchTickets) {
      getTickets(searchId)
        .then((response) => {
          setEndSearchTickets(response.stop);
          setTicketsAll([...ticketsAll, ...response.tickets]);
        });
    }

  }, [endSearchTickets, searchId, ticketsAll]);

  useEffect(() => {
    if (endSearchTickets) {
      const list = filteringTickets(ticketsAll, defaultFilter, stops);

      setSortTickets(list);
    }
  }, [ endSearchTickets, ticketsAll, defaultFilter, stops ]);

  const onChangeTabs = (key) => {
    setDefaultFilter(key);
    setSortTickets(() => [ ...filteringTickets(ticketsAll, key, stops) ])
  };

  return (
    <div className="aviasales">
      <aside className="aviasales__filters">
        <Filter setStopsHandler={setStops} />
      </aside>
      <div className="aviasales__content">
        Aviasales
        <Tabs defaultActiveKey={defaultFilter} onChange={onChangeTabs}>
          {TABS.map((tab) => (
            <TabPane tab={tab.title} key={tab.key}>
              <p>{`Мы нашли ${ticketsAll.length} билетов`}</p>
              <p>{`Мы нашли ${sortTickets.length} билетов по выбраным фильтрам`}</p>
              { sortTickets.length > 0 && <List tickets={sortTickets} /> }
              { !endSearchTickets && <Spin />  }
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Aviasales;
