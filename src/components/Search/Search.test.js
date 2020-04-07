import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import Search from "./Search";

jest.mock("axios");
jest.mock("react-redux", () => ({
    useDispatch: () => jest.fn(),
}));

test("Search with cities", () => {
    const city = "lagos";
    const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=kH2TWY2TmQ3USiRPnvyZPPweMBM1ZIt7&q=${city}`;
    const { queryByTestId } = render(<Search />);
    expect(queryByTestId("input")).toHaveTextContent("");
    axiosMock.get.mockResolvedValueOnce({
        data: { greeting: "hello there" },
    });

    fireEvent.change(queryByTestId("input"), { target: { value: city } });
    fireEvent.submit(queryByTestId("form"));

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});
