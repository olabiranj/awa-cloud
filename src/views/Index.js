import React from 'react';
import Weather from '../components/Weather/Weather';
import Search from '../components/Search/Search';
import {Modal} from '../components/Modal/Modal';
import Header from '../components/Header/Header';

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