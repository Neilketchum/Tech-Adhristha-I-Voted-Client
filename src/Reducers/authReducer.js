import {REGISTER_ADMIN} from "../Actions/type"

const initialState = {

}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState,action){
    console.log(action.payload)
    switch(action.type){
        case REGISTER_ADMIN:
            
            return {
                ...state
            }
            
        default:
            return {
                ...state
            }
    }
}