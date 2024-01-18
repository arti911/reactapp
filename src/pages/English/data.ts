import { IDataItem } from "./index.interface";

export const data: IDataItem[] = [
  {
    title: "Present Simple",
    proposalSchemes: [
      {
        title: "Схема вопроса",
        rule: "Вопросительное слово (если есть) / DO/DOES / Существительное или местоимение / глагол / всё остальное",
        examples: [
          "What does he do evening?",
          "Do you take photos?",
          "Do they listen to music?",
          "Does he like to dance?",
        ],
      },
      {
        title: "Схема отрицательного предложения",
        rule: "Существительное или местоимение / DO/DOES / not / глагол / всё остальное",
        examples: ["I do not have breakfast"],
      },
    ],
  },
  {
    title: "Past Simple",
    proposalSchemes: [
      {
        title: "Схема предложения",
        rule: "Существительное или местоимение / глаголо с окончанием -ed | вторая форма неправильного глагола / всё остальное",
        examples: ["I played with my dog"],
      },
      {
        title: "Схема вопроса",
        rule: "Вопросительное слово (если есть) / did / Существительное или местоимение / глагол / всё остальное",
        examples: ["Did you travel to Europe last summer?", "When did she find new friends?"],
      },
      {
        title: "Схема отрицательного предложения",
        rule: "Существительное или местоимение / did / not / глагол без to / всё остальное",
        examples: ["I didn't like onion when I was a child"],
      },
    ],
  },
  {
    title: "Present Continuos",
    proposalSchemes: [
      {
        title: "Схема предложения",
        rule: "Существительное или местоимение / Глагол to be (am, are, is) / глагол на -ing / всё остальное",
        examples: [
          "I am cleaning the kitchen",
          "He is doing the laundry",
          "They are washing the dishes",
        ],
      },
      {
        title: "Схема вопроса",
        rule: "Вопросительное слово (если есть) / Глагол to be (am, are, is) / Существительное или местоимение / глагол на -ing / всё остальное",
        examples: ["Is Mark listening to music?", "What are you doing now?"],
      },
      {
        title: "Схема отрицательного предложения",
        rule: "Существительное или местоимение / Глагол to be (am, are, is) / not / глагол на -ing / всё остальное",
        examples: ["I am not reading now", "She is not cooking", "They are not jogging at moment"],
      },
    ],
  },
  {
    title: "Past Continuous",
    proposalSchemes: [
      {
        title: "Схема предложения",
        rule: "Существительное или местоимение / was/were (I/He/She/It - You/We/They) / глагол с окончанием на -ing / все остальное",
        examples: ["I was reading a book"],
      },
      {
        title: "Схема вопроса",
        rule: "Вопросительное слово (если есть) / was/were / Существительное или местоимение / глагол с окончанием на -ing / все остальное",
        examples: [
          "Was Adam listening to the music when he came?",
          "Were they discussing the plans?",
          "What was Adam doing when she came?",
        ],
      },
      {
        title: "Схема отрицательного предложения",
        rule: "Существительное или местоимение / was/were / not / глагол с окончанием на -ing / все остальное",
        examples: [
          "This time last year I was not living in Russia",
          "He was not eating dinner when the phone rang",
          "We were working hard while they were not doing anything",
        ],
      },
    ],
  },
  {
    title: "Future Continuous",
    proposalSchemes: [
      {
        title: "Схема предложения",
        rule: "Существительное или местоимение / will / be / глагол с окончанием на -ing / все остальное",
        examples: ["I will be waiting for you at 7 o'clock tomorrow"],
      },
      {
        title: "Схема вопроса",
        rule: "Вопросительное слово (если есть) / will / Существительное или местоимение / be / глагол с окончанием на -ing / все остальное",
        examples: [
          "Will you be working late at the office tonight?",
          "Will she be leaving next Friday?",
          "Will the storm be coming soon?",
        ],
      },
      {
        title: "Схема отрицательного предложения",
        rule: "Существительное или местоимение / will / not / be / глагол с окончанием на -ing / все остальное",
        examples: ["I will not be travelling next winter."],
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
        rule: "Вопросительное слово (если есть) / will / Существительное или местоимение / глагол / всё остальное",
        examples: ["Will he visit the museum?", "When will they visit the museum?"],
      },
      {
        title: "Схема отрицательного предложения",
        rule: "Существительное или местоимение / will / not / глагол / всё остальное",
        examples: ["I will not go to New York"],
      },
    ],
  },
  {
    title: "to be going to",
    proposalSchemes: [
      {
        title: "Схема вопроса",
        rule: "Вопросительное слово (если есть) / Глагол to be (am, are, is) / Существительное или местоимение / going to / глагол / всё остальное",
        examples: ["Are you going to take a torch?", "What are you going to take?"],
      },
    ],
  },
  {
    title: "can",
    proposalSchemes: [
      {
        title: "Схема вопроса",
        rule: "Вопросительное слово (если есть) / can / Существительное или местоимение / глагол / всё остальное",
        examples: ["Can you dance salsa?", "What can Eric sing?"],
      },
    ],
  },
];
