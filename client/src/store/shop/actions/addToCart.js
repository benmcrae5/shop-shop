import * as CONST from "../constants";

export default cart => ({
    type: CONST.ADD_TO_CART,
    payload: cart
})