import axios from 'axios';

export const getItems = () => dispatch => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        dispatch({
            type: 'GET_ITEMS',
            payload: res.data
        })
        console.log(res.data)
    })
    .catch(err =>
        console.log(err)
    );
    console.log(1)
};


