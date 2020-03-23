import axios from 'axios';

export const getCity = (cityKey) => dispatch => {
    axios
        .get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=7LiG257r9k285GCrDgHLQ7N1NArktXY3`)
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
        .catch(err => {
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

export const getCurrentCity = (cityKey) => dispatch => {
    axios
        .get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=7LiG257r9k285GCrDgHLQ7N1NArktXY3`)
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
                    type: 'GET_CURRENT_CITY',
                    payload: res.data
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

