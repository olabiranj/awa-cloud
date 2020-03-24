import React from 'react';
import Weather from '../components/Weather';
import Search from '../components/Search';
import Modal from '../components/Modal';
import Header from '../components/Header';

const Index = () => {
    return (
        <>
            <Header />
            <Modal />
            <Search/>
            <Weather/>
        </>
    )
}
export default Index;