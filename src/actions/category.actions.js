import axios from "../helpers/axios";
import { categoryConstansts } from "./constants";

export const getAllCategory = () => {
    return async dispatch => {

        let categoryList = [];
        dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
        const res = await axios.get(`category`);
        console.log(res);
        if (res.status === 200) {

            categoryList = res.data;

            dispatch({  
                type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
                payload:  categoryList 
            });
        } else {
            dispatch({
                type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res.data.error }
            });
        }


    }
}
