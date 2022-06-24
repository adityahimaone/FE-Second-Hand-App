import { POST_LOGIN } from "../types";

const initialState = {
    data: [],
    isLoading: true,
    error: null,
};

const loginReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case `${POST_LOGIN}_LOADING`:
            console.log("4. masuk reducer");
            return {
                ...state,
            };

        case `${POST_LOGIN}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false,
            };
        case `${POST_LOGIN}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error,
            };
            default:
                return state;
    };
};

export default loginReducer;