import * as CONST from "../constants";

export default cart => ({
    type: CONST.REMOVE_FROM_CART,
    payload: cart
})