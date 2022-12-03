import { combineReducers } from "redux";
import { messagesReducer } from "./messages";
import { usersReducer } from "./users";

export const rootReducer = combineReducers({
    messages: messagesReducer,
    users: usersReducer
})