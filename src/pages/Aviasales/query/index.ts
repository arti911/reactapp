import { TicketsResponse } from "../index.interface";

const PATH_GET_SEARCH_ID = "https://front-test.beta.aviasales.ru/search";
const PATH_GET_TICKETS = "https://front-test.beta.aviasales.ru/tickets";

export const getSearchId = async <T>(): Promise<T | undefined> => {
  try {
    const response = await fetch(PATH_GET_SEARCH_ID);

    if (response.ok) {
      const data = (await response.json()) as T;

      return data;
    }

    throw new Error(response.statusText);
  } catch (e) {
    console.log("🚀 ~ getSearchId ~ e:", e);
  }
};

export const getTickets = async (searchId: string) => {
  let status: boolean = true;

  while (status) {
    try {
      const data = await fetch(`${PATH_GET_TICKETS}?searchId=${searchId}`);

      if (data.status >= 200 && data.status <= 299) {
        const response = (await data.json()) as TicketsResponse;
        return response;
      } else {
        status = false;
        throw new Error("Что-то пошло не так");
      }
    } catch (error) {
      status = true;
      console.log("🚀 ~ getTickets ~ error:", error);
    }
  }
};
