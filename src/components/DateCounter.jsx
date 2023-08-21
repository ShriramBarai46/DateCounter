import { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("August 21 2023");
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div>Test</div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}

export default DateCounter;
