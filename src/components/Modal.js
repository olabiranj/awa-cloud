import React, { useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// import { Offline, Online } from "react-detect-offline";
import { getCurrentCity } from "../actions/weatherActions";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

function SimpleDialog(props) {
    const modal = useSelector(state => state.modal.allCities);
    const dispatch = useDispatch();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        dispatch(getCurrentCity(value))
        dispatch({
            type: 'DELETE_CITIES'
        })
        onClose(false);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Select the city that best match your destination</DialogTitle>
            <List>
                {modal.map(city => (
                    <>
                        <ListItem button onClick={() => handleListItemClick(city.Key)} >
                            <ListItemText primary={city.LocalizedName} secondary={city.Country.LocalizedName} />
                        </ListItem>
                        <Divider />
                    </>
                ))}
                
                
            </List>
        </Dialog>
    );
}



const Modal = () => {
    const modal = useSelector(state => state.modal.hasContents);
    // const errMsg = useSelector(state => state.errMsg.errMsg);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    

    const handleClose = value => {
        dispatch({
            type: 'DELETE_CITIES'
        })
        setOpen(false);
    };

    useEffect(() => {

        dispatch({
            type: 'SET_CITY_LOADING'
        })
        axios.get('https://extreme-ip-lookup.com/json')
            .then(
                (res) => {
                    axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=7LiG257r9k285GCrDgHLQ7N1NArktXY3&q=${res.data.city}`)
                        .then(
                            (res) => {
                                if (res.data.length === 1) {
                                    localStorage.setItem('city', `${res.data[0].LocalizedName}, ${res.data[0].Country.LocalizedName}`);
                                    dispatch(getCurrentCity(res.data[0].Key))
                                } else if (res.data.length > 1) {
                                    dispatch({
                                        type: 'DISPLAY_CITIES',
                                        payload: res.data
                                    })
                                    localStorage.setItem('city', `${res.data[0].LocalizedName}, ${res.data[0].Country.LocalizedName}`)
                                } else {
                                    console.log('maybe');
                                }
                            }
                        )
                        .catch(err => console.log(err))
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
        <div>
            
            
            <SimpleDialog open={modal ? true : false} onClose={handleClose} />
        </div>
    )
}
export default Modal;