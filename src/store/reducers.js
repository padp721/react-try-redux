import { combineReducers } from "redux";

import counter from "./counter/reducer"
import about from "./about/reducer";

export default combineReducers({
    counter,
    about,
});