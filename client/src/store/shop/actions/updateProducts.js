import * as CONST from "../constants";

export default cart => ({
    type: CONST.UPDATE_PRODUCTS,
    payload: cart
})