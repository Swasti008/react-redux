import CounterReducer from "./Reducer";
import { createStore } from "redux";
import { incrementCount, decrementCount } from "./Action";
import { useState } from "react";


const store = createStore(CounterReducer);

export default function LikeCounter() {
  const [like, setLike] = useState(0);

  const subscribe = store.subscribe(() => {
    setLike(store.getState().count);
  });

  return (
    <>
      <h1>REDUX COUNTER</h1>
      <h1>{like}</h1>
      <button onClick={() => store.dispatch(incrementCount())}>Like</button>
      <button onClick={() => store.dispatch(decrementCount())}>Unlike</button>
    </>
  );
}
