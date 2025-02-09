import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestroMenu from "./../RestroMenu";
import Mock_Data from "../__mocks__/resMenuListData.json";
import { Provider } from "react-redux";
import { appStore } from "./../../redux/store/appStore";
import "@testing-library/jest-dom";
import Header from "./../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "./../Cart";

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
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Lunch Combos");
  fireEvent.click(accordionHeader);

  const listOfItems = screen.getAllByTestId("foodItems");
  expect(listOfItems.length).toBe(4);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  expect(addBtns.length).toBe(4);
});

it("should render initial cart value", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const initialCartVal = screen.getByText("Cart-(0 items)");
  expect(initialCartVal).toBeInTheDocument();
});

it("should render cart value 1 items after clicking on 1st add btn", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  const firstAddBtnCartVal = screen.getByText("Cart-(1 items)");
  expect(firstAddBtnCartVal).toBeInTheDocument();
});

it("should render cart value 2 items after clicking on 2nd add btn", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[1]);

  const secondAddBtnCartVal = screen.getByText("Cart-(2 items)");
  expect(secondAddBtnCartVal).toBeInTheDocument();
});

it("should render total no of items available in the cart component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Lunch Combos");
  fireEvent.click(accordionHeader);

  const listOfItems = screen.getAllByTestId("foodItems");
  expect(listOfItems.length).toBe(6);
});

it("should render clear cart in the cart component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  expect(clearBtn).toBeInTheDocument();

  fireEvent.click(clearBtn);
  const emptyCart = screen.getByText("Cart is Empty. Add Items to the Cart!");
  expect(emptyCart).toBeInTheDocument();
});
