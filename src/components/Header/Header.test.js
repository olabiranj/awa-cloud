import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

afterEach(cleanup);

test("Header Test", () => {
  const { getByText } = render(<Header />);
  const title = getByText(/Awa Cloud/i);
  expect(title).toBeInTheDocument();
});

// test('Header Test 2', () => {
//     const { getByTestId } = render(<Header/>);
//     const title = getByTestId('head');
//     expect(title).toHaveTextContent('Awa Cloud');
// })
