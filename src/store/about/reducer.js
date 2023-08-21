const initialState = {
    value: "",
    status: false,
};

export default function about(state = initialState, action) {
    switch (action.type) {
        case "SET_ABOUT":
            state = {
                ...state,
                value: action.payload,
            }
            break;
        case "SET_ABOUT_STATUS":
            state = {
                ...state,
                status: action.payload
            }
        default:
            state
            break;
    }
    return state
}