import { decrece, increce } from "./actions/counter";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter: {counter.number}</h3>
      <button onClick={() => dispatch(increce())}>add</button>
      <button onClick={() => dispatch(decrece())}>remove</button>
    </div>
  );
}

export default App;
