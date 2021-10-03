import React from "react";
import TransactionTable from "../TransactionTable";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockData = {
  items: [
    {
      id: "1",
      amount: 10.25,
      currency: "GBP",
      description: "desc 1",
      status: "CREATED",
      createdAt: "10-03-2021",
    },
  ],
};

test("Component renders a table", () => {
  const { getByTestId } = render(<TransactionTable data={mockData} />);

  const thead = getByTestId("table");
  expect(thead).toBeDefined();
});

test("Table Header renders correct headers with proper casing", () => {
  const { getByText } = render(<TransactionTable data={mockData} />);

  expect(getByText("1")).toBeInTheDocument();
  expect(getByText(10.25)).toBeInTheDocument();
  expect(getByText("GBP")).toBeInTheDocument();
  expect(getByText("desc 1")).toBeInTheDocument();
  expect(getByText("CREATED")).toBeInTheDocument();
  expect(getByText("CreatedAt")).toBeInTheDocument();
});

test("Table renders correct values", () => {
  const { getByText } = render(<TransactionTable data={mockData} />);

  expect(getByText("Id")).toBeInTheDocument();
  expect(getByText("Amount")).toBeInTheDocument();
  expect(getByText("Currency")).toBeInTheDocument();
  expect(getByText("Description")).toBeInTheDocument();
  expect(getByText("Status")).toBeInTheDocument();
  expect(getByText("10-03-2021")).toBeInTheDocument();
});
