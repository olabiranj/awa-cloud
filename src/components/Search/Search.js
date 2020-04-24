import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCity } from "../../actions/weatherActions";

const Search = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const submit = (e) => {
        dispatch({
            type: "SET_CITY_LOADING",
        });
        dispatch({
            type: "CLEAR_ERROR",
        });
        dispatch({
            type: "DELETE_CITIES",
        });
        e.preventDefault();
        axios
            .get(
                `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=${input}`
            )
            .then((res) => {
                if (res.data.length === 1) {
                    localStorage.setItem(
                        "city",
                        `${res.data[0].LocalizedName}, ${res.data[0].Country.LocalizedName}`
                    );
                    dispatch(getCity(res.data[0].Key));
                } else if (res.data.length > 1) {
                    dispatch({
                        type: "DISPLAY_CITIES",
                        payload: res.data,
                    });
                    localStorage.setItem(
                        "city",
                        `${res.data[0].LocalizedName}, ${res.data[0].Country.LocalizedName}`
                    );
                } else {
                    dispatch({
                        type: "SET_CITY_LOADING",
                    });
                    dispatch({
                        type: "SET_ERROR",
                        payload: "The city you entered could not be found",
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: "SET_CITY_LOADING",
                });
                dispatch({
                    type: "SET_ERROR",
                    payload: "The city you entered could not be found",
                });
            });
        setInput("");
    };
    return (
        <div className="container col-lg-3 mt-4">
            <div className="container-s">
                <form data-testid="form" action="" onSubmit={submit}>
                    <input
                        type="text"
                        data-testid="input"
                        placeholder="Search City..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="search"></div>
                </form>
            </div>
        </div>
    );
};

export default Search;
