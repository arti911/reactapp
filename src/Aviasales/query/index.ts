import { IResponseTickets, ISearchId } from "../index.interface";

const PATH_GET_SEARCH_ID = "https://front-test.beta.aviasales.ru/search";
const PATH_GET_TICKETS = "https://front-test.beta.aviasales.ru/tickets";

export const getSearchId = async () => {
  const data = await fetch(PATH_GET_SEARCH_ID);
  const response: ISearchId = await data.json();

  return response;
};

export const getTickets = async (searchId: string) => {
  let status: boolean = true;

  while (status) {
    try {
      const data = await fetch(`${PATH_GET_TICKETS}?searchId=${searchId}`);
  
      if (data.status >= 200 && data.status <= 299) {
        const response: IResponseTickets = await data.json();
        return response;
      } else {
        status = false;
        throw new Error("Что-то пошло не так");
      }
    } catch (error) {
      status = true;
      console.log("---data", error);
    }
  }
};
