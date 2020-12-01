import { REGISTER_ADMIN } from "./type"
import axios from "axios"
export const register = (user) => {
    return async (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })
        };
        const res = fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        if (res.status === 200) {
            dispatch(
                {
                    type: REGISTER_ADMIN,
                    payload: {
                        user
                    }
                }
            )
        }

    }
}