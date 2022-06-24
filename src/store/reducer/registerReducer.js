import { POST_REGISTER } from "../types";

const initialState = {
    data: [],
    isLoading: true,
    error: null,
};

const registerReducer = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case `${POST_REGISTER}_LOADING`:
            console.log("4. masuk reducer");
            return {
                ...state,
            };

        case `${POST_REGISTER}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false,
            };
        case `${POST_REGISTER}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error,
            };
            default:
                return state;
    };
};

export default registerReducer;