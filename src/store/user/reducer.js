const initialState = {
    name: "",
    role: "",
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case "SET_USER":
            state = {
                ...state,
                name: action.payload.name,
                role: action.payload.role
            }
            break;
    
        default:
            state
            break;
    }
    return state;
}