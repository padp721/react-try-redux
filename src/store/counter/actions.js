export function setCounter(newValue) {
    return {
        type: "SET_COUNTER",
        payload: newValue,
    }
}