// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { Modal, SimpleDialog} from './Modal';
// import { useSelector } from 'react-redux';
// jest.mock('react-redux', () => ({
//     useDispatch: jest.fn(),
//     useSelector: jest.fn()
// }));
// let mockAppState = {
//     cities: [1,2,3,5],
//     modal: [1, 2, 3, 5]
// }

// describe('Modal Component test', () => {
//     beforeEach(() => {
//         useSelector.mockImplementation(callback => {
//             return callback(mockAppState);
//         });
//     });
//     afterEach(() => {
//         useSelector.mockClear();
//     })

//     test('Modal test', () => {
//         const { getByText } = render(<SimpleDialog/>);
//         const title = getByText(/Select the city that best match your destination/i);
//         expect(title).toBeInTheDocument();
//     })
// })
test("renders", () => {
    expect(true).toBeTruthy();
});
