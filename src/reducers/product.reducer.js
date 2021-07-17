import { productConstants } from "../actions/constants";

const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            debugger
            state = {
                ...state,
                products: action.payload.productList
            }
            break;
    }

    return state;
}
