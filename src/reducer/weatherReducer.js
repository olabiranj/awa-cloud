const initialState = {
    city: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_CITY':
            return {
                city: [action.payload],
                loading: false
            };
        case 'GET_CURRENT_CITY':
            return {
                city: [...action.payload],
                loading: false
            };
        case 'SET_CITY_LOADING':
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
