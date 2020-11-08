import { useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { GlobalContext, actions } from "../../GlobalContext";
import Status from "./Status";

function App() {
  const dispatch = useContext(GlobalContext)[1];

  const increase = () => {
    dispatch({
      type: actions.INCREASE_COUNTER,
      payload: { value : 1}
    })
  };

  const decrease = () => {
    dispatch({
      type: actions.DECREASE_COUNTER,
      payload: { value : -1}
    })
  };

  return (
    <div className="App">
      Mololo
      <button onClick={increase}>Inc</button>
      <button onClick={decrease}>Dec</button>
      <Status />
      <p>More about:</p>
      <ul>
        <li>
          <Link to="/about/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="/about/cats">Cats</Link>
        </li>
        <li>
          <Link to="/about/ants">Ants</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
