// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"; // Corrected import
// import { getAllPizzaReducer } from "./reducers/pizzaReducer";

// const rootReducer = combineReducers({
//   getAllPizzaReducer: getAllPizzaReducer,
// });

// const initialState = {};
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
  getAllPizzaReducer,
  cartReducer,
});

const cartItem = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const inititalState = {
  cartReducer: {
    cartItems,
  },
};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});

export default store;
