import React from 'react';
import Weather from '../components/Weather';
import Search from '../components/Search';
import Modal from '../components/Modal';

const Index = () => {
    return (
        <>
            <Modal />
            <Search/>
            <Weather/>
        </>
    )
}
export default Index;