export function setAbout(newValue) {
    return {
        type: "SET_ABOUT",
        payload: newValue,
    }
}

export function setAboutStatus(newValue) {
    return {
        type: "SET_ABOUT_STATUS",
        payload: newValue,
    }
}