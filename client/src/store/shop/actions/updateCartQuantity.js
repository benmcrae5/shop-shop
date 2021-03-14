import * as CONST from "../constants";

export default cart => ({
    type: CONST.UPDATE_CART_QUANTITY,
    payload: cart
})