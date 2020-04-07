const initialState = {
    errMsg: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "SET_ERROR":
            return {
                errMsg: action.payload,
            };

        case "CLEAR_ERROR":
            return {
                errMsg: "",
            };
        default:
            return state;
    }
}
