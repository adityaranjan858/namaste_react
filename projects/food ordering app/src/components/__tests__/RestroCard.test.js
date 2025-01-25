import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import MOCK_DATA from "../__mocks__/resCardMockData.json";
import "@testing-library/jest-dom";
import { withRestroOPenStatus } from "./../RestroCard";

// Create a wrapped component using the HOC
const WrappedRestroCard = withRestroOPenStatus(RestroCard);

describe("RestroCard page testing", () => {
  it("should render props data", () => {
    render(<RestroCard resDataList={MOCK_DATA} />);
    const nameOfRestaurant = screen.getByText("Chinese Wok");
    expect(nameOfRestaurant).toBeInTheDocument();
  });

  it("should render restrocard with Promoted Label", () => {
    // test HOC - withRestroOPenStatus

    render(<WrappedRestroCard resDataList={MOCK_DATA} />);

    const label = screen.getByText(/restaurant is open/i);

    expect(label).toBeInTheDocument();
  });
});
