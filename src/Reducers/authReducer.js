import {REGISTER_ADMIN} from "../Actions/type"

const initialState = {
    authToken:1,
    voterToken:null
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState,action){
    console.log(action.payload)
    switch(action.type){
        case REGISTER_ADMIN:
            state = {
                ...state,
                authToken:action.payload.token
            }
            return state
        default:
            return {
                ...state
            }
    }
}