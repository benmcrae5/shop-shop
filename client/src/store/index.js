import { createStore } from "redux";
import rootReducer from "./rootReducer";

export * from "./shop";

export default createStore(rootReducer);
