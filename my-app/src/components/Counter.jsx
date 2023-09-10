import React, {useState} from "react";
import "../App.css";

export default function Counter() {
  const [num, setNum] = useState(0);
  
  return (
    <div className="counter">
      <span className="number">{num}</span>
      <button className="button" onClick={() => {
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
      }
      }>+
      </button>
      <button className="resetbutton" onClick={() => {
        setNum(num - num);
      }
      }>Reset
      </button>
    </div>
  );
}
