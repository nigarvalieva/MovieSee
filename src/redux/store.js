import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

let store = createStore(reducer);

export default store;