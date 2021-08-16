const PATH_GET_SEARCH_ID = "https://front-test.beta.aviasales.ru/search";
const PATH_GET_TICKETS = "https://front-test.beta.aviasales.ru/tickets";

export const getSearchId = async () => {
  const data = await fetch(PATH_GET_SEARCH_ID);
  const response = await data.json();

  return response;
};

export const getTickets = async (searchId) => {
  const data = await fetch(`${PATH_GET_TICKETS}?searchId=${searchId}`);
  const response = await data.json();

  return response;
};
