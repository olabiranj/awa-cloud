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
            <form action="" method="post" onSubmit={submit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                        placeholder='Search City...'
                        value={input}
                        onChange={e => setInput(e.target.value)} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;