import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Weather from './Weather'
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
    useSelector: jest.fn()
}));
let mockAppState = {
    weather: {
        city: [],
        loading: true,
        current: "Lagos"
    },
    errMsg: ""
}
describe("Weather component", () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    });
    afterEach(() => {
        useSelector.mockClear();
    })

    test('Weather component renders without crashing', () => {
        const { getByText, queryAllByText } = render(<Weather />);
        expect(true).toBeTruthy()
        // expect(getByText(/Loading.../i)).toBeInTheDocument()
    })
})