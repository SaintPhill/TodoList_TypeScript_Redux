import {createStore} from "redux";
import {rootState} from "../reducers";

let store = createStore(rootState);

export default store;