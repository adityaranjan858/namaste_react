import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestroMenu from "./../RestroMenu";
import Mock_Data from "../__mocks__/resMenuListData.json";
import { Provider } from "react-redux";
import { appStore } from "./../../redux/store/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

it("should render restaurant menu ", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestroMenu />
      </Provider>
    );
  });

  const accordionHeader = screen.getByText("Chicken Wing Deal (Save upto 30%)");
  fireEvent.click(accordionHeader);

  const listOfItems = screen.getAllByTestId("foodItems");
  expect(listOfItems.length).toBe(3);
});
