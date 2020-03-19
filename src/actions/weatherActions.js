import axios from 'axios';

export const getCity = (city) => dispatch => {
    axios
        .get(`http://api.weatherstack.com/current?access_key=c19a75b33166036ceb5889a1f90b5dc6&query=${city}`)
        .then(res => {
            if (res.data.success === false) {
                dispatch({
                    type: 'SET_CITY_LOADING'
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: 'Something went wrong'
                })
            } else {
                dispatch({
                    type: 'GET_CITY',
                    payload: res.data
                })
            }
        })
        .catch(err =>
            {
                dispatch({
                type: 'SET_CITY_LOADING'
            })
            dispatch({
                type: 'SET_ERROR',
                payload: 'Weather informations about the location you entered could not be found, Kindly search for another city.'
            })}
        );
};

export const getCurrentCity = (city) => dispatch => {
    axios
        .get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${935132}?apikey=7LiG257r9k285GCrDgHLQ7N1NArktXY3`)
        .then(res => {
            // console.log(res.data)
            if (res.data.Headline) {
                dispatch({
                    type: 'GET_CURRENT_CITY',
                    payload: [city, res.data]
                })
            } else {
                dispatch({
                    type: 'SET_CITY_LOADING'
                })
                dispatch({
                    type: 'SET_ERROR',
                    payload: 'Something went wrong'
                })
            }
            
        })
        .catch(err =>
            {
                dispatch({
                type: 'SET_ERROR',
                payload: 'Weather informations about your current location could not be found, Kindly search for another city.'
                })
                dispatch({
                type: 'SET_CITY_LOADING'
                })
        }
        );
};
export const setCityLoading = () => dispatch => {
    dispatch({
        type: 'SET_CITY_LOADING'
    })
};


