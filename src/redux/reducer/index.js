import {combineReducers} from "redux";
import filters from "./reducer/filters";
import pizzas from "./reducer/pizzas";
import cart from "./reducer/cart";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
})

export default rootReducer