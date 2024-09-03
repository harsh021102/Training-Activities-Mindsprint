import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import CartReducer from "./cartreducer";

const rootreducer = combineReducers({
    counter:CounterReducer,
    cart: CartReducer
})
export default rootreducer