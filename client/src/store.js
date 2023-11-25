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

// Get cart items from localStorage or default to an empty array
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Initial state with cart items
const initialState = {
  cartReducer: {
    cartItems,
  },
};

// Combine reducers
const rootReducer = combineReducers({
  getAllPizzaReducer,
  cartReducer,
});

// Middleware array
const middleware = [thunk];

// Create and configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
  preloadedState: initialState,
});

export default store;
