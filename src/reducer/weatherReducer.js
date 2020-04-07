const initialState = {
  city: [],
  loading: true,
  current: localStorage.getItem("city"),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_CITY":
      return {
        city: [action.payload],
        loading: false,
        current: localStorage.getItem("city"),
      };
    case "GET_CURRENT_CITY":
      return {
        city: [action.payload],
        loading: false,
        current: localStorage.getItem("city"),
      };
    case "SET_CITY_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
