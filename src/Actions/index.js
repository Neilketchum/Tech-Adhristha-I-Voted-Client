import { REGISTER_ADMIN } from "./type"
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