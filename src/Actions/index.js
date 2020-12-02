import { REGISTER_ADMIN ,REGISTER_VOTER} from "./type"
import axios from "axios"
export const setAdminAuth = (token) => {
    return async (dispatch) => {
        dispatch(
            {type:REGISTER_ADMIN,
            payload:{
                token:token
            }}
        )

    }
}
export const setVoterAuth = (token)=>{
    return async (dispatch) => {
        dispatch(
            {type:REGISTER_VOTER,
            payload:{
                token:token
            }}
        )
    }
}