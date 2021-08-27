import React, { useEffect, useState } from "react";
import { message, Spin, Tabs, Empty, Typography, Space } from "antd";

import Filter from "./components/Filter";
import List from "./components/List";
import HeaderMain from "./components/Header";
import ButtonMain from "./components/Button";

import { getSearchId, getTickets } from "./query";
import { filteringTickets } from "./utils";

import "./style.scss";

import { SORT, TABS, STOPS, LIMIT, FILTERS } from "./constants";

const { Text } = Typography;
const { TabPane } = Tabs;

const Aviasales = () => {
  const [searchId, setSearchId] = useState(null);
  const [ticketsAll, setTicketsAll] = useState([]);
  const [endSearchTickets, setEndSearchTickets] = useState(false);
  const [firstPackTickets, setFirstPackTickets] = useState(true);

  const [defaultFilter, setDefaultFilter] = useState(SORT.CHEAP);
  const [sortTickets, setSortTickets] = useState({
    tickets: [],
    viewTickets: []
  });
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
        
          if (firstPackTickets) {
            const list = filteringTickets(ticketsAll, defaultFilter, stops);

            setSortTickets({
              tickets: list,
              viewTickets: list.slice().splice(0, LIMIT)
            });
          }

          setFirstPackTickets(false);
        });
    }
  }, [endSearchTickets, searchId, ticketsAll]);

  useEffect(() => {
    if (endSearchTickets) {
      const list = filteringTickets(ticketsAll, defaultFilter, stops);

      setSortTickets({
        tickets: list,
        viewTickets: list.slice().splice(0, LIMIT)
      });
    }
  }, [ endSearchTickets, ticketsAll, defaultFilter, stops ]);

  const onChangeTabs = (key) => {
    const list = filteringTickets(ticketsAll, key, stops);
    setDefaultFilter(key);

    setSortTickets(() => ({
      tickets: list,
      viewTickets: list.slice().splice(0, LIMIT)
    }));
  };

  const onLoadTickets = () => {
    setSortTickets({
      tickets: sortTickets.tickets,
      viewTickets: [ ...sortTickets.viewTickets, ...sortTickets.tickets.slice().splice(sortTickets.viewTickets.length, LIMIT) ]
    });
  }

  return (
    <section className="aviasales">
      <HeaderMain />
      <div className="aviasales__wrapper">
        <aside className="aviasales__filters">
          { FILTERS.map((item) => <Filter title={item.title} items={item.items} clickFilterHandler={setStops} />) }
        </aside>
        <div className="aviasales__content">  
          <Tabs defaultActiveKey={defaultFilter} onChange={onChangeTabs}>
            {TABS.map((tab) => (
              <TabPane tab={tab.title} key={tab.key}>
                <Space direction="vertical">
                  <Text>{`Мы нашли ${ticketsAll.length} билетов`}</Text>
                  <Text>{`Мы нашли ${sortTickets.tickets.length} билетов по выбраным фильтрам`}</Text>
                  <Text>{`Показано ${sortTickets.viewTickets.length} из ${sortTickets.tickets.length} билетов`}</Text>
                  { !endSearchTickets && <Spin />  }
                </Space>
                { stops.length === 0 && <Empty description={`Мы нашли ${sortTickets.tickets.length} билетов по выбраным фильтрам`} /> }
                { sortTickets.tickets.length > 0 && (
                  <>
                    <List tickets={sortTickets.viewTickets} />
                    <ButtonMain type="primary" size="large" onClickHandler={onLoadTickets} label={`Показать ещё ${LIMIT} билетов`} />
                  </>
                  )
                }
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Aviasales;
