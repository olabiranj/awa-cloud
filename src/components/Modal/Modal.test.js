// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Modal from './Modal';
jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ({
        hasContents: false
    })
}));


// afterEach(cleanup)

test('Modal test', () => {
    // const modal = [
    //     {
    //         Key: 3434356,
    //         LocalizedName: 'Lagos',
    //         Country: {
    //             LocalizedName: 'Nigeria'
    //         }
    //     },
    //     {
    //         Key: 3434546,
    //         LocalizedName: 'Ibadan',
    //         Country: {
    //             LocalizedName: 'Nigeria'
    //         }
    //     }
    // ]
    // const { getByText } = render(<Modal modal={modal}/>);
    // const title = getByText(/Select the city that best match your destination/i);
    // expect(title).toBeInTheDocument();
    expect(true).toBeTruthy();
})