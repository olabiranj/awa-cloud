const initialState = {
    allCities: [],
    hasContents: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DISPLAY_CITIES':
            return { ...state, 
                    allCities: [...action.payload],
                    hasContents: true
            };
        case 'DELETE_CITIES':
            return {
                allCities: [],
                hasContents: false
            };
        default:
            return state;
    }
}
