import {setMeta} from "./meta";

export const RECEIVE_USER = "RECIEVE_USERS";

export const fetchUser = id => (dispatch, getState) => {
    vkUser(id)
    .then(user => {
        const {first_name, last_name} = user;
        dispatch(setMeta({
            title: `${getState().MetaReducer.title} ${first_name} ${last_name}`
        }));

        dispatch(receiveUser({
            first_name, last_name
        }));
    });
};

export const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
});

const vkUser = (id) => {
    let target =`https://api.vk.com/method/users.get?user_ids=${id}&access_token=${vk.token}&v=${vk.version}`;
    
    return new Promise((resolve, reject) => {
        fetch(vk.proxy + target)
        .then(res => res.json())
        .then(user => {
            resolve(user.response[0]);
        });
    })
};

const vk = {
    proxy: "https://cors-anywhere.herokuapp.com/",
    token: "a24e6f1ce4a82c65c78bae357b82698b042d163541bb886c12cf6d5ad024bf1c14f32925af148ad0edcad",
    version: "5.80"
};








