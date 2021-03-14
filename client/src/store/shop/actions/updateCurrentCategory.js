import * as CONST from "../constants";

export default cart => ({
    type: CONST.UPDATE_CURRENT_CATEGORY,
    payload: cart
})