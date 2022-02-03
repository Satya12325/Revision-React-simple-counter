import Button from "./Button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubstract = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>{count}</h1>
      <div className="Div">
        <div>
          <Button title="+" onClick={handleAdd} />
        </div>
        <div>
          <Button title="-" onClick={handleSubstract} />
        </div>
      </div>
    </>
  );
};

export default Counter;
