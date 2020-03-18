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


    return (
        <>
            
            <div className="container bg-light bg-skeleton col-lg-5">
            </div>
            <div className="container bg2 col-lg-5">
                <div className='text-center'>
                    <h1 className='text-light'>Cloudy</h1>
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

            </div>
                
            

        </>
    )
}
export default Weather;