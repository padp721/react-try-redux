import { combineReducers } from "redux";

import counter from "./counter/reducer"
import about from "./about/reducer";
import user from "./user/reducer"

export default combineReducers({
    counter,
    about,
    user,
});