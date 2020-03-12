import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../actions/itemsAction";

const List = () => {
    const items = useSelector(state => state.item.items);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getItems())
    })

    return(
        <div>
            <input type="button" value="load" />
            {items.map((item) => (
                <h1 key={item.title}>{item.title}</h1>
            ))}
        </div>
    )
}

export default List;