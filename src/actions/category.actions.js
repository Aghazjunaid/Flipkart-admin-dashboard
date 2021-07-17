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

export const addCategory = (catData) => {
    console.log("catData", catData)

    return async dispatch => {
        
        dispatch({ type: categoryConstansts.ADD_NEW_CATEGORY_REQUEST });
        const res = await axios.post(`category`, {
            ...catData
        });
        debugger
        console.log(res);
        if (res.status === 200) {

            const addedCategory = res.data;

            dispatch({  
                type: categoryConstansts.ADD_NEW_CATEGORY_SUCCESS,
                payload:  addedCategory 
            });
        } else {
            dispatch({
                type: categoryConstansts.ADD_NEW_CATEGORY_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}