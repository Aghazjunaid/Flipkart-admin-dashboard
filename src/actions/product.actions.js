import axios from "../helpers/axios";
import { productConstants } from "./constants";

// new action
export const getProducts = () => {
  return async (dispatch) => {
    try {
        let productList = [];
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(`/product`);
      debugger
      if (res.status === 200) {
        productList = res.data.data;
        debugger
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { productList },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const addProduct = (proData) => {
  console.log("proData", proData)

  return async dispatch => {
      
      dispatch({ type: categoryConstansts.ADD_PRODUCT_REQUEST });
      const res = await axios.post(`product`, {
          ...proData
      });
      debugger
      console.log(res);
      if (res.status === 200) {

          const addedProduct = res.data;

          dispatch({  
              type: categoryConstansts.ADD_PRODUCT_SUCCESS,
              payload:  addedProduct 
          });
      } else {
          dispatch({
              type: categoryConstansts.ADD_PRODUCT_FAILURE,
              payload: { error: res.data.error }
          });
      }
  }
}

