import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// import { Offline, Online } from "react-detect-offline";

import Modal from './Modal';

const Weather = () => {
    const weather = useSelector(state => state.weather);
    
    let [dayArr, setDayArr] = useState([]);
    useEffect(() => {
        let dayArr2 = []
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let d = new Date();
        for (let index = 0; index < 5; index++) {
            dayArr2.push(days[d.getDay()])
            d.setDate(d.getDate() + 1)

        }
        setDayArr([...dayArr2])
    }, [])
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
                        <Modal/>
                            <div className='text-center'>
                                <p className='text-light'>Loading...</p>
                                <h1 className='text-light head'>0&deg;</h1>
                                <p className='text-light'>0&deg;/0&deg;</p>
                                <img src="/weather/01-s.png" alt="" height='100' />
                            </div>
                            <div className='div-down text-center'>
                                <div className="container day">
                                    <div className="flag-2">
                                        <p className='text-light'>loading</p>
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
                                        <p className='text-light'>loading</p>
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
                                        <p className='text-light'>loading</p>
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
                                        <p className='text-light'>loading</p>
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
                                        <p className='text-light'>loading</p>
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
                            {weather.city.map( city => (
                                <div key='der'>
                                    <div className='text-center'>
                                        <p className='text-light'>{weather.current}</p>
                                        <h1 className='text-light head'>{city.DailyForecasts[0].Temperature.Minimum.Value}&deg;</h1>
                                        <p className='text-light'>{city.DailyForecasts[0].Temperature.Minimum.Value}&deg;/{city.DailyForecasts[0].Temperature.Maximum.Value}&deg;</p>
                                        <img src={weatherImage(city.DailyForecasts[0].Day.Icon)} alt="" height='100' />
                                    </div>
                                    <div className='div-down text-center'>
                                        <div className="container day">
                                            <div className="flag-2">
                                                <p className='text-light'>{dayArr[0]}</p>
                                            </div>
                                            <div className="flag-2">
                                                <img src={weatherImage(city.DailyForecasts[0].Day.Icon)} alt="" height='30' />
                                            </div>
                                            <div className="flag-2">
                                                <p className='text-light'>{city.DailyForecasts[0].Temperature.Minimum.Value}&deg;/{city.DailyForecasts[0].Temperature.Maximum.Value}&deg;</p>
                                            </div>
                                        </div>
                                        <div className="container day">
                                            <div className="flag-2">
                                                <p className='text-light'>{dayArr[1]}</p>
                                            </div>
                                            <div className="flag-2">
                                                <img src={weatherImage(city.DailyForecasts[1].Day.Icon)} alt="" height='30' />
                                            </div>
                                            <div className="flag-2">
                                                <p className='text-light'>{city.DailyForecasts[1].Temperature.Minimum.Value}&deg;/{city.DailyForecasts[1].Temperature.Maximum.Value}&deg;</p>
                                            </div>
                                        </div>
                                        <div className="container day">
                                            <div className="flag-2">
                                                <p className='text-light'>{dayArr[2]}</p>
                                            </div>
                                            <div className="flag-2">
                                                <img src="/weather/06-s.png" alt="" height='30' />
                                            </div>
                                            <div className="flag-2">
                                                <p className='text-light'>{city.DailyForecasts[2].Temperature.Minimum.Value}&deg;/{city.DailyForecasts[2].Temperature.Maximum.Value}&deg;</p>
                                            </div>
                                        </div>
                                        <div className="container day">
                                            <div className="flag-2">
                                                <p className='text-light'>{dayArr[3]}</p>
                                            </div>
                                            <div className="flag-2">
                                                <img src={weatherImage(city.DailyForecasts[3].Day.Icon)} alt="" height='30' />
                                            </div>
                                            <div className="flag-2">
                                                <p className='text-light'>{city.DailyForecasts[3].Temperature.Minimum.Value}&deg;/{city.DailyForecasts[3].Temperature.Maximum.Value}&deg;</p>
                                            </div>
                                        </div>
                                        <div className="container day">
                                            <div className="flag-2">
                                                <p className='text-light'>{dayArr[4]}</p>
                                            </div>
                                            <div className="flag-2">
                                                <img src={weatherImage(city.DailyForecasts[4].Day.Icon)} alt="" height='30' />
                                            </div>
                                            <div className="flag-2">
                                                <p className='text-light'>{city.DailyForecasts[4].Temperature.Minimum.Value}&deg;/{city.DailyForecasts[4].Temperature.Maximum.Value}&deg;</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                    </>
                }

            </div>
                
            

        </>
    )
}
export default Weather;