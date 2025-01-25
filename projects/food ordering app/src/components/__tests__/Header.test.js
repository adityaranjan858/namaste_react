import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "./../../redux/store/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header page testing", () => {
  it("should load login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  it("should load cart with 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartText = screen.getByText("Cart-(0 items)");
    expect(cartText).toBeInTheDocument();
  });

  it("should render Header Component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartText = screen.getByText(/cart/i);
    expect(cartText).toBeInTheDocument();
  });

  it("should change login button to logout in the header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });

    expect(logoutBtn).toBeInTheDocument();
  });
});
