import React, { useState, useEffect } from "react";
import { message, Spin, Tabs, Empty, Typography, Space, PageHeader } from "antd";
import { get } from "lodash";

import Filter from "./components/Filter";
import List from "./components/List";
import HeaderMain from "./components/Header";
import ButtonMain from "./components/Button";

import { getSearchId, getTickets } from "./query";
import { filteringTickets } from "./utils";

import "./style.scss";

import { SORT, TABS, STOPS, LIMIT, FILTERS } from "./constants";

import ICard from "./components/Card/index.interface";
import { ITickets } from "./index.interface";

const { Text } = Typography;
const { TabPane } = Tabs;

const Aviasales = () => {
  const [searchId, setSearchId] = useState<string>("");
  const [ticketsAll, setTicketsAll] = useState<ICard[]>([]);
  const [endSearchTickets, setEndSearchTickets] = useState<boolean>(false);
  const [firstPackTickets, setFirstPackTickets] = useState<boolean>(true);

  const [defaultFilter, setDefaultFilter] = useState<string>(SORT.CHEAP);
  const [sortTickets, setSortTickets] = useState<ITickets>({
    tickets: [],
    viewTickets: []
  });
  const [stops, setStops] = useState<Array<string>>(Object.keys(STOPS));

  useEffect(() => {
    getSearchId()
      .then((response) => setSearchId(response.searchId))
      .catch(() =>
        message.warning("Что-то пошло не так, перезагрузите страницу")
      );
  }, []);

  useEffect(() => {
    if (searchId === "") {
      return;
    }

    if (!endSearchTickets) {
      getTickets(searchId)
        .then((response) => {
          setEndSearchTickets(get(response, "stop", false));
          setTicketsAll([...ticketsAll, ...get(response, "tickets", [])]);
        
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

  const onChangeTabs = (key: string): void => {
    const list = filteringTickets(ticketsAll, key, stops);
    setDefaultFilter(key);

    setSortTickets(() => ({
      tickets: list,
      viewTickets: list.slice().splice(0, LIMIT)
    }));
  };

  const onLoadTickets = (): void => {
    setSortTickets({
      tickets: sortTickets.tickets,
      viewTickets: [ ...sortTickets.viewTickets, ...sortTickets.tickets.slice().splice(sortTickets.viewTickets.length, LIMIT) ]
    });
  }

  return (
    <section className="aviasales">
      <PageHeader title="Back" onBack={() => window.history.back()} />
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
