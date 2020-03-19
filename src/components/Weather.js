import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Offline, Online } from "react-detect-offline";
import { getCurrentCity } from "../actions/weatherActions";

const Weather = () => {
    const weather = useSelector(state => state.weather);
    const errMsg = useSelector(state => state.errMsg.errMsg);
    const [current, setCurrent] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'SET_CITY_LOADING'
        })
        axios.get('https://extreme-ip-lookup.com/json')
            .then(
                (res) => {
                    dispatch(getCurrentCity(res.data.city))
                    setCurrent(res.data.city)
                    axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=7LiG257r9k285GCrDgHLQ7N1NArktXY3&q=${res.data.city}`)
                    .then(res => console.log(res.data))
                }
            )
            .catch((err) => {
                dispatch({
                    type: 'SET_CITY_LOADING'
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: 'Your current location could not be found, Kindly search for another city.'
                })
            })
    }, []
    )

    let weatherImage = (icon) => {
        if (icon === 1) {
            return '/weather/01-s.png';
        } else if (icon === 2) {
            return '/weather/05-s.png';
        } else if (icon === 3) {
            return '/weather/03-s.png';
        } else if (icon === 4) {
            return '/weather/04-s.png';
        } else if (icon === 5) {
            return '/weather/05-s.png';
        } else if (icon === 6) {
            return '/weather/06-s.png';
        } else if (icon === 7) {
            return '/weather/07-s.png';
        } else if (icon === 8) {
            return '/weather/08-s.png';
        } else if (icon === 11) {
            return '/weather/11-s.png';
        } else if (icon === 12) {
            return '/weather/12-s.png';
        } else if (icon === 13) {
            return '/weather/13-s.png';
        } else if (icon === 14) {
            return '/weather/14-s.png';
        } else if (icon === 15) {
            return '/weather/15-s.png';
        } else if (icon === 16) {
            return '/weather/16-s.png';
        } else if (icon === 17) {
            return '/weather/17-s.png';
        } else if (icon === 18) {
            return '/weather/18-s.png';
        } else if (icon === 19) {
            return '/weather/19-s.png';
        } else if (icon === 20) {
            return '/weather/20-s.png';
        } else if (icon === 21) {
            return '/weather/21-s.png';
        } else if (icon === 22) {
            return '/weather/22-s.png';
        } else if (icon === 23) {
            return '/weather/23-s.png';
        } else if (icon === 24) {
            return '/weather/24-s.png';
        } else if (icon === 25) {
            return '/weather/25-s.png';
        } else if (icon === 26) {
            return '/weather/26-s.png';
        } else if (icon === 29) {
            return '/weather/29-s.png';
        } else if (icon === 30) {
            return '/weather/30-s.png';
        } else if (icon === 31) {
            return '/weather/31-s.png';
        } else if (icon === 32) {
            return '/weather/32-s.png';
        } else if (icon === 33) {
            return '/weather/33-s.png';
        } else if (icon === 34) {
            return '/weather/34-s.png';
        } else if (icon === 35) {
            return '/weather/35-s.png';
        } else if (icon === 36) {
            return '/weather/36-s.png';
        } else if (icon === 37) {
            return '/weather/37-s.png';
        } else if (icon === 38) {
            return '/weather/38-s.png';
        } else if (icon === 39) {
            return '/weather/39-s.png';
        } else if (icon === 40) {
            return '/weather/40-s.png';
        } else if (icon === 41) {
            return '/weather/41-s.png';
        } else if (icon === 42) {
            return '/weather/42-s.png';
        } else if (icon === 43) {
            return '/weather/43-s.png';
        } else if (icon === 44) {
            return '/weather/44-s.png';
        }
    };

    return (
        <>
            
            <div className="container bg-light bg-skeleton col-lg-5">
            </div>
            <div className="container bg2 col-lg-5">
                {
                    weather.loading ?
                    <>
                            <div className='text-center'>
                                <p className='text-light'>Loading...</p>
                                <h1 className='text-light head'>0&deg;</h1>
                                <p className='text-light'>0&deg;/0&deg;</p>
                                <img src="/weather/01-s.png" alt="" height='100' />
                            </div>
                            <div className='div-down text-center'>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Monday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Tuesday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Wednesday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Thursday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Friday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>

                            </div>
                    </> :
                    <>
                            <div className='text-center'>
                                <p className='text-light'>Lagos</p>
                                <h1 className='text-light head'>29&deg;</h1>
                                <p className='text-light'>18&deg;/18&deg;</p>
                                <img src="/weather/01-s.png" alt="" height='100' />
                            </div>
                            <div className='div-down text-center'>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Monday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Tuesday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Wednesday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Thursday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>Friday</p>
                                    </div>
                                    <div className="flag-2">
                                        <img src="/weather/06-s.png" alt="" height='30' />
                                    </div>
                                    <div className="flag-2">
                                        <p className='text-light'>18&deg;/18&deg;</p>
                                    </div>
                                </div>

                            </div>
                    </>
                }

            </div>
                
            

        </>
    )
}
export default Weather;