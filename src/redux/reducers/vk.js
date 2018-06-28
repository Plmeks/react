import * as VkActions from "../actions/vk";

const initState = {
    first_name: "",
    last_name: ""
};

export default (state = initState, action) => {
    switch(action.type) {
        case VkActions.RECEIVE_USER: {
            return {...state, ...action.payload};
        }
        default:
    }
    return state;
}