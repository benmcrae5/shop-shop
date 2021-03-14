import * as CONST from "../constants";

export default cart => ({
    type: CONST.CLEAR_CART,
    payload: cart
})