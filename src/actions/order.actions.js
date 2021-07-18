import axios from "../helpers/axios";
import { productConstants } from "./constants";

// new action
export const getOrders = () => {
  return async (dispatch) => {
    try {
        let orderList = [];
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      const res = await axios.get(`/order`);
      debugger
      if (res.status === 200) {
        orderList = res.data.data;
        debugger
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { orderList },
        });
      } else {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
