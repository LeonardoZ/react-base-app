import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

export default function Status() {
  const [state] = useContext(GlobalContext);
  return (
    <div>
      The count is <strong>{state.counter.value}</strong>
    </div>
  );
}
