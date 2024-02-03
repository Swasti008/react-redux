const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};
