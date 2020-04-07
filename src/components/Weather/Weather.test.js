import React from "react";
// import { Provider } from 'react-redux';
// import store from '../../store';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Weather from "./Weather";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));
let mockAppState = {
    weather: {
        city: [],
        loading: true,
        current: "Abuja, Nigeria",
    },
    errMsg: "",
};
describe("Weather component", () => {
    beforeEach(() => {
        useSelector.mockImplementation((callback) => {
            return callback(mockAppState);
        });
    });
    afterEach(() => {
        useSelector.mockClear();
    });

    test("Weather component should renders without any data", () => {
        const { getByText } = render(<Weather />);
        expect(getByText(/Loading.../i)).toBeInTheDocument();
    });
    test("Weather component should renders without any data", () => {
        const localMockState = {
            ...mockAppState,
            weather: {
                city: [
                    {
                        Headline: {
                            EffectiveDate: "2020-04-08T13:00:00+01:00",
                            EffectiveEpochDate: 1586347200,
                            Severity: 5,
                            Text:
                                "Air quality will be unhealthy for sensitive groups Wednesday morning through Wednesday evening",
                            Category: "thunderstorm",
                            EndDate: "2020-04-09T01:00:00+01:00",
                            EndEpochDate: 1586390400,
                            MobileLink:
                                "http://m.accuweather.com/en/ng/abuja/254085/extended-weather-forecast/254085?lang=en-us",
                            Link:
                                "http://www.accuweather.com/en/ng/abuja/254085/daily-weather-forecast/254085?lang=en-us",
                        },
                        DailyForecasts: [
                            {
                                Temperature: {
                                    Minimum: {
                                        Value: 93,
                                    },
                                    Maximum: {
                                        Value: 92,
                                    },
                                },
                                Day: {
                                    Icon: 3,
                                },
                            },
                            {
                                Temperature: {
                                    Minimum: {
                                        Value: 93,
                                    },
                                    Maximum: {
                                        Value: 92,
                                    },
                                },
                                Day: {
                                    Icon: 3,
                                },
                            },
                            {
                                Temperature: {
                                    Minimum: {
                                        Value: 93,
                                    },
                                    Maximum: {
                                        Value: 92,
                                    },
                                },
                                Day: {
                                    Icon: 3,
                                },
                            },
                            {
                                Temperature: {
                                    Minimum: {
                                        Value: 93,
                                    },
                                    Maximum: {
                                        Value: 92,
                                    },
                                },
                                Day: {
                                    Icon: 3,
                                },
                            },
                            {
                                Temperature: {
                                    Minimum: {
                                        Value: 93,
                                    },
                                    Maximum: {
                                        Value: 92,
                                    },
                                },
                                Day: {
                                    Icon: 3,
                                },
                            },
                        ],
                    },
                ],
                loading: false,
                current: "Abuja, Nigeria",
            },
            errMsg: "",
        };
        useSelector.mockImplementation((callback) => {
            return callback(localMockState);
        });
        const { getByTestId } = render(<Weather />);
        expect(getByTestId("weatherDiv")).toBeInTheDocument();
    });
});
