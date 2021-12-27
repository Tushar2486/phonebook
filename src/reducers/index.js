import { combineReducers } from "redux";
import { allContactsReducer } from "./allContactsReducer";
import { newContactReducer } from "./newContactReducer";
import { recentReducer } from "./recentReducer";

const allReducer = combineReducers({
    allContacts : allContactsReducer,
    newContact: newContactReducer,
    recentCalls: recentReducer
})

export default allReducer