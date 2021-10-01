import { IDataItem } from "./index.interface";

export const data: IDataItem[] = [
  {
    title: "Present Simple",
    proposalSchemes: [
      {
        title: "Схема вопроса",
        rule:
          "Вопросительное слово (если есть) / DO/DOES / Существительное или местоимение / глагол / всё остальное",
        examples: [
          "What does he do evening?",
          "Do you take photos?",
          "Do they listen to music?",
          "Does he like to dance?",
        ],
      },
      {
        title: "Схема отрицательного предложения",
        rule:
          "Существительное или местоимение / DO/DOES / not / глагол / всё остальное",
        examples: ["I do not have breakfast"],
      },
    ],
  },
  {
    title: "Present Continuos",
    proposalSchemes: [
      {
        title: "Схема предложения",
        rule:
          "Существительное или местоимение / Глагол to be (am, are, is) / глагол на -ing / всё остальное",
        examples: [
          "I am cleaning the kitchen",
          "He is doing the laundry",
          "They are washing the dishes",
        ],
      },
      {
        title: "Схема вопроса",
        rule:
          "Вопросительное слово (если есть) / Глагол to be (am, are, is) / Существительное или местоимение / глагол на -ing / всё остальное",
        examples: ["Is Mark listening to music?", "What are you doing now?"],
      },
      {
        title: "Схема отрицательного предложения",
        rule:
          "Существительное или местоимение / Глагол to be (am, are, is) / not / глагол на -ing / всё остальное",
        examples: [
          "I am not reading now",
          "She is not cooking",
          "They are not jogging at moment",
        ],
      },
    ],
  },
  {
    title: "Future Simple",
    proposalSchemes: [
      {
        title: "Схема предложения",
        rule: "Существительное или местоимение / will / глагол / всё остальное",
        examples: ["I will go to Paris."],
      },
      {
        title: "Схема вопроса",
        rule:
          "Вопросительное слово (если есть) / will / Существительное или местоимение / глагол / всё остальное",
        examples: [
          "Will he visit the museum?",
          "When will they visit the museum?",
        ],
      },
      {
        title: "Схема отрицательного предложения",
        rule:
          "Существительное или местоимение / will / not / глагол / всё остальное",
        examples: ["I will not go to New York"],
      },
    ],
  },
  {
    title: "to be going to",
    proposalSchemes: [
      {
        title: "Схема вопроса",
        rule:
          "Вопросительное слово (если есть) / Глагол to be (am, are, is) / Существительное или местоимение / going to / глагол / всё остальное",
        examples: [
          "Are you going to take a torch?",
          "What are you going to take?",
        ],
      },
    ],
  },
  {
    title: "can",
    proposalSchemes: [
      {
        title: "Схема вопроса",
        rule:
          "Вопросительное слово (если есть) / can / Существительное или местоимение / глагол / всё остальное",
        examples: ["Can you dance salsa?", "What can Eric sing?"],
      },
    ],
  },
];
