import React from 'react';
import Weather from '../components/Weather';
import Header from '../components/Header';
import Search from '../components/Search';

const Index = () => {
    return (
        <>
            <Header/>
            <Search/>
            <Weather/>
        </>
    )
}
export default Index;