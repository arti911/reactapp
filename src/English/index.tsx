import { Tabs, Layout } from "antd";

import PresentSimple from "./components/PresentSimple";
import { data } from "./data";

const { TabPane } = Tabs;

const English = () => {
  return (
    <Layout>
      <Tabs tabPosition="top" type="card" centered>
        {data.map((item, index) => (
          <TabPane tab={item.title} key={index + 1}>
            <PresentSimple schemes={item.proposalSchemes} />
          </TabPane>
        ))}
      </Tabs>
    </Layout>
  );
};

export default English;
