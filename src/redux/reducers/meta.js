import * as MetaActions from "../actions/meta";

const initState = {
    title: "",
    description: "",
    styles: [],
    scripts: []
};

export default (state = initState, action) => {
    
    switch(action.type) {
        case MetaActions.SET_META: {
            return {...state, ...action.payload};
        }
        // case MetaActions.SET_STYLES: {
        //     return {...state, ...action.payload};
        // }
        // case MetaActions.SET_SCRIPTS: {
        //     return {...state, ...action.payload};
        // }
        default:
    }
    return state;
}