import React, { useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
// import { Offline, Online } from "react-detect-offline";
import { getCurrentCity } from "../actions/weatherActions";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

function SimpleDialog(props) {
    const modal = useSelector(state => state.modal.allCities);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = value => {
        dispatch(getCurrentCity(value))
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

    const [manyCities, setManyCites] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    

    const handleClose = value => {
        setOpen(false);
        setSelectedValue(value);
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
                                    setOpen(true);
                                    
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
            
            
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    )
}
export default Modal;