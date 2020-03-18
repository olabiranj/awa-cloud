import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {getCity} from '../actions/weatherActions';


const Search = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const submit = (e) => {
        dispatch({
            type: 'SET_CITY_LOADING'
        })
        e.preventDefault();
        dispatch(getCity(input))
    }
    return(
        <div className="container col-lg-3 mt-4">
            <div className="container-s">
                <form action="" onSubmit={submit}>
                    <input type="text"
                        placeholder='Search City...'
                        value={input}
                        onChange={e => setInput(e.target.value)}/>
                    <div className="search"></div>
                </form>
            </div>
        </div>
    )
}

export default Search;