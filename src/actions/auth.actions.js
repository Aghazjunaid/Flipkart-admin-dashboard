import { authConstants } from "./constants";
import axios from "../helpers/axios";

export const login = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/login`, {
            ...user
        });
debugger
        if(res.status === 200){
            const { token } = res.data.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}
