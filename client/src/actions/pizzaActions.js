import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get("/api/pizzas/getAllPizzas");
    console.log(res);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
  }
};

export const filterPizza = (searchKey, category) => async (dispatch) => {
  let filteredPizza;
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const res = await axios.get("/api/pizzas/getAllPizzas");

    filteredPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    if (category !== "all") {
      filteredPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category.toLowerCase()
      );
    }

    dispatch({
      type: "GET_PIZZAS_SUCCESS",
      payload: filteredPizza,
    });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};
