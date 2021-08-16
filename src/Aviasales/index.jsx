import React, { useEffect, useState } from "react";
import { message, Spin, Tabs } from "antd";

import Filter from "./components/Filter";
import List from "./components/List";

import { getSearchId, getTickets } from "./query";
import { filteringFastTickets, filteringTickets } from "./utils";

import "./style.scss";

const { TabPane } = Tabs;

const Aviasales = () => {
  const [searchId, setSearchId] = useState(null);
  const [ticketsAll, setTicketsAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [endSearchTickets, setEndSearchTickets] = useState(false);

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

          if (ticketsAll.length > 0) {
            setLoading(false);
          }
        })
        .catch(() => {
          message.warning(
            "Что-то пошло не так, мы не дослали все билеты которые нашли. Если хотите увидеть все билеты перезагрузите страницу"
          );
          setLoading(false);
        });
    }
  }, [endSearchTickets, searchId, ticketsAll]);

  return (
    <div className="aviasales">
      <aside className="aviasales__filters">
        <Filter />
      </aside>
      <div className="aviasales__content">
        Aviasales
        <Tabs defaultActiveKey="1">
          <TabPane tab="Самый дешевый" key="1">
            {`Найдено ${ticketsAll.length} билетов`}

            {loading && <Spin />}

            {ticketsAll.length > 0 && (
              <List
                tickets={ticketsAll}
                onFilteringTicketsHandler={filteringTickets}
              />
            )}
          </TabPane>
          <TabPane tab="Самый быстрый" key="2">
            {`Найдено ${ticketsAll.length} билетов`}

            {ticketsAll.length > 0 && (
              <List
                tickets={ticketsAll}
                onFilteringTicketsHandler={filteringFastTickets}
              />
            )}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Aviasales;
