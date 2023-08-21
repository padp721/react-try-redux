const initialState = {
    value: 0,
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case "SET_COUNTER":
            state = {
                ...state,
                value: action.payload,
            };
            break;
    
        default:
            state
            break;
    }
    return state;
}