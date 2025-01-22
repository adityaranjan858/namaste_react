import { render, screen } from "@testing-library/react";
import ContactUs from "./../components/ContactUs";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  test("should load button inside contact us component", () => {
    render(<ContactUs />);
    let button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load submit text inside contact us component", () => {
    render(<ContactUs />);
    let submitText = screen.getByText("Submit");
    expect(submitText).toBeInTheDocument();
  });

  test("should load input name inside contact us component", () => {
    render(<ContactUs />);
    let inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("should load multiple input inside contact us component", () => {
    render(<ContactUs />);

    //   querying
    let multipleInput = screen.getAllByRole("textbox");

    //   Assertion
    expect(multipleInput.length).toBe(2);
  });

  test("should load multiple headings inside the contact us component", () => {
    render(<ContactUs />);

    // Querying
    let heading = screen.getAllByRole("heading");

    // Assertion
    expect(heading.length).toBe(3);
  });
});
