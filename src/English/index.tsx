import { Tabs } from "antd";

import PresentSimple from "./components/PresentSimple";

const { TabPane } = Tabs;

const English = () => {
  return (
    <section>
      <Tabs tabPosition="bottom">
        <TabPane tab="Present Simple" key="1">
          <PresentSimple />
        </TabPane>
        <TabPane tab="Present Continuous" key="2">
          <details>
            <summary>
              <b>Схема предложения</b>
            </summary>
            <div>
              Существительное или местоимение - Глагол to be (am, are, is) -
              глагол на -ing - всё остальное
            </div>
            <h3>Пример</h3>
            <div>I am cleaning the kitchen</div>
            <div>He is doing the laundry</div>
            <div>They are washing the dishes</div>
          </details>

          <hr />

          <details>
            <summary>
              <b>Схема вопроса</b>
            </summary>
            <div>
              Вопросительное слово (если есть) - Глагол to be (am, are, is) -
              Существительное или местоимение - глагол на -ing - всё остальное
            </div>
            <h3>Примеры</h3>
            <div>Is Mark listening to music?</div>
            <div>What are you doing now?</div>
          </details>

          <hr />

          <details>
            <summary>
              <b>Схема отрицательного предложения</b>
            </summary>
            <div>
              Существительное или местоимение - Глагол to be (am, are, is) - not
              - глагол на -ing - всё остальное
            </div>
            <h3>Пример</h3>
            <div>I am not reading now</div>
            <div>She is not cooking</div>
            <div>They are not jogging at moment</div>
          </details>

          <hr />
        </TabPane>
        <TabPane tab="Future Simple" key="3">
          <details>
            <summary>
              <b>Схема предложения</b>
            </summary>
            <div>
              Существительное или местоимение - will - глагол - всё остальное
            </div>
            <h3>Пример</h3>
            <div>I will go to Paris.</div>
          </details>

          <hr />

          <details>
            <summary>
              <b>Схема вопроса</b>
            </summary>
            <div>
              Вопросительное слово (если есть) - will - Существительное или
              местоимение - глагол - всё остальное
            </div>
            <h3>Пример</h3>
            <div>Will he visit the museum?</div>
            <div>When will they visit the museum?</div>
          </details>

          <hr />

          <details>
            <summary>
              <b>Схема отрицательного предложения</b>
            </summary>
            <div>
              Существительное или местоимение - will - not - глагол - всё
              остальное
            </div>
            <h3>Пример</h3>
            <div>I will not go to New York</div>
            <div></div>
            <div></div>
          </details>

          <hr />
        </TabPane>
        <TabPane tab="Общие" key="4">
          <h2>to be going to</h2>

          <details>
            <summary>Схема вопроса</summary>
            <div>
              Вопросительное слово (если есть) - Глагол to be (am, are, is) -
              Существительное или местоимение - going to - глагол - всё
              остальное
            </div>
            <h3>Пример</h3>
            <div>Are you going to take a torch?</div>
            <div>What are you going to take?</div>
          </details>

          <hr />

          <h2>can</h2>

          <details>
            <summary>Схема вопроса</summary>
            <div>
              Вопросительное слово (если есть) - can - Существительное или
              местоимение - глагол - всё остальное
            </div>
            <h3>Пример</h3>
            <div>Can you dance salsa?</div>
            <div>What can Eric sing?</div>
          </details>

          <hr />
        </TabPane>
      </Tabs>
    </section>
  );
};

export default English;
