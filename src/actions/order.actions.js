import axios from "../helpers/axios";
import { orderConstants } from "./constants";

// new action
export const getOrders = () => {
  return async (dispatch) => {
    try {
        let orderList = [];
      dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_REQUEST });
      const res = await axios.get(`/order`);
      debugger
      if (res.status === 200) {
        orderList = res.data.data;
        debugger
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
          payload: { orderList },
        });
      } else {
        dispatch({ type: orderConstants.GET_CUSTOMER_ORDER_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
