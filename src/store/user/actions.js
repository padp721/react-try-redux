export function setUser(newValue) {
    return {
        type: "SET_USER",
        payload: newValue,
    }
}