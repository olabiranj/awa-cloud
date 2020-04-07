import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { Offline, Online } from "react-detect-offline";
import { getCurrentCity } from "../../actions/weatherActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

export function SimpleDialog(props) {
    const cities = useSelector((state) => state.modal.allCities);
    const dispatch = useDispatch();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        dispatch(getCurrentCity(value));
        dispatch({
            type: "DELETE_CITIES",
        });
        onClose(false);
    };

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">
                Select the city that best match your destination
            </DialogTitle>
            <List>
                {cities.map((city) => (
                    <div key={city.Key}>
                        <ListItem
                            button
                            onClick={() => handleListItemClick(city.Key)}
                        >
                            <ListItemText
                                primary={city.LocalizedName}
                                secondary={city.Country.LocalizedName}
                            />
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </Dialog>
    );
}

export const Modal = () => {
    const modal = useSelector((state) => state.modal.hasContents);
    // const errMsg = useSelector(state => state.errMsg.errMsg);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClose = (value) => {
        dispatch({
            type: "DELETE_CITIES",
        });
        setOpen(false);
    };

    useEffect(() => {
        dispatch({
            type: "SET_CITY_LOADING",
        });

        axios
            .get(
                `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=kH2TWY2TmQ3USiRPnvyZPPweMBM1ZIt7&q=abuja`
            )
            .then((res) => {
                if (res.data.length === 1) {
                    localStorage.setItem(
                        "city",
                        `${res.data[0].LocalizedName}, ${res.data[0].Country.LocalizedName}`
                    );
                    dispatch(getCurrentCity(res.data[0].Key));
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
                    console.log(1);
                    dispatch({
                        type: "SET_CITY_LOADING",
                    });
                    dispatch({
                        type: "SET_ERROR",
                        payload: "The city you entered could not be found",
                    });
                }
            });
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <SimpleDialog open={modal ? true : open} onClose={handleClose} />
        </div>
    );
};
