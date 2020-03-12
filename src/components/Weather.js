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
    useEffect(()=>  {
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
        },[]
    )
        

    return (
        <>
            <Offline>You're offline, check your network connectivity</Offline>
            <Online> </Online>
            {current ? <h4 className='text-secodary mr-4 float-right'>Your current location is {current}</h4> : ''}
            {weather.loading || errMsg ? 
                <div>
                    {errMsg ? <h5 className='text-info ml-4 text-danger'>{errMsg}</h5> :
                        <h5 className='text-info ml-4'>Our AI is detecting your location...</h5>}
                    <div className="container bg-light bg-skeleton col-lg-5">

                    </div>
                    <div className="container bg2 col-lg-5">
                        <div className="row">
                            <div className="flag-7">
                                <div className="container-fulid skeleton">
                                </div>
                            </div>
                            <div className="flag-3 float-right">
                                <div className="skeleton png">

                                </div>
                            </div>
                        </div>
                        <div className="container-fulid skeleton">
                        </div>
                        <div className="row info mt-4">
                            <div className="flag-6">
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                            </div>
                            <div className="flag-6 float-right line">
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                <div className="container-fulid skeleton">
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                </div> :
                <>
                {weather.city.map(city => (
                    <div key='hu'>
                            <div className="container bg-light bg col-lg-5">

                            </div>
                            <div className="container bg2 col-lg-5">
                                <div className="row">
                                    <div className="flag-7">
                                        <h2 className='head'>City: <span className='text-secondary'>{city.location.name}</span></h2>
                                    </div>
                                    <div className="flag-3 float-right">
                                    <div className="png" style={{ backgroundImage: `url('${city.current.weather_icons[0]}')`}}>

                                        </div>
                                    </div>
                                </div>
                                <h3 className='head'>Country: <span className='text-secondary'>{city.location.country}</span></h3>
                                <div className="row info mt-4">
                                    <div className="flag-6">
                                        <p>Weather: <span className='text-secondary'>{city.current.weather_descriptions[0]}</span></p>
                                        <p>Temperature: <span className='text-secondary'>{city.current.temperature}&deg;C</span></p>
                                        <p>Wind Speed: <span className='text-secondary'>{city.current.wind_speed}Km/H</span></p>
                                        <p>Wind Direction: <span className='text-secondary'>{city.current.wind_dir}</span></p>
                                        <p>Local Time: <span className='text-secondary'>{city.location.localtime}</span></p>
                                        <p>UTC: <span className='text-secondary'>{city.location.utc_offset}</span></p>
                                    </div>
                                    <div className="flag-6 float-right line">
                                        <p>Pressure: <span className='text-secondary'>{city.current.pressure}mb</span></p>
                                        <p>Humidity: <span className='text-secondary'>{city.current.humidity}%</span></p>
                                        <p>Cloud Cover: <span className='text-secondary'>{city.current.cloudcover}%</span></p>
                                        <p>Visibility: <span className='text-secondary'>{city.current.visibility}km</span></p>
                                        <p>Latitude: <span className='text-secondary'>{city.location.lat}&deg;</span></p>
                                        <p>Longitude: <span className='text-secondary'>{city.location.lon}&deg;</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </>
                }
            
        </>
    )
}
export default Weather;