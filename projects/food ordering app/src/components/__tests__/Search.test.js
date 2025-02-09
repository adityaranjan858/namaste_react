import { fireEvent, render, screen } from "@testing-library/react";
import Body from "./../Body";
import MOCK_DATA from "./../__mocks__/resListMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  // fetch fn returns Promise
  return Promise.resolve({
    // Promise returns a json
    json: () => {
      // json returns a Promise once again
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// beforeAll(() => {
//   console.log("before all");
// });
// beforeEach(() => {
//   console.log("before each");
// });
// afterAll(() => {
//   console.log("after all");
// });
// afterEach(() => {
//   console.log("after each");
// });

it("should search res list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resData");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resData");

  expect(cardsAfterSearch.length).toBe(3);
});

it("should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resData");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedResBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedResBtn);

  const cardsAfterFilter = screen.getAllByTestId("resData");

  expect(cardsAfterFilter.length).toBe(8);
});
