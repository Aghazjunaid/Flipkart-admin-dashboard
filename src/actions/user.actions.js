import { userContants } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: userContants.USER_REGISTER_REQUEST });
        const res = await axios.post(`/register`, {
            ...user
        });

        if(res.status === 200){
            
            const { message } = res.data.data;
            dispatch({
                type: userContants.USER_REGISTER_SUCCESS,
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: userContants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}


export const getUsers = () => {
    return async (dispatch) => {
      try {
          let usertList = [];
        dispatch({ type: userContants.GET_ALL_USERS_REQUEST });
        const res = await axios.get(`/user`);
        debugger
        if (res.status === 200) {
            usertList = res.data.data;
          debugger
          dispatch({
            type: userContants.GET_ALL_USERS_SUCCESS,
            payload: { usertList },
          });
        } else {
          dispatch({ type: userContants.GET_ALL_USERS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  
export const deleteUsers = (ids) => {
  return async dispatch => {
      dispatch({ type: userContants.DELETE_USER_BY_ID_REQUEST });
      const res = await axios.delete(`/user/${ids}`, {
      });
      if (res.status === 200) {
          dispatch({ type: userContants.DELETE_USER_BY_ID_SUCCESS });
      } else {
          const { error } = res.data;
          dispatch({
              type: userContants.DELETE_USER_BY_ID_FAILURE,
              payload: { error }
          });
      }
  }
}
  
