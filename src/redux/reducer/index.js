import {combineReducers} from "redux";
import filters from "./filters";
import pizzas from "./pizzas";
import cart from "./basket";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
})

export default rootReducer