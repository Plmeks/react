import MetaReducer from "./meta";
import VkReducer from "./vk";
import { combineReducers } from "redux";

export default combineReducers({
    MetaReducer,
    VkReducer
});